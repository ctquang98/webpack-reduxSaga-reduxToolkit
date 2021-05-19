import api from './index';

export const getPokemonList = (limit, offset) => {
    return new Promise((resolve, reject) => {
        api.get(`/pokemon?limit=${limit}&offset=${offset}`)
            .then(res => {
                let { results } = res.data;
                console.log(res.data);
                resolve(results);
            })
            .catch(err => reject(err));
    });
}

export const getPokemonDetail = pokemonId => {
    return new Promise((resolve, reject) => {
        api.get(`/pokemon/${pokemonId}`)
            .then(res => {
                const { data } = res;
                resolve(data);
            })
            .catch(err => reject(err));
    });
}