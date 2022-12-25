import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import NoInternet from '../icons/NoInternet';
import ErrorPhone from '../icons/ErrorPhone';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    // fontFamily: 'Brown-Bold',
    lineHeight: 22,
    marginTop: 16,
    marginBottom: 14,
    marginHorizontal: 28,
    textAlign: 'center',
  },
});

const ErrorCard = props => {
  const {handleRefresh, style, textStyle} = props;

  return (
    <View style={[styles.container, {...style}]}>
      <Text style={styles.text}>Press Icon to Retry.</Text>
      {handleRefresh && (
        <TouchableOpacity
          onPress={() => {
            handleRefresh();
          }}>
          <ErrorPhone />
        </TouchableOpacity>
      )}
      <Text style={[styles.text, {...textStyle}]}>
        Please try after some time.
      </Text>
    </View>
  );
};

export default ErrorCard;
