import React, {useState, useEffect, useCallback} from 'react';
import {
  FlatList,
  RefreshControl,
  View,
  Text,
  Button,
  TextInput,
} from 'react-native';
import debounce from '../../utils/debounce';
import {serachCoins} from '../../services/request';
import SearchInput from './SearchInput';
import SearchResult from './SearchResult';

const SearchComp = () => {
  const [coins, setCoins] = useState([]);
  const fetchCoins = async coinName => {
    console.log('fetchCoins');
    const coinsData = await serachCoins(coinName);
    setCoins(coinsData?.coins);
  };
  const onChangeText = text => {
    if (text === '') {
      setCoins('');
    }
    fetchCoins(text);
  };
  const optimizedFn = useCallback(debounce(onChangeText, 400), []);
  console.log('coins', coins);
  return (
    <View>
      <SearchInput setInput={optimizedFn} />
      <SearchResult coins={coins} />
    </View>
  );
};

export default SearchComp;
