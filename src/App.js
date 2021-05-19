import './App.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PokemonList from './components/pokemonList';
import SearchBar from './components/searchBar';
import SearchPage from './components/searchPage';
import PokemonDetail from './components/pokemonDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { fetchPokemonData } from './redux/actions/pokemonAction';

function App() {
  const pokemon = useSelector(state => state.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonData(pokemon.limit, pokemon.offset));
  }, []);
  
  return (
    <Router>
      <div className="App">
        <SearchBar />
        <Switch>
          <Route path='/' exact>
            <PokemonList />
          </Route>
          <Route
            path='/search/:keyword'
            render={(props) => (
              <SearchPage {...props}/>
            )}
          />
          <Route path='/:pokemonId'>
            <PokemonDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
