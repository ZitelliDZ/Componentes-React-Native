import React, {useState} from 'react';
import {Platform, Switch} from 'react-native';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

const CustomSwitch = ({isOn, onChange}: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(isEnabled);
  };

  return (
    <Switch
      trackColor={{false: '#767577', true: '#81b0ff'}}
      thumbColor={Platform.OS === 'android' ? '#5856D6' : ''}
      //thumbColor={isEnabled2 ? '#f5dd4b' : '#f4f3f4'}
      //ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default CustomSwitch;
