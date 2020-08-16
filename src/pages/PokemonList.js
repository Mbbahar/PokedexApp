import React, {Component} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {ListItem, SearchBar} from 'react-native-elements';
import {Button, Left, Right, Icon} from 'native-base';
import CapitalizedText from '../components/CapitalizedText';
import styles from '../styles/pokemonListStyles';
import Navbar from '../components/Navbar';

export default class PokemonOfDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      pokeList: [],
      search: '',
      date: '',
    };
    this.arrayholder = [];
  }

  componentDidMount() {
    return fetch('http://pokeapi.co/api/v2/pokemon/?limit=1000')
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          isLoading: false,
          pokeList: response.results,
        });
        this.arrayholder = response.results;
      })
      .catch((err) => console.log(err));
  }

  _SearchFilterFunction = (text) => {
    const newData = this.arrayholder.filter((item) => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      pokeList: newData,
    });
  };

  _listSeparator = () => {
    return <View style={styles.separator} />;
  };

  RandFunction = () => {
    const keys = Object.keys(this.state.pokeList);
    let i = keys.length - 1;
    const j = Math.floor(Math.random() * i);
    url = this.state.pokeList[keys[j]].url;

    this.props.navigation.navigate('PokemonOfDay', {
      pokemonsUrlWithDetails: this.state.pokeList[keys[j]].url,
    });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.indicator}>
          <Text style={styles.loadingText}>Loading PokéList</Text>
          <ActivityIndicator />
        </View>
      );
    } else {
      var right = (
        <Right style={{flex: 1}}>
          <Button
            onPress={
              () => this.RandFunction()
            }
            transparent>
            <Icon name="ios-calendar-outline" />
          </Button>
        </Right>
      );
      return (
        <SafeAreaView style={{flex: 1}}>
          <Navbar right={right} title="Pokédex" />
          <View style={styles.searchArea}>
            <SearchBar
              round
              inputStyle={{fontSize: 18}}
              inputContainerStyle={{height: 50, backgroundColor: '#fff'}}
              containerStyle={{height: 70, backgroundColor: '#fff'}}
              placeholder="Search Pokémon..."
              onChangeText={(text) => this._SearchFilterFunction(text)}
            />
          </View>

          <View style={styles.container}>
            <FlatList
              data={this.state.pokeList}
              renderItem={({item}) => (
                <ListItem
                  chevronColor="black"
                  chevron
                  title={
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.pokemonNumber}>
                        {'#' + item.url.slice(34).replace('/', '') + ' '}
                      </Text>
                    </View>
                  }
                  leftAvatar={{
                    rounded: true,
                    size: 'xlarge',
                    source: {
                      uri:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
                        item.url.slice(34).replace('/', '') +
                        '.png',
                    },
                  }}
                  containerStyle={{
                    backgroundColor:
                      'rgb(' +
                      Math.floor(Math.random() * 256) +
                      ',' +
                      Math.floor(Math.random() * 256) +
                      ',' +
                      Math.floor(Math.random() * 256) +
                      ')',
                  }}
                  avatarStyle={{backgroundColor: '#fff'}}
                  subtitle={
                    <CapitalizedText style={styles.pokemonName}>
                      {item.name}
                    </CapitalizedText>
                  }
                  onPress={() => {
                    this.props.navigation.navigate('PokemonDisplay', {
                      pokemonsUrlWithDetails: item.url,
                    });
                  }}
                />
              )}
              ItemSeparatorComponent={this._listSeparator}
              keyExtractor={(item) => item.name}
            />
          </View>
        </SafeAreaView>
      );
    }
  }
}
