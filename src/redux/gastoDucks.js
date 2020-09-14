
const dataInicial = {
    array: []
}

//TYPES
const AÑADIR_GASTO_EXITO = "AÑADIR_GASTO_EXITO";
const REMOVED_GASTO_EXITO = "REMOVED_GASTO_EXITO";

//REDUCER
export default function gastoReducer(state = dataInicial, action) {
    switch (action.type) {
        case AÑADIR_GASTO_EXITO:
            return { ...state, array: action.payload }
        case REMOVED_GASTO_EXITO:
            return { ...state, array: action.payload }
        default:
            return state
    }
}

//ACCIONES
export const añadirGastoAccion = (obj) => async (dispatch, getState) => {
    try {
        const gastosActualesList = getState().gastos.array;
        const gastosEdited = [...gastosActualesList, obj];
        console.log(gastosEdited);
        dispatch({
            type: AÑADIR_GASTO_EXITO,
            payload: gastosEdited
        })
    }
    catch (error) {
        console.log(error);
    }
}

export const removedGastoAccion = (id) => async (dispatch, getState) => {
    try {
        const gastosActualesList = getState().gastos.array;
        const gastosEdited = [...gastosActualesList];
        const removed = gastosEdited.filter((v) => v.gasto !== id)
        dispatch({
            type: REMOVED_GASTO_EXITO,
            payload: removed
        })
    }
    catch (error) {
        console.log(error)
    }
}
