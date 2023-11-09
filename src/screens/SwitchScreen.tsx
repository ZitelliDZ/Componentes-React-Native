import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import CustomSwitch from '../components/CustomSwitch';

const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  {
    /**
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState2 => !previousState2);
  const toggleSwitch3 = () => setIsEnabled3(previousState3 => !previousState3);
 */
  }
  const onChange = (value: boolean, field: string) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return (
    <View style={{marginHorizontal: 20}}>
      <HeaderTitle title="Switchs" />
      <View>
        <View style={styles.switchRow}>
          <Text style={styles.switchText}>IsActive</Text>
          <CustomSwitch
            onChange={value => onChange(value, 'isActive')}
            isOn={state.isActive}
          />
        </View>
        <View style={styles.switchRow}>
          <Text style={styles.switchText}>isHungry</Text>
          <CustomSwitch
            onChange={value => onChange(value, 'isHungry')}
            isOn={state.isHungry}
          />
        </View>
        <View style={styles.switchRow}>
          <Text style={styles.switchText}>isHappy</Text>
          <CustomSwitch
            onChange={value => onChange(value, 'isHappy')}
            isOn={state.isHappy}
          />
        </View>

        <Text style={styles.switchText}>{JSON.stringify(state, null, 5)}</Text>

        {/** <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={(Platform.OS ==='android') ? '#5856D6' : ''}
          //thumbColor={isEnabled2 ? '#f5dd4b' : '#f4f3f4'}
          //ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch2}
          value={isEnabled2}
        />
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled3 ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch3}
          value={isEnabled3}
        /> */}
      </View>
    </View>
  );
};

export default SwitchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchText: {
    fontSize: 25,
    marginTop: 20,
    color: 'black',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
