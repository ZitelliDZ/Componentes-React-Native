import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/AppTheme';
import {ScrollView} from 'react-native-gesture-handler';
import CustomSwitch from '../components/CustomSwitch';
import {useForm} from '../hooks/useForm';

const InputsScreen = () => {
  const {onChange, form, isSubscribe} = useForm({
    name: '',
    email: '',
    password: '',
    phone: '',
    isSubscribe: true,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTitle title="InputsScreen" />

            <TextInput
              style={styl.input}
              autoCorrect={false}
              autoCapitalize="words"
              placeholder="Ingrese su nombre."
              onChangeText={value => onChange(value, 'name')}
            />
            <TextInput
              style={styl.input}
              autoCapitalize="none"
              placeholder="Ingrese su email."
              onChangeText={value => onChange(value, 'email')}
              keyboardType="email-address"
            />
            <TextInput
              style={styl.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Ingrese su password."
              onChangeText={value => onChange(value, 'password')}
              keyboardType="ascii-capable"
            />
            <CustomSwitch
              onChange={value => onChange(value, 'isSubscribe')}
              isOn={isSubscribe}
            />
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <TextInput
              style={styl.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Ingrese su phone."
              onChangeText={value => onChange(value, 'phone')}
              keyboardType="phone-pad"
            />
            <View style={{height: 20}} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default InputsScreen;

const styl = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    borderColor: 'rgba(0, 0, 0,0.3)',
  },
});
