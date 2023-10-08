import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from 'react-native-screens/native-stack';

import {RootState} from '../../store';
import {IDriver} from '../../store/interfaces';
import {Screens} from '../../navigation/screens';
import {RootStackParamList} from '../../navigation/Navigator';

import styles from './driverInfoScreen.styles';

export type DriverInfoScreenProps = NativeStackScreenProps<
  RootStackParamList,
  Screens.driverInfo
>;

const DriverInfoScreen: React.FC<DriverInfoScreenProps> = ({route}) => {
  const driverId = route.params.driverId;
  const driver = useSelector<RootState, IDriver | undefined>(
    (state: RootState) =>
      state.drivers.data.find(driver => driver.driverId === driverId),
  );
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>
            {driver?.familyName} {driver?.givenName}
          </Text>
          <Text style={styles.subtitle}>{driver?.dateOfBirth}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>Nationality: {driver?.nationality}</Text>
        </View>
      </View>
    </View>
  );
};

export default DriverInfoScreen;
