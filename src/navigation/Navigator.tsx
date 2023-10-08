import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/DriversScreen';
import DriverInfoScreen from '../screens/DriverInfo/DriverInfoScreen';
import {Screens} from './screens';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';

export type RootStackParamList = {
  [Screens.driverInfo]: {driverId: string};
  [Screens.drivers]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const Navigator = () => {
  const totalDrivers = useSelector<RootState, number>(
    state => state.drivers.totalDrivers,
  );
  const loadedDrivers = useSelector<RootState, number>(
    state => state.drivers.data.length,
  );
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.drivers}
        component={HomeScreen}
        options={{
          title: `F1 Drivers (${loadedDrivers} of ${totalDrivers})`,
        }}
      />
      <Stack.Screen
        name={Screens.driverInfo}
        component={DriverInfoScreen}
        options={{
          title: 'Driver Information',
        }}
      />
    </Stack.Navigator>
  );
};
