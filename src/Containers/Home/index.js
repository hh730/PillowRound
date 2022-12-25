import React, {useEffect, useState} from 'react';
import {FlatList, RefreshControl, View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CoinList from '../CoinList';
import Search from '../Serach';
import styles from './styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <CoinList />
    </View>
  );
};

export default Home;
