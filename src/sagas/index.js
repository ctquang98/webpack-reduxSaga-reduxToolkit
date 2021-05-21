import { all } from 'redux-saga/effects';
import watchFetchPokemonData from './pokemonSaga';

function* helloSaga() {
    console.log('hello saga');
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchFetchPokemonData()
    ]);
}