import * as types from './actionTypes';

export const actLoadingPokemonData = () => ({
    type: types.LOADING_POKEMON_DATA
});

export const actLoadingPokemonDataDone = () => ({
    type: types.LOADING_POKEMON_DATA_DONE
});