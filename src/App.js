import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Trainer from "./pages/inicio";
import Poke from "./pages/Poke";
import Pokep2 from "./pages/Pokep2";
import PokePrincipal from "./pages/PokePrincipal"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Trainer />} />
                <Route path="/Poke/:id" element={<Poke />} />
            
            </Routes>
        </BrowserRouter>
    )
}

export default App;