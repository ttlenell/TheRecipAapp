import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  TouchableHighlight,
} from 'react-native';

const CookingInstructionsInput = ({setCookingText, setTimerNumber}) => {
  const [cookingTextInput, setCookingTextInput] = useState('');
  const [timer, setTimer] = useState(0);

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModalVisibility = () => {
    setModalVisible(!modalVisible);
  };
  const addCookingInfo = () => {
    setCookingText(cookingTextInput);
    setTimerNumber(timer);
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={{
                ...styles.modalText,
                right: 10,
                width: 200,
              }}
              placeholder="start here with instructions"
              value={cookingTextInput}
              onChangeText={(text) => setCookingTextInput(text)}
              multiline={true}
            />
            <Text>Set minutes for timer </Text>
            <TextInput
              style={{
                ...styles.modalText,
                right: 10,
                width: 80,
                borderBottomWidth: 0.3,
                borderBottomColor: 'black',
              }}
              placeholder="minutes.."
              numeric
              value={timer}
              onChangeText={(number) => setTimer(parseInt(number))}
              keyboardType={'number-pad'}
            />
            <View style={styles.modalRow}>
              <TouchableHighlight
                style={{
                  ...styles.modalButton,
                  backgroundColor: '#2196F3',
                  top: 15,
                  right: 20,
                  borderColor: 'black',
                  borderWidth: 0.7,
                }}
                onPress={() => {
                  toggleModalVisibility();
                  addCookingInfo();
                }}>
                <Text style={styles.textStyle}>Submit</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={{
                  ...styles.modalButton,
                  backgroundColor: '#2196F3',
                  top: 15,
                  left: 20,
                  borderColor: 'black',
                  borderWidth: 0.7,
                }}
                onPress={() => {
                  toggleModalVisibility();
                }}>
                <Text style={styles.textStyle}>Close</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableHighlight
        style={styles.addCookingInfoButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={{...styles.textStyle, fontSize: 15}}>
          Add instructions
        </Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addCookingInfoButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 8,
    bottom: 5,
    left: 110,
    width: 170,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },
  modalButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    top: 110,
    elevation: 2,
    height: 55,
    width: 100,
    borderWidth: 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  modalText: {
    marginBottom: 15,
    fontSize: 20,
    textAlign: 'center',
  },
  centeredView: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  modalView: {
    top: 250,
    height: 400,
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
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalRow: {
    flexDirection: 'row',
    top: 150,
  },
});

export default CookingInstructionsInput;
