import React from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

const SearchItem = ({marketCoin, loading}) => {
  const id = get(marketCoin, 'id', '');
  const name = get(marketCoin, 'name', '');
  const currentPrice = get(marketCoin, 'current_price', 0);
  const marketCapRank = get(marketCoin, 'market_cap_rank', 1);
  const totalVolume = get(marketCoin, 'total_volume', '');
  const priceChangePercentage24h = get(
    marketCoin,
    'price_change_percentage_24h',
    0,
  );
  const symbol = get(marketCoin, 'symbol', '');
  const marketCap = get(marketCoin, 'market_cap', 0);
  const image = get(
    marketCoin,
    'large',
    'https://global-uploads.webflow.com/61eee289c1264b822d8ce543/6335b2419d033f198f7bad59_Pillow%20Logo%20(1).png',
  );
  const navigation = useNavigation();

  const percentageColor =
    priceChangePercentage24h < 0 ? '#ea3943' : '#16c784' || 'white';

  const normalizeMarketCap = marketCap => {
    if (marketCap > 1e12) {
      return `${(marketCap / 1e12).toFixed(3)} T`;
    }
    if (marketCap > 1e9) {
      return `${(marketCap / 1e9).toFixed(3)} B`;
    }
    if (marketCap > 1e6) {
      return `${(marketCap / 1e6).toFixed(3)} M`;
    }
    if (marketCap > 1e3) {
      return `${(marketCap / 1e3).toFixed(3)} K`;
    }
    return marketCap;
  };

  return (
    <View>
      {isEmpty(marketCoin) ? null : (
        <Pressable
          style={styles.coinContainer}
          onPress={() =>
            navigation.navigate('CoinDetailedScreen', {coinId: id})
          }>
          <Image source={{uri: image}} style={styles.imageStyle} />
          <View>
            <Text style={styles.title}>{name}</Text>
          </View>
          <View style={styles.rightData}>
            {typeof marketCapRank === 'number' ? (
              <View style={styles.rankContainer}>
                <Text style={styles.rank}>{marketCapRank}</Text>
              </View>
            ) : null}
            <Text style={styles.title}>{symbol.toUpperCase()}</Text>
          </View>
        </Pressable>
      )}
    </View>
  );
};

export default SearchItem;
