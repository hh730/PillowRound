import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Containers/Home';
import Search from '../Containers/Serach';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  // Screen Name
  const homeName = 'Home';
  const serachName = 'Search';
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;
          if (rn === homeName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === serachName) {
            iconName = focused ? 'search' : 'search-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          paddingTop: 0,
          backgroundColor: '#121212',
        },
        headerShown: false,
      })}>
      <Tab.Screen name={homeName} component={Home} />
      <Tab.Screen name={serachName} component={Search} />
    </Tab.Navigator>
  );
};

export default Navigation;
