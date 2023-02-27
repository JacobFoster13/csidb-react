import { useState, useEffect } from "react"
import React from 'react'
import { Button } from "react-bootstrap"
import NavbarComp from "./components/NavbarComp"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TVShows from "./pages/TVShows"
import About from "./pages/About"
import Movies from "./pages/Movies"
import Splash from "./pages/Splash"
import Actors from "./pages/Actors"

const App = () => {

    const [data, setData] = useState([{}])

    // useEffect(() => {
    //     fetch('/actors').then(
    //         res => res.json()
    //     ).then(
    //         data => {
    //             setData(data)
    //             console.log(data)
    //         }
    //     )
    // }, [])
    return (
        <div>
            <NavbarComp />
            <BrowserRouter>
                <Routes>
                    <Route exact path={'/'} element={<Splash />} />
                    <Route exact path={'/tvshows'} element={<TVShows />} />
                    <Route exact path={'/actors'} element={<Actors />} />
                    <Route exact path={'/movies'} element={<Movies />} />
                    <Route exact path={'/about'} element={<About />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
