import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TVShows = () => {

    const [shows, setShows] = useState([{}])

    useEffect(() => {
        axios.get('/tvshows')
            .then(res => {
                console.log(res.status, "from the TVShows API")
            })
    }, [])

    return (
        <div>
            <h1>tv shows</h1>
        </div>
    )
}

export default TVShows