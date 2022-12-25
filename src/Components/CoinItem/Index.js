import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import styles from './styles';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

const CoinItem = ({marketCoin}) => {
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
    'image',
    'https://global-uploads.webflow.com/61eee289c1264b822d8ce543/6335b2419d033f198f7bad59_Pillow%20Logo%20(1).png',
  );

  const percentageColor =
    priceChangePercentage24h < 0 ? '#ea3943' : '#16c784' || 'white';

  const normalizeData = marketCapData => {
    if (marketCapData > 1e12) {
      return `${(marketCapData / 1e12).toFixed(3)} T`;
    }
    if (marketCapData > 1e9) {
      return `${(marketCapData / 1e9).toFixed(3)} B`;
    }
    if (marketCapData > 1e6) {
      return `${(marketCapData / 1e6).toFixed(3)} M`;
    }
    if (marketCapData > 1e3) {
      return `${(marketCapData / 1e3).toFixed(3)} K`;
    }
    return marketCapData;
  };

  return (
    <View>
      {isEmpty(marketCoin) ? null : (
        <TouchableOpacity style={styles.coinContainer}>
          <Image source={{uri: image}} style={styles.imageStyle} />
          <View>
            <Text style={styles.title}>{name}</Text>
            <View style={styles.leftData}>
              {typeof marketCapRank === 'number' ? (
                <View style={styles.rankContainer}>
                  <Text style={styles.rank}>{marketCapRank}</Text>
                </View>
              ) : null}
              <Text style={styles.text}>{symbol.toUpperCase()}</Text>
              <AntDesign
                name={priceChangePercentage24h < 0 ? 'caretdown' : 'caretup'}
                size={12}
                color={percentageColor}
                style={styles.antStyle}
              />
              <Text style={{color: percentageColor}}>
                {priceChangePercentage24h?.toFixed(2)} %
              </Text>
            </View>
          </View>
          <View style={styles.rightData}>
            <Text style={styles.title}>{normalizeData(currentPrice)}</Text>
            <Text style={styles.marketCapTextStyle}>
              MCap {normalizeData(marketCap)}
            </Text>
            <Text style={styles.marketCapTextStyle}>
              Volume {normalizeData(totalVolume)}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CoinItem;
