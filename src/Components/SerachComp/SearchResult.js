import React from 'react';
import {
  FlatList,
  RefreshControl,
  View,
  Text,
  Button,
  TextInput,
} from 'react-native';
import SearchItem from './SearchItem';

const SearchResult = ({coins}) => {
  return (
    <View>
      <FlatList
        data={coins}
        renderItem={({item}) => <SearchItem marketCoin={item} />}
        // onEndReached={() => fetchMoreCoins(coins.length / 15 + 1, sort)}
        keyExtractor={item => item.market_cap_rank}
        refreshControl={
          <RefreshControl
            // refreshing={loading}
            tintColor="white"
            // onRefresh={refetchCoins}
          />
        }
      />
    </View>
  );
};
export default SearchResult;
