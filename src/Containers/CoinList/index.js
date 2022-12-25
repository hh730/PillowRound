import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  RefreshControl,
  View,
  Text,
  Button,
  TextInput,
} from 'react-native';
import CoinItem from '../../Components/CoinItem/Index';
import {getMarketData} from '../../services/request';
import isEmpty from 'lodash/isEmpty';
import SortCoins from '../../Components/SortCoins';
import ErrorCard from '../../Common/ErrorCard';
import PollingInput from '../../Components/PollingInput';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CoinList = props => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [isInputVisible, setInputVisible] = useState(false);
  const [sort, setSort] = useState('market_cap_desc');
  const [polling, setPolling] = useState(60000);

  const fetchCoins = async (pageNumber, order) => {
    if (loading) {
      return;
    }
    setLoading(true);
    const coinsData = await getMarketData(pageNumber, order);
    setCoins(coinsData);
    setLoading(false);
  };
  const fetchMoreCoins = async (pageNumber, order) => {
    if (loading) {
      return;
    }
    setLoading(true);
    const coinsData = await getMarketData(pageNumber, order);
    setCoins(existingCoins => [...existingCoins, ...coinsData]);
    setLoading(false);
  };

  const refetchCoins = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const coinsData = await getMarketData(1, sort);
    setCoins(coinsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins(1, sort);
  }, [sort]);
  useEffect(() => {
    setPolling(30000);
  }, []);
  useEffect(() => {
    if (polling && polling > 0) {
      const interval = setInterval(fetchCoins, polling);
      return () => clearInterval(interval);
    }
  }, [polling]);
  console.log('polling', polling);

  const onSubmitClick = inputData => {
    console.log('inputData', inputData);
    setPolling(inputData * 60000);
    setInputVisible(false);
  };
  return (
    <View>
      <View style={styles.headerConatiner}>
        <View>
          <Text style={styles.companyNameTextStyle}>Pillow</Text>
          <Text style={styles.poweredByTextStyle}>Powered by CoinGecko</Text>
        </View>
        <View>
          <Button
            title="Refresh After"
            onPress={() => setInputVisible(!isInputVisible)}
          />
          {/* <Button title="Sort" onPress={() => setVisible(!isVisible)} /> */}
        </View>
      </View>
      <View
        style={{
          justifyContent: 'flex-start',
          flexDirection: 'row',
          paddingLeft: 16,
        }}>
        {!isInputVisible ? (
          <Button title="Sort" onPress={() => setVisible(!isVisible)} />
        ) : null}
      </View>
      {isInputVisible ? <PollingInput onSubmitClick={onSubmitClick} /> : null}
      {isVisible ? (
        <SortCoins
          isVisible={isVisible}
          setVisible={setVisible}
          sort={sort}
          setSort={setSort}
          setCoins={setCoins}
          setLoading={setLoading}
        />
      ) : null}
      {isEmpty(coins) && loading ? (
        <View style={styles.loadingConatiner}>
          <Text style={styles.loadingTextStyle}>Loading...</Text>
        </View>
      ) : !isEmpty(coins) ? (
        <FlatList
          data={coins}
          renderItem={({item}) => (
            <CoinItem marketCoin={item} loading={loading} />
          )}
          onEndReached={() => fetchMoreCoins(coins.length / 15 + 1, sort)}
          keyExtractor={item => item.market_cap_rank}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              tintColor="white"
              onRefresh={refetchCoins}
            />
          }
        />
      ) : (
        <View style={styles.errorCard}>
          <ErrorCard handleRefresh={() => fetchCoins(1, sort)} />
        </View>
      )}
    </View>
  );
};

export default CoinList;
