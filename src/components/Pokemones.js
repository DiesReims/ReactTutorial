import React from "react";
//hooks react redux
import {useDispatch, useSelector} from 'react-redux';
//importamos la acción.
import {obtenerPokemonesAccion, siguientePokemonAccion, anteriorPokemonAccion} from '../redux/pokeDucks';

const Pokemones = () => {
    //declaramos dispatch para llamar a la acción o acciones.
    const dispacth = useDispatch();

    const pokis = useSelector(store => store);
    //creamos el estate utilizando nuestra tienda.
    //store.pokemones lo sacamos de la tienda.
    const pokemones = useSelector(store => store.pokemones.array)
    return (
        <div className="container">
            <h2>Lista de Pokemones utilizando Redux</h2>
            <div className="btn btn-group">
            <button className="btn btn-dark"
            onClick={() => dispacth(anteriorPokemonAccion())}>
                Anterior</button>
            <button className="btn btn-dark"
            onClick={() => dispacth(obtenerPokemonesAccion())}>
                Obtener</button>
            <button className="btn btn-dark"
            onClick={() => dispacth(siguientePokemonAccion())}>
                Siguiente</button>
            </div>
            <ul className="list-group">
                {pokemones.map(item => (
                    <li 
                    className="list-group-item"
                    key={item.name}>{item.name}</li>)
                )}
            </ul>
        </div>
    )
}

export default Pokemones;