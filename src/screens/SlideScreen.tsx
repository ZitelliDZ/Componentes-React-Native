import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  View,
  Text,
} from 'react-native';
import {styles} from '../theme/AppTheme';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import useAnimation from '../hooks/useAnimation';
import {Animated} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

const {width} = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

interface Props extends StackScreenProps<any, any> {}

const SlideScreen = ({navigation}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const {opacity, fadeIn, fadeOut} = useAnimation();

  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderRadius: 10,
          padding: 40,
          justifyContent: 'center',
        }}>
        <Image
          source={item.img}
          style={{width: 350, height: 400, resizeMode: 'center'}}
        />
        <Text style={{...styles.title, color: '#5658D6'}}>{item.title}</Text>
        <Text>{item.desc}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, paddingTop: 50}}>
      <Carousel
        // ref={(c) => { this._carousel = c; }}
        data={items}
        renderItem={({item}) => renderItem(item)}
        sliderWidth={width}
        itemWidth={width}
        layout="default"
        onSnapToItem={index => {
          setActiveIndex(index);
          if (index == 2) {
            fadeIn();
          } else {
            fadeOut();
          }
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          alignItems: 'center',
        }}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            width: 30,
            height: 10,
            borderRadius: 10,
            backgroundColor: '#000',
            marginHorizontal: 5,
            marginVertical: 5,
          }}
        />

        <Animated.View style={{opacity}}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              width: 140,
              height: 50,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => navigation.navigate('Home')}
            activeOpacity={0.6}
            disabled={activeIndex == 3 ? true : false}>
            <Text style={{fontSize: 22, color: '#5658D6'}}>Entrar</Text>
            <Icon name="chevron-forward-outline" size={30} color={'#5658D6'} />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default SlideScreen;
