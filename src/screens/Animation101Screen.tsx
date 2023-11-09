import React, {useRef} from 'react';
import {Animated, PanResponder, StyleSheet, Text, View} from 'react-native';

const Animation101Screen = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,

    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x, // x,y are Animated.Value
          dy: pan.y,
        },
      ],
      {useNativeDriver: false},
    ),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {toValue: {x: pan.x._value, y: pan.y._value}, useNativeDriver: false}, // Back to zero
      ).start();
    },
  });

  return (
    <View style={styles.container}>
      <Text>101</Text>

      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.purpleBox]}
      />
    </View>
  );
};

export default Animation101Screen;

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
