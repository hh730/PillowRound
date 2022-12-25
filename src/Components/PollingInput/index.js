import React, {useState, useEffect} from 'react';
import {View, Button, TextInput} from 'react-native';
import styles from './styles';

const PollingInput = ({onSubmitClick}) => {
  const [input, setInput] = useState(10000);
  return (
    <View style={styles.textInputConatiner}>
      <TextInput
        style={styles.textInputStyle}
        placeholder={'Enter In Minutes'}
        placeholderTextColor="white"
        onChangeText={text => setInput(text)}
        keyboardType="numeric"
      />
      <Button title="Submit" onPress={() => onSubmitClick(input)} />
    </View>
  );
};
export default PollingInput;
