import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';

const SearchInput = ({setInput}) => {
  return (
    <View>
      <View style={styles.textInputConatiner}>
        <TextInput
          style={styles.textInputStyle}
          placeholder={'Search'}
          placeholderTextColor="white"
          onChangeText={setInput}
        />
      </View>
    </View>
  );
};

export default SearchInput;
