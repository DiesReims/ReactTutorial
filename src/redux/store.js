import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

//Siempre se llaman los reducers.
import pokeReducer from './pokeDucks';

//Combinar todos los reducers(Ducks)
const rootReducer = combineReducers({
    pokemones: pokeReducer
})

//Para la extension de Redux Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Se crea la tienda
export default function generateStore(){
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
    return store;
}