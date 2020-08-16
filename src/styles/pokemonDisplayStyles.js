import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  topArea: {
    height: 200,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eae8e8',
    flexDirection: 'row',
  },
  container: {
    flex: 2,
    justifyContent: 'center',
  },
  indicator: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#4C495E',
  },
  loadingText: {
    fontSize: 30,
    color: '#FFF',
    textAlign: 'center',
    margin: 15,
  },
  pokeName: {
    fontSize: 25,
    color: '#000',
    textAlign: 'center',
    margin: 10,
  },
  pokeNameNormal: {
    fontSize: 20,
    color: '#000',
    textAlign: 'left',
    margin: 5,
  },
  pokeNameShiny: {
    fontSize: 23,
    color: '#f5fdb5',
    textAlign: 'center',
    margin: 10,
  },
  pokeIcon: {
    resizeMode: 'stretch',
    width: 200,
    height: 200,
  },
  pokeIconCard: {
    width: 50,
    height: 60,
  },
  renderHeaderItemStyle: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#a9a8a8',
  },
  renderContentItemStyle: {
    backgroundColor: '#eee4e1',
    padding: 30,
    fontStyle: 'italic',
  },
});
