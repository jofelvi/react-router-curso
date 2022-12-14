import react, {useEffect, useState} from 'react'
import CardPokemon from "../components/CardPokemon";
import axios from "axios";

const HomePage = ()=>{
    let url = "https://pokeapi.co/api/v2/pokemon?limit=151%27"
    const [pokemos, setPokemos] = useState([]);

    useEffect(() => {
        callAPiPokemon()
    }, []);

    const callAPiPokemon = async ()=>{
       await axios.get(url).then((response) =>
            setPokemos(response.data.results)
        )
    }

    const renderPokemon = (
        pokemos.map(item => (
            <CardPokemon
                name={item.name}
                url={item.url}
            />
        ))
    )


    return(
        <>
         <h3>Home</h3>
            {
                pokemos.length > 0 ? renderPokemon : null
            }
        </>
    )
}

export  default HomePage
