import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Trainer from "./pages/inicio/inicio";
import Poke from "./pages/poke/poke";
import Pokep2 from "./pages/Pokep2/Pokep2";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Trainer />} />
                <Route path="/Poke/" element={<Poke />} />
                <Route path="/Pokep2/" element={<Pokep2 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;