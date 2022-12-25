import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    backgroundColor: 'red',
  },
  input: {
    height: 60,
    margin: 16,
    borderWidth: 1,
    padding: 16,
  },
  pagination: {
    display: 'flex',
    flexDirection: 'column',
  },
  flatList: {
    height: '90%',
    marginBottom: 10,
  },
  item: {
    padding: 16,
  },
  flatListItem: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    marginBottom: 16,
    padding: 16,
    borderRadius: 20,
  },
  flatListItemImage: {width: 50, height: 50, marginRight: 8},
  flatListItemButtom: {
    borderWidth: 1,
    borderRadius: 10,
    height: 36,
  },
  flatListItemLeft: {flex: 1, flexDirection: 'row'},
  flatListItemDescription: {flex: 1, flexDirection: 'column'},
});

export default styles;
