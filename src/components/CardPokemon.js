import React from 'react';
import {Link} from "react-router-dom";

const CardPokemon = (props) => {
 const { name,url } = props;

    return (
        <div>
            <h4>{name}</h4>
            <p>{url}</p>
            <Link to={`/pokemon/${name}`} > ir a detalle </Link>
        </div>
    )
}
export default CardPokemon;
