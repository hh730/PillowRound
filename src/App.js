import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import styles from './styles';
import Navigation from './Navigation';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Navigation />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
