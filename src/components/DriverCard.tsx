import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Screens} from '../navigation/screens';
import {useNavigation} from '@react-navigation/native';
import {IDriverCardProps} from './interfaces';

import {RootStackParamList} from '../navigation/Navigator';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';

export type DriverInfoStack = NativeStackNavigationProp<
  RootStackParamList,
  Screens.driverInfo
>;

const DriverCard: React.FC<IDriverCardProps> = ({driver}) => {
  const navigation = useNavigation<DriverInfoStack>();
  return (
    <View style={styles.container}>
      <Image
        source={require('../asset/F1-icon-square.png')}
        style={styles.image}
      />
      <View style={styles.titleContainer}>
        <Text
          style={styles.title}
          onPress={() =>
            navigation.navigate(Screens.driverInfo, {
              driverId: driver.driverId,
            })
          }>
          Driver: {driver.givenName} {driver.familyName}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    flexWrap: 'wrap',
    marginHorizontal: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DriverCard;
