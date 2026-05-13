import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Poke from "./Poke";
import Trainer from "./inicio"
import Pokep2 from "./Pokep2"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Trainer />} />
                <Route path="/poke" element={<Poke />} />
                <Route path="/Pokep2" element={<Pokep2 />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;