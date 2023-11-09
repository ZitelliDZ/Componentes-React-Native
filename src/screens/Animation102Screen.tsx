import React from 'react';
import {Animated, Button, StyleSheet, Text, View} from 'react-native';

import useAnimation from '../hooks/useAnimation';

const Animation102Screen = () => {
  const {fadeIn, fadeOut, opacity, position, startMovingPosition} =
    useAnimation();

  return (
    <View style={styles.container}>
      <Text>102</Text>

      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity: opacity,
          transform: [{translateY: position}],
        }}
      />

      <Button
        title="FadeIn"
        onPress={() => {
          fadeIn(), startMovingPosition(-100, 800);
        }}
      />
      <Button title="FadeOut" onPress={fadeOut} />
    </View>
  );
};

export default Animation102Screen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  },
});
