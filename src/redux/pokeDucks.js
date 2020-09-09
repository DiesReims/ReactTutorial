import axios from "axios";
//Constantes
const dataInicial = {
    array: [],
    offset: 0,
}

//Types
const OBTENER_POKEMONES_EXITO = "OBTENER_POKEMONES_EXITO";
const SIGUIENTE_POKEMONES_EXITO = "SIGUIENTE_POKEMONES_EXITO";
const ANTERIOR_POKEMONES_EXITO = "ANTERIOR_POKEMONES_EXITO";

//Reducer
export default function pokeReducer(state = dataInicial, action) {
    switch (action.type) {
        case OBTENER_POKEMONES_EXITO:
            return { ...state, array: action.payload }
        case SIGUIENTE_POKEMONES_EXITO:
            return { ...state, array: action.payload.array, offset: action.payload.offset }
        case ANTERIOR_POKEMONES_EXITO:
            return { ...state, array: action.payload.array, offset: action.payload.offset }
        default:
            return state
    }
}
//Acciones
export const obtenerPokemonesAccion = () => async (dispatch, getState) => {

    const { offset } = getState().pokemones;
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: res.data.results
        })
    } catch (error) {
    }
}

export const siguientePokemonAccion = () => async (dispatch, getState) => {
    const { offset } = getState().pokemones;
    const siguiente = offset + 20;
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${siguiente}&limit=20`)
        dispatch({
            type: SIGUIENTE_POKEMONES_EXITO,
            payload: {
                array: res.data.results,
                offset: siguiente
            }
        });
    } catch (error) {
        console.log(error)
    }
}

export const anteriorPokemonAccion = () => async (dispatch, getState) => {
    const { offset } = getState().pokemones;
    const anterior = (offset - 20 < 0 ? 0 : offset - 20);
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${anterior}&limit=20`);
        dispatch({
            type: ANTERIOR_POKEMONES_EXITO,
            payload: {
                array: res.data.results,
                offset: anterior
            }
        });
    } catch (error) {
        console.log(error);
    }
}