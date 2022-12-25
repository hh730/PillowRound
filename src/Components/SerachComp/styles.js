import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  text: {
    color: 'white',
    marginRight: 5,
  },
  coinContainer: {
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#282828',
    padding: 15,
  },
  rank: {
    fontWeight: 'bold',
    color: 'white',
  },
  rankContainer: {
    backgroundColor: '#585858',
    paddingHorizontal: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  imageStyle: {
    height: 30,
    width: 30,
    marginRight: 10,
    alignSelf: 'center',
  },
  rightData: {
    flexDirection: 'row',
    marginLeft: 'auto',
    alignItems: 'flex-start',
  },
  leftData: {flexDirection: 'row'},
  antStyle: {alignSelf: 'center', marginRight: 5},
  marketCapTextStyle: {color: 'white'},
  textInputStyle: {
    color: 'white',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 20,
    height: 60,
    fontSize: 25,
    width: '100%',
    paddingLeft: 16,
  },
  textInputConatiner: {flexDirection: 'row', padding: 16},
});

export default styles;
