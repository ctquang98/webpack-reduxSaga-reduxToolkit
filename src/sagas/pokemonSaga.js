import { call, put, select, takeEvery } from "@redux-saga/core/effects";
import { getPokemonList } from '../api/api';
import { actAddPokemon } from '../redux/actions/pokemonAction';
import { actLoadingPokemonData, actLoadingPokemonDataDone } from '../redux/actions/loadingAction';
import * as types from '../redux/actions/actionTypes';

const getPokemonState = state => state.pokemon; // state = root state

function* fetchPokemonData() {
    try {
        yield put(actLoadingPokemonData());
        const { limit, offset } = yield select(getPokemonState);
        const data = yield call(getPokemonList, limit, offset);
        if (data) {
            yield put(actAddPokemon(data));
        }
        yield put(actLoadingPokemonDataDone());
    }
    catch(error) {
        console.error(error);
        yield put(actLoadingPokemonDataDone());
    }

}

function* watchFetchPokemonData() {
    yield takeEvery(types.FETCH_DATA, fetchPokemonData);
}

/*
    # call vs folk
    call: blocking
    folk: non blocking
*/

// # Multiple watcher & worker

// function* getPokemonDetail() {
//     // do stuff
// }

// export function* watchGetPokemonDetail() {
//     // do stuff
// }

export default watchFetchPokemonData;