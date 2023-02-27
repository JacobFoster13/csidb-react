import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, CardGroup, Table } from 'react-bootstrap'

const Actors = () => {

    const [actors, setActors] = useState([{}])

    useEffect(() => {
        axios.get('/actors')
            .then(res => {
                setActors(res.data.actors)
                console.log(res.data.actors)
                }
            )
            .catch((err) => console.log(err))
    }, [])

    const createCard = (actor) => {
        // console.log(actor)
        return (
            <Card style={{width: '18rem'}}>
                <Card.Img variant='top' src={actor.img} />
                <Card.Body>
                    <Card.Title>{actor.name}</Card.Title>
                    <Card.Text>{actor.bioshort}...</Card.Text>
                </Card.Body>
            </Card>
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