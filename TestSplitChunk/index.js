import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Paper, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    searchBar: {
        width: '30%',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px'
    },
    home: {
        flexGrow: '1'
    },
    searchContent: {
        flexGrow: '7'
    },
    searchIcon: {
        flexGrow: '2'
    }
});

function SearchBar() {
    const [keyword, setKeyword] = useState('');
    const classes = useStyles();
    return (
        <div style={{ backgroundColor: '#ffc77b' }}>
            <Paper className={classes.searchBar}>
                <IconButton
                    className={classes.home}
                    onClick={() => setKeyword('')}
                    component={Link}
                    to='/'
                >
                    <SvgIcon color='primary'>
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </SvgIcon>
                </IconButton> 
                <InputBase
                    placeholder='Search pokemon'
                    className={classes.searchContent}
                    value={keyword}
                    onChange={e => setKeyword(e.target.value)}
                />
                {keyword.length
                 ? <IconButton
                        className={classes.searchICon}
                        component={Link}
                        to={`/search/${keyword}`}
                    >
                        <SearchIcon />
                   </IconButton> 
                 : <IconButton className={classes.searchICon}>
                        <SearchIcon />
                   </IconButton> 
                }
            </Paper>
        </div>
    );
}

export default SearchBar;