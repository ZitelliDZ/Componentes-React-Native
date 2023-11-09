import React, {useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/AppTheme';
import FadeInImage from '../components/FadeInImage';

const InfiniteScroll = () => {
  const [numbers, setNumbers] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
  ]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 10; i++) {
      newArray[i] = numbers.length + i;
    }
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  const renderItem = (item: number) => {
    return (
      <View
        style={{
          backgroundColor: item % 2 === 0 ? 'lightblue' : 'pink',
          height: 400,
        }}>
        <FadeInImage
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 20,
          }}
          uri={`https://picsum.photos/id/${item}/500/400`}
        />
        {/** 
        <Image
          source={{
            uri:
              `https://picsum.photos/id/${item}/500/400`,
          }}
          style={{
            width: '100%',
            height: 400,
          }}
        />*/}
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={numbers}
        keyExtractor={(item, index) => (item + index).toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.globalMargin}>
            <HeaderTitle title="Infinite Scroll" />
          </View>
        }
        renderItem={({item}) => renderItem(item)}
        onEndReached={() => {
          loadMore(), console.log('cargando');
        }}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          <View
            style={{
              height: 150,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={25} color={'#5658D6'} />
          </View>
        }
      />
    </View>
  );
};

export default InfiniteScroll;
