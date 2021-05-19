import * as types from '../actions/actionTypes';

const initialState = {
    pokemonList: [],
    limit: 20,
    offset: 0,
    fetching: false
};

const pokemonReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.ADD_POKEMON:
            return {
                ...state,
                pokemonList: [...state.pokemonList, ...action.payload],
                offset: state.offset + state.limit,
                fetching: false
            }
        case types.FETCHING_DATA:
            return {
                ...state,
                fetching: true
            }
        default: return state;
    }
}

export default pokemonReducer;