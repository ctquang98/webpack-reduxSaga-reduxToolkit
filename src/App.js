import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PokemonList from './components/pokemonList';
import SearchBar from './components/searchBar';
import SearchPage from './components/searchPage';
import PokemonDetail from './components/pokemonDetail';

import { actFetchPokemonData } from './redux/actions/pokemonAction';

function App() {
  // const pokemon = useSelector(state => state.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchPokemonData());
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
