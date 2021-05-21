import * as types from './actionTypes';

export function actFetchPokemonData() {
    return {
        type: types.FETCH_DATA
    }
}

export function actAddPokemon(pokemons) {
    return {
        type: types.ADD_POKEMON,
        payload: pokemons
    }
}
