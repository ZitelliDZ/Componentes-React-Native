import React, {useState} from 'react';
import {
  RefreshControl,
  ScrollView,
  View,
} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/AppTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const PulltoRefresh = () => {
  const {top} = useSafeAreaInsets();
  const [refreshing, setRefreshing] = useState(false);

  const onRefreshing = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('Refreshing');
      setRefreshing(false);
    }, 2000);
  };
  return (
    <View style={{height: 1000}}>
      <ScrollView
        style={{marginTop: refreshing ? top : 0}}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefreshing}
            progressViewOffset={150}
            progressBackgroundColor={'#5856D6'}
            colors={['white', 'red', 'green', 'yellow']}
            style={{backgroundColor: '#5856D6'}}
            tintColor={'white'}
            title="Refrescar"
          />
        }>
        <View style={styles.globalMargin}>
          <HeaderTitle title="PulltoRefresh" />
          <HeaderTitle title="PulltoRefresh" />
          <HeaderTitle title="PulltoRefresh" />
          <HeaderTitle title="PulltoRefresh" />
          <HeaderTitle title="PulltoRefresh" />
          <HeaderTitle title="PulltoRefresh" />
          <HeaderTitle title="PulltoRefresh" />
          <HeaderTitle title="PulltoRefresh" />
          <HeaderTitle title="PulltoRefresh" />
          <HeaderTitle title="PulltoRefresh" />
          <HeaderTitle title="PulltoRefresh" />
          <HeaderTitle title="PulltoRefresh" />
          <HeaderTitle title="PulltoRefresh" />
          <HeaderTitle title="PulltoRefresh" />
          <HeaderTitle title="PulltoRefresh" />
          <HeaderTitle title="PulltoRefresh" />
          <HeaderTitle title="PulltoRefresh" />
          <HeaderTitle title="PulltoRefresh" />
          <HeaderTitle title="PulltoRefresh" />
          <HeaderTitle title="PulltoRefresh" />
          <HeaderTitle title="PulltoRefresh" />
          <HeaderTitle title="PulltoRefresh" />
          <HeaderTitle title="PulltoRefresh" />
          <HeaderTitle title="PulltoRefresh" />
          <HeaderTitle title="PulltoRefresh" />
          <HeaderTitle title="PulltoRefresh" />
          <HeaderTitle title="PulltoRefresh" />
          <HeaderTitle title="PulltoRefresh" />
          <HeaderTitle title="PulltoRefresh" />
          <HeaderTitle title="PulltoRefresh" />
          <HeaderTitle title="PulltoRefresh" />
          <HeaderTitle title="PulltoRefresh" />
          <HeaderTitle title="PulltoRefresh" />
          <HeaderTitle title="PulltoRefresh" />
          <HeaderTitle title="PulltoRefresh" />
          <HeaderTitle title="PulltoRefresh" />
        </View>
      </ScrollView>
    </View>
  );
};

export default PulltoRefresh;
