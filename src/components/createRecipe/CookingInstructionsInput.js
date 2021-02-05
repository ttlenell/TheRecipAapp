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
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.textInput}
              placeholder="start here with instructions"
              value={cookingTextInput}
              onChangeText={(text) => setCookingTextInput(text)}
              multiline={true}
            />
            <Text>Set minutes for timer </Text>
            <TextInput
              style={styles.minuteInput}
              placeholder="minutes.."
              numeric
              value={timer}
              onChangeText={(number) => setTimer(parseInt(number))}
              keyboardType={'number-pad'}
            />
            <View style={styles.modalRow}>
              <TouchableHighlight
                style={styles.submitButton}
                onPress={() => {
                  toggleModalVisibility();
                  addCookingInfo();
                }}>
                <Text style={styles.textStyle}>Submit</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.closeButton}
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
        <Text style={styles.addInstructionsText}>Add instructions</Text>
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
    borderWidth: 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  addInstructionsText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  modalButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    top: 110,
    elevation: 2,
    height: 55,
    width: 100,
    borderWidth: 0.7,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  submitButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,

    elevation: 2,
    height: 55,
    width: 100,
    borderWidth: 0.7,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    top: 15,
    right: 20,
    borderColor: 'black',
  },
  closeButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,

    elevation: 2,
    height: 55,
    width: 100,
    borderWidth: 0.7,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    top: 15,
    left: 20,
    borderColor: 'black',
  },

  modalText: {
    marginBottom: 15,
    fontSize: 20,
    textAlign: 'center',
  },
  textInput: {
    marginBottom: 15,
    fontSize: 20,
    textAlign: 'center',
    right: 10,
    width: 200,
  },
  minuteInput: {
    right: 10,
    width: 80,
    borderBottomWidth: 0.3,
    borderBottomColor: 'black',
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
