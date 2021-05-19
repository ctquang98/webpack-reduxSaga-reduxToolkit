import React, { useState, useEffect } from 'react';
import PokemonItem from '../pokemonList/pokemonItem';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    pokedexContainer: {
        padding: '20px',
        backgroundColor: '#ffc77b',
        width: '100%',
        minHeight: '100vh',
        margin: 'auto'
    },
    cirularProgress: {
        textAlign: 'center'
    }
});

function SearchPage() {
    const pokemon = useSelector(state => state.pokemon);
    const { keyword } = useParams();
    const [pokemonFiltered, setPokemonFiltered] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        const { pokemonList } = pokemon;
        if(Array.isArray(pokemonList) && pokemonList.length) {
            const filterPokemon = pokemonList.filter(p => {
                const lowerCase = keyword.toLowerCase();
                return p.name.includes(lowerCase);
            })
            setPokemonFiltered(filterPokemon);
        }
    }, [keyword, pokemon]);

    function onRenderPokemon(pokemonList) {
        let result = null;
        if(Array.isArray(pokemonList) && pokemonList.length) {
            result = pokemonList.map((pokemon, index) => (
                <PokemonItem pokemon={pokemon} key={index}/>
            ));
        }
        return result;
    }

    return (
        <div>
            <Grid container spacing={3} className={classes.pokedexContainer}>
                {!pokemonFiltered.length
                 ? <Grid item xs={12} className={classes.cirularProgress}>
                       Not Found
                   </Grid>
                 : onRenderPokemon(pokemonFiltered)
                }
            </Grid>
        </div>
    );
}

export default SearchPage;