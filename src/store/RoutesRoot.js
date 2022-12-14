import {  Routes, Route  } from "react-router-dom";
import HomePage from "../pages/Home";
import DetalleId from "../pages/detalle";

const  RoutesRoot = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pokemon/:pokemonId" element={<DetalleId />} />
        </Routes>
    );
}


export default RoutesRoot;
