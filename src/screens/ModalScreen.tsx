import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  Modal,
  Alert,
  Pressable,
  StyleSheet,
} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/AppTheme';

const ModalScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title={'Modal Screen'} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        {/**
        <View style={styless.centeredView}>
          <View style={styless.modalView}>
            <Text style={styless.modalText}>Hello World!</Text>
            <Pressable
              style={[styless.button, styless.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styless.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>

         */}
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.3)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              width: 300,
              height: 300,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 10,
            }}>
            <HeaderTitle title={'Modal'} />
            <Text>body Modal</Text>
            <Pressable
              style={[styless.button, styless.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styless.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Button
        title="Abrir Modal"
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      />
    </View>
  );
};

export default ModalScreen;

const styless = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
