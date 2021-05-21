import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PokemonItem from './pokemonItem';
import { actFetchPokemonData } from '../../redux/actions/pokemonAction';
import { Grid, CircularProgress, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    pokedexContainer: {
        padding: '20px',
        backgroundColor: '#ffc77b',
        width: '100%',
        margin: 'auto'
    },
    cirularProgress: {
        textAlign: 'center'
    }
});


function PokemonList() {
    const pokemon = useSelector(state => state.pokemon);
    const loading = useSelector(state => state.loading);
    const dispatch = useDispatch();
    const classes = useStyles();

    function onRenderPokemon(pokemonList) {
        let result = null;
        if(Array.isArray(pokemonList) && pokemonList.length) {
            result = pokemonList.map((pokemon, index) => (
                <PokemonItem pokemon={pokemon} key={index}/>
            ));
        }
        return result;
    }

    function handleLoadmorePokemon() {
        dispatch(actFetchPokemonData());
    }

    return (
        <div>
            <Grid container spacing={3} className={classes.pokedexContainer}>
                {!pokemon.pokemonList.length
                 ? <Grid item xs={12} className={classes.cirularProgress}>
                       Not Found
                   </Grid>
                 : onRenderPokemon(pokemon.pokemonList)
                }
                <Grid item xs={12} className={classes.cirularProgress}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleLoadmorePokemon}
                        disabled={loading.pokemonData ? true : false}
                    >
                        {loading.pokemonData ? <CircularProgress /> : null}
                        Loadmore...
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default PokemonList;