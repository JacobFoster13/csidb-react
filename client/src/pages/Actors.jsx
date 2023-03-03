import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, CardGroup, Modal, Table } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Actors = () => {

    const [actors, setActors] = useState([{}])
    const [modal, setModal] = useState(false)
    const [modalActor, setModalActor] = useState('')

    useEffect(() => {
        axios.get('/actors')
            .then(res => {
                setActors(res.data.actors)
                console.log(res.data.actors)
                }
            )
            .catch((err) => console.log(err))
    }, [])

    const handleOpen = (actor) => {
        let mActor
        for (let key in actors) {
            if (actors[key].name === actor.target.text) {
                mActor = actors[key]
            }
        }
        setModalActor(mActor)
        setModal(true)
    }
    const handleClose = () => setModal(false)

    const formatMovies = (movies) => {
        console.log("format movies:", movies)
        console.log(typeof movies)
        if (movies[0] != null) {
            console.log(true)
            console.log(movies[0])
            return (
                movies[0].map((m, idx) => {
                    console.log(m)
                    return (
                        <span key={idx}> <Link to={"/movies"}>{m}</Link>,  </span>
                )
                })
            )
        }
    }

    const createCard = (actor) => {
        return (
            <>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant='top' src={actor.img} />
                    <Card.Body>
                        <Card.Title>
                            <Link onClick={handleOpen}>{actor.name}</Link>
                        </Card.Title>
                        <Card.Text>{actor.bioshort}...</Card.Text>
                    </Card.Body>
                </Card>

                <Modal show={modal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{modalActor.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{modalActor.bio}</p>
                        <hr />
                        <p>
                            <strong>Movies:</strong>
                            {formatMovies(Array(modalActor.movies))}
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
            <h1>Actors</h1>
            <Table responsive>
                <thead>
                    <tr>
                        {actors.map((a, index) => {
                            return (
                                <th key={index}>
                                    <CardGroup>
                                        {createCard(a)}
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

export default Actors