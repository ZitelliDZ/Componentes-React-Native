import React from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {styles} from '../theme/AppTheme';
import FlatListMenuItem from '../components/FlatListMenuItem';
import {menuItems} from '../data/menuItems';
import HeaderTitle from '../components/HeaderTitle';
import {ItemSeparator} from '../components/ItemSeparator';

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        ...styles.globalMargin,
      }}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => <HeaderTitle title="Menú" />}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
};

export default HomeScreen;
