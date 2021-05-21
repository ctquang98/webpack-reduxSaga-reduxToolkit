import * as types from '../actions/actionTypes';

const initialState = {
    pokemonData: false
};

const loadingReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.LOADING_POKEMON_DATA:
            return { pokemonData: true };
        case types.LOADING_POKEMON_DATA_DONE:
            return { pokemonData: false };
        default: return {...state};
    }
}

export default loadingReducer;