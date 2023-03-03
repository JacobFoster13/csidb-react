import React from 'react'
import NavbarComp from "./components/NavbarComp"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TVShows from "./pages/TVShows"
import About from "./pages/About"
import Movies from "./pages/Movies"
import Splash from "./pages/Splash"
import Actors from "./pages/Actors"

const App = () => {

    return (
        <div>
            <NavbarComp />
            <BrowserRouter>
                <Routes>
                    <Route exact path={'/splash'} element={<Splash />} />
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
