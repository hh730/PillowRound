import React from 'react';
import {
  Text,
  View,
  Image,
  Pressable,
  Modal,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import CheckIcon from '../../Common/icons/CheckIcon';
import SortItem from './SortItem';
import styles from './styles';

const SortCoins = props => {
  const {isVisible, setVisible, sort, setSort, setCoins} = props;
  const orderArr = [
    {name: 'Highest Price', order: 'price_desc'},
    {name: 'Lowest Price', order: 'price_asc'},
    {name: 'Top Gainers', order: 'hour_24_desc'},
    {name: 'Top Losers', order: 'hour_24_asc'},
    {name: 'Highest Volume', order: 'volume_desc'},
    {name: 'Lowest Volume', order: 'volume_asc'},
    {name: 'Highest Market Cap', order: 'market_cap_desc'},
    {name: 'Lowest Market Cap', order: 'market_cap_asc'},
  ];
  const onSort = order => {
    setSort(order);
    setVisible(false);
    sort === order ? null : setCoins([]);
  };
  return (
    //   <View style={{ backgroundColor: 'black',justifyContent:'center',height:'100' }}>
    // <Modal
    //   visible={isVisible}
    //       transparent={true}
    //       animationType={'slide'}
    //   onRequestClose={() => {
    //     setVisible(!isVisible);
    //       }}>
    // market_cap_desc, gecko_desc, gecko_asc, market_cap_asc, market_cap_desc, volume_asc, volume_desc, id_asc, id_desc
    <SafeAreaView
    //    style={{ backgroundColor: 'black', justifyContent: 'flex-end' }}
    >
      <View style={styles.sortContainer}>
        <Text style={styles.sortTextStyle}>Sort By</Text>
        <Button title="close" onPress={() => setVisible(false)} />
      </View>
      <View>
        {orderArr.map(order => {
          return (
            <SortItem
              onSort={onSort}
              sort={sort}
              title={order?.name}
              order={order?.order}
            />
          );
        })}
      </View>
    </SafeAreaView>
    // </Modal>
    // </View>
  );
};
export default SortCoins;
