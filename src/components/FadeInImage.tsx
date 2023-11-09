import React, {useState} from 'react';
import {
  Animated,
  View,
  ActivityIndicator,
  StyleProp,
  ImageStyle,
} from 'react-native';
import useAnimation from '../hooks/useAnimation';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

const FadeInImage = ({uri, style = {borderRadius: 20}}: Props) => {
  const {fadeIn, opacity} = useAnimation();
  const [isLoaded, setIsLoaded] = useState(true);

  const finishLoading = () => {
    setIsLoaded(true);
    fadeIn();
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}>
      {isLoaded && (
        <ActivityIndicator
          size={30}
          style={{position: 'absolute'}}
          color={'#5658D6'}
        />
      )}

      <Animated.Image
        onLoadEnd={() => {
          fadeIn();
        }}
        source={{uri}}
        //style={{
        //  height: 400,
        //  width: '100%',
        //  opacity,
        //}}
        style={{
          ...(style as any),
          opacity,
        }}
      />
    </View>
  );
};

export default FadeInImage;
