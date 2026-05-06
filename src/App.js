import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Poke from "./Poke";
import Trainer from "./inicio"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Trainer/>} />
                <Route path="/poke" element={<Poke />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;