import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, CardGroup, Modal, Table } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const TVShows = () => {

    const [shows, setShows] = useState([{}])
    const [modal, setModal] = useState(false)
    const [modalShow, setModalShow] = useState('')

    useEffect(() => {
        axios.get('/tvshows')
            .then(res => {
                setShows(res.data.tvshows)
                console.log(res.data.tvshows)
                }
            )
            .catch((err) => console.log(err))
    }, [])

    const handleOpen = (actor) => {
        let mShow
        for (let key in shows) {
            if (shows[key].title === actor.target.text) {
                mShow = shows[key]
            }
        }
        setModalShow(mShow)
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

    const createCard = (show) => {
        return (
            <>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant='top' src={show.img} />
                    <Card.Body>
                        <Card.Title>
                            <Link onClick={handleOpen}>{show.title}</Link>
                        </Card.Title>
                        <Card.Text>{show.shortDescription}...</Card.Text>
                    </Card.Body>
                </Card>

                <Modal show={modal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{modalShow.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{modalShow.description}</p>
                        <hr />
                        <p>
                            <strong>Cast: </strong>
                            {formatCast(Array(modalShow.cast))}
                        </p>
                        <p>
                            <strong>Reviews: </strong>
                            {modalShow.reviews}
                        </p>
                        <p>
                            <strong>MPAA Rating: </strong>
                            {modalShow.rating}
                        </p>
                        <p>
                            <strong>Seasons: </strong>
                            {modalShow.seasons}
                        </p>
                        <p>
                            <strong>Episodes: </strong>
                            {modalShow.episodes}
                        </p>
                        <p>
                            <strong>Filming Status: </strong>
                            {modalShow.status}
                        </p>
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
            <h1>TV Shows</h1>
            <Table responsive>
                <thead>
                    <tr>
                        {shows.map((s, idx) => {
                            return (
                                <th key={idx}>
                                    <CardGroup>
                                        {createCard(s)}
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

export default TVShows