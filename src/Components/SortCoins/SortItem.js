import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import CheckIcon from '../../Common/icons/CheckIcon';

const SortItem = props => {
  const {onSort, sort, title, order} = props;
  return (
    <View style={{paddingLeft: 16}}>
      <TouchableOpacity onPress={() => onSort(order)}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: sort !== order ? 'white' : '#4f86e0',
              fontSize: 20,
              paddingHorizontal: 10,
            }}>
            {title}
          </Text>
          {sort === order ? <CheckIcon /> : null}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SortItem;
