import { combineReducers } from 'redux';
import pokemonReducer from './pokemonReducer';

const appReducers = combineReducers({
    pokemon: pokemonReducer
});

export default appReducers;