import React, {Component} from 'react';

import {Router, Stack, Scene} from 'react-native-router-flux';

import PokemonList from './pages/PokemonList';
import PokemonDisplay from './pages/PokemonDisplay';
import PokemonOfDay from './pages/PokemonOfDay';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack key="root" hideNavBar={true}>
          <Scene
            key="PokemonList"
            component={PokemonList}
            title="PokemonList"
          />
          <Scene
            key="PokemonDisplay"
            component={PokemonDisplay}
            title="PokemonDisplay"
          />
          <Scene
            key="PokemonOfDay"
            component={PokemonOfDay}
            title="PokemonOfDay"
          />
        </Stack>
      </Router>
    );
  }
}
