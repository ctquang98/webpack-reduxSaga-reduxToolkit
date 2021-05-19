import * as types from './actionTypes';
import { getPokemonList } from '../../api/api';

export function addPokemon(pokemonList) {
    return {
        type: types.ADD_POKEMON,
        payload: pokemonList
    }
}

export function fetchPokemonData(limit, offset) {
    return dispatch => {
            dispatch(fetchingData());
            return getPokemonList(limit, offset)
                .then(data => {
                    if(Array.isArray(data) && data.length) {
                        dispatch(addPokemon(data));
                        //return data;
                    }
                })
                .catch(error => {
                    console.error(error);
                });
    }
}

export function fetchingData() {
    return {
        type: types.FETCHING_DATA
    }
}