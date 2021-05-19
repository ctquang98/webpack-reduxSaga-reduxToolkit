import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonDetail } from '../../api/api';
import style from './style.module.css';
import { Card, CardMedia, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    cardContainer: {
        width: '60%',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center'
    },
    cardMedia: {
        margin: 'auto',
        width: '250px',
        height: '250px'
    },
    cardContent: {
        width: '60%'
    }
});

function PokemonDetail() {
    const [pokemonDetail, setPokemonDetail] = useState({});
    const { pokemonId } = useParams();
    const classes = useStyles();
    const imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

    useEffect(() => {
        async function fetchPokemonData() {
            try {
                const data = await getPokemonDetail(pokemonId);
                if(data) {
                    setPokemonDetail(data);
                    console.log(data);
                }
            }
            catch(error) {
                console.error(error);
            }
        }
        fetchPokemonData();
    }, [pokemonId]);

    return (
        <div className={style.container}>
            <div className={style.header}>
                <h1>{pokemonDetail.name}</h1>
            </div>
            <Card className={classes.cardContainer}>
                <div className={style.mediaContainer}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={`${imageUrl}/${pokemonId}.png`}
                    />
                </div>
                <CardContent className={classes.cardContent}>
                    <div className={style.pokedexDataHeader}>
                        <h1>Pokedex Data</h1>
                    </div>
                    <div className={style.pokedexData}>
                        {
                            Array.isArray(pokemonDetail.stats) && pokemonDetail.stats.length
                            ? pokemonDetail.stats.map((p, i) =>
                                <p key={i}>{p.stat.name}: {p.base_stat}</p>
                             )
                            : null
                        }
                        <p>Height: {pokemonDetail.height}m</p>
                        <p>weight: {pokemonDetail.weight} kg</p>
                        <p>
                            Type: {' '} 
                            {   
                                Array.isArray(pokemonDetail.stats) && pokemonDetail.stats.length
                                ? pokemonDetail.types.map((p, i) =>
                                    <span key={i}>{p.type.name} | </span>
                                )
                                : null
                            }
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default PokemonDetail;