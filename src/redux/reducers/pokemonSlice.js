import { createSlice } from '@reduxjs/toolkit';

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        pokemonList: [],
        limit: 20,
        offset: 0,
    },
    reducers: {
        getPokemon() {},
        addPokemon(state, action) {
            return {
                ...state,
                pokemonList: [...state.pokemonList, ...action.payload],
                offset: state.offset + state.limit,
            }
        }
    }
});

// dispatch(getPokemon()) => return type: pokemon/getPokemon
export const { getPokemon, addPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;