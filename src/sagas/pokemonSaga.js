import { call, put, select, takeEvery } from "@redux-saga/core/effects";
import { getPokemonList } from '../api/api';

// # Redux
// import { actAddPokemon } from '../redux/actions/pokemonAction';
// import { actLoadingPokemonData, actLoadingPokemonDataDone } from '../redux/actions/loadingAction';
// import * as types from '../redux/actions/actionTypes';

// # Redux toolkit
import { getPokemon, addPokemon } from '../redux/reducers/pokemonSlice';
import { isLoading, isDone } from '../redux/reducers/loadingSlice';

const getPokemonState = state => state.pokemon; // state = root state

function* fetchPokemonData(action) { // action.payload
    console.log(action.payload);
    try {
        yield put(isLoading());
        // yield put(actLoadingPokemonData());
        const { limit, offset } = yield select(getPokemonState);
        const data = yield call(getPokemonList, limit, offset);
        if (data) {
            yield put(addPokemon(data));
            // yield put(actAddPokemon(data));
        }
        yield put(isDone());
        // yield put(actLoadingPokemonDataDone());
    }
    catch(error) {
        console.error(error);
        yield put(isDone());
        // yield put(actLoadingPokemonDataDone());
    }

}

function* watchFetchPokemonData() {
    // yield takeEvery(types.FETCH_DATA, fetchPokemonData);
    yield takeEvery(getPokemon.type, fetchPokemonData);
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