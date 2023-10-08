import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, ActivityIndicator, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {topHeadlineRequest} from '../../store/action';
import DriverCard from '../../components/DriverCard';
import styles from './DriversScreen.style';
import {IState} from '../../store/interfaces';
import {RootState} from '../../store';

const DriversScreen: React.FC = () => {
  const [offset, setOffset] = useState<number>(5);
  const driversModel = useSelector<RootState, IState>(state => state.drivers);
  const dispatch = useDispatch();

  const requestAPI = () => {
    dispatch(
      topHeadlineRequest({
        offset: offset,
        limit: 5,
      }),
    );
  };

  useEffect(() => {
    requestAPI();
  }, [offset]);

  const fetchMoreData = () => {
    if (!driversModel.isListEnd && !driversModel.moreLoading) {
      setOffset(offset + 5);
    }
  };

  const RenderFooter: React.FC = () => (
    <View style={styles.footerText}>
      {driversModel.moreLoading && <ActivityIndicator />}
      {driversModel.isListEnd && <Text>No more drivers</Text>}
    </View>
  );

  const RenderEmpty: React.FC = () => (
    <View style={styles.emptyText}>
      <Text>No Data at the moment</Text>
      <Button onPress={() => requestAPI()} title="Refresh" />
    </View>
  );

  return (
    <View>
      {driversModel.loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          contentContainerStyle={{flexGrow: 1}}
          data={driversModel.data}
          renderItem={({item}) => <DriverCard driver={item} />}
          keyExtractor={item => item.driverId}
          // ListHeaderComponent={renderHeader}
          ListFooterComponent={RenderFooter}
          ListEmptyComponent={RenderEmpty}
          onEndReachedThreshold={0.5}
          onEndReached={fetchMoreData}
          persistentScrollbar={true}
        />
      )}
    </View>
  );
};

export default DriversScreen;
