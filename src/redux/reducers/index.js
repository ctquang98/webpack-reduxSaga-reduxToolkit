import { combineReducers } from 'redux';
import pokemonReducer from './pokemonReducer';
import loadingReducer from './loadingReducer';

const appReducers = combineReducers({
    pokemon: pokemonReducer,
    loading: loadingReducer
});

export default appReducers;