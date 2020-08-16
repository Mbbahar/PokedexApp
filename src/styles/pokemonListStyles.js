import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchArea: {
    height: 100,
    backgroundColor: '#fff',
  },
  indicator: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#4C495E',
  },
  separator: {
    height: 30,
    backgroundColor: '#fff',
  },
  loadingText: {
    fontSize: 30,
    color: '#FFF',
    textAlign: 'center',
    margin: 15,
  },
  list: {
    flexGrow: 1,
  },
  pokemonName: {
    fontSize: 25,
    color: 'black',
  },
  pokemonNumber: {
    fontSize: 20,
    height: 30,
    color: '#747476',
  },
  pokeIconCard: {
    width: 100,
    height: 100,
  },
  button: {
    width: '100%',
    margin: 10,
  },
  amount: {
    fontSize: 20,
    color: '#FFF',
    textAlign: 'center',
    margin: 5,
  },

  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
});
