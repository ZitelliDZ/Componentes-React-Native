import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/AppTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  title: string;
}

const HeaderTitle = ({title}: Props) => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={{marginTop: top + 20, marginBottom: 10}}>
      <Text style={{...styles.title, color: '#5856D6'}}>{title}</Text>
    </View>
  );
};

export default HeaderTitle;
