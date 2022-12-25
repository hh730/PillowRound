import React, {useEffect, useState} from 'react';
import {FlatList, RefreshControl, View, Text} from 'react-native';
import CoinList from '../CoinList';
import SearchComp from '../../Components/SerachComp';
import styles from './styles';

const Search = () => {
  return (
    <View style={styles.container}>
      <SearchComp />
    </View>
  );
};

export default Search;
