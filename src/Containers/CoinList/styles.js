import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  companyNameTextStyle: {
    color: 'white',
    fontSize: 25,
    letterSpacing: 1,
    paddingHorizontal: 20,
    paddingBottom: 5,
  },
  poweredByTextStyle: {color: 'lightgrey', fontSize: 12, paddingHorizontal: 20},
  loadingConatiner: {justifyContent: 'center', alignItems: 'center'},
  loadingTextStyle: {color: 'white', fontSize: 50},
  errorCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
