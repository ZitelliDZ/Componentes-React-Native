import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  menuItem: MenuItem;
}

const FlatListMenuItem = ({menuItem}: Props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={() => navigation.navigate(menuItem.component)}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} color={'#5658D6'} size={25} />
        <Text style={styles.itemText}>{menuItem.name}</Text>
        <View style={{flex: 1}}></View>
        <Icon name={'chevron-forward-outline'} color={'#5658D6'} size={25} />
      </View>
    </TouchableOpacity>
  );
};

export default FlatListMenuItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    marginLeft: 5,
    fontSize: 19,
  },
});
