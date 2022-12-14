import React, {useEffect, useState} from 'react';
import {useParams } from 'react-router-dom';
import axios from "axios";

const DetalleId = () => {

    let { pokemonId } = useParams();
    const [pokemon, setPokemon] = useState([]);
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`

    useEffect(() => {
        callAPiPokemon()
    }, []);

    const callAPiPokemon = async ()=>{
        await axios.get(url).then((response) =>
            setPokemon(response.data)
        )
    }

    return (
        <div>
            <label>
                detalle id {JSON.stringify(pokemon)}
            </label>
        </div>
    )
}
export default DetalleId;
