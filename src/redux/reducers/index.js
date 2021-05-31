import { combineReducers } from 'redux';

// # redux
// import pokemonReducer from './pokemonReducer';
// import loadingReducer from './loadingReducer';

// # redux toolkit
import pokemonReducer from './pokemonSlice';
import loadingReducer from './loadingSlice';


const rootReducers = combineReducers({
    pokemon: pokemonReducer,
    loading: loadingReducer
});

export default rootReducers;