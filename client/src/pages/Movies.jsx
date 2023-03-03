import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Button, Card, CardGroup, Modal, Table } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Movies = () => {

    const [movies, setMovies] = useState([{}])
    const [modal, setModal] = useState(false)
    const [modalMovie, setModalMovie] = useState('')

    useEffect(() => {
        axios.get('/movies')
            .then(res => {
                setMovies(res.data.movies)
                console.log(res.data.movies)
                }
            )
            .catch((err) => console.log(err))
    }, [])

    const handleOpen = (movie) => {
        let mMovie
        for (let key in movies) {
            if (movies[key].title === movie.target.text) {
                mMovie = movies[key]
            }
        }
        setModalMovie(mMovie)
        setModal(true)
    }
    const handleClose = () => setModal(false)

    const formatCast = (cast) => {
        console.log("format cast:", cast)
        console.log(typeof cast)
        if (cast[0] != null) {
            console.log(true)
            console.log(cast[0])
            return (
                cast[0].map((a, idx) => {
                    console.log(a)
                    return (
                        <span key={idx}> <Link to={"/actors"}>{a}</Link>,  </span>
                )
                })
            )
        }
    }

    const formatDirectors = (directors) => {
        console.log("format directors:", directors)
        console.log(typeof directors)
        if (directors[0] != null) {
            console.log(true)
            console.log(directors[0])
            return (
                directors[0].map((d, idx) => {
                    console.log(d)
                    return (
                        <span key={idx}> {d},  </span>
                )
                })
            )
        }
    }

    const createCard = (movie) => {
        return (
            <>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant='top' src={movie.img} />
                    <Card.Body>
                        <Card.Title>
                            <Link onClick={handleOpen}>{movie.title}</Link>
                        </Card.Title>
                        <Card.Text>{movie.shortDescription}...</Card.Text>
                    </Card.Body>
                </Card>

                <Modal show={modal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{modalMovie.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{modalMovie.description}</p>
                        <hr />
                        <p>
                            <strong>Cast: </strong>
                            {formatCast(Array(modalMovie.cast))}
                        </p>
                        <p>
                            <strong>Director: </strong>
                            {formatDirectors(Array(modalMovie.director))}
                        </p>
                        <p>
                            <strong>Reviews: </strong>
                            {modalMovie.reviews}
                        </p>
                        <p>
                            <strong>MPAA Rating: </strong>
                            {modalMovie.rating}
                        </p>
                        <p>
                            <strong>Length: </strong>
                            {modalMovie.length} minutes
                        </p>
                        {modalMovie.postCredit === 'No' ? <p>There is no post credit scene for {modalMovie.title}.</p> : <p>{modalMovie.title} has a post credit scene.</p>}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }

    return (
        <div>
            <h1>Movies</h1>
            <Table responsive>
                <thead>
                    <tr>
                        {movies.map((m, idx) => {
                            return (
                                <th key={idx}>
                                    <CardGroup>
                                        {createCard(m)}
                                    </CardGroup>
                                </th>
                            )
                        })}
                    </tr>
                </thead>
            </Table>
        </div>
    )
}

export default Movies