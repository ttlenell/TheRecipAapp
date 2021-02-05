import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Modal,
  Alert,
  TouchableHighlight,
} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

export const IngredientInput = ({setIngredient}) => {
  const [textInput, setTextInput] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);
  const [measure, setMeasure] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModalVisibility = () => {
    setModalVisible(!modalVisible);
  };

  const addIngredient = () => {
    setIngredient((prev) => {
      console.log('PREV:', prev);
      return [
        ...prev,
        {
          id: '"random" id for now',
          name: textInput,
          category: category,
          amount: amount,
          measure: measure,
        },
      ];
    });
  };

  const checkTextInput = () => {
    if (!textInput.trim()) {
      toggleModalVisibility();
      return;
    }
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
              style={styles.modalText}
              placeholder="Name of ingredient"
              value={textInput}
              onChangeText={(text) => setTextInput(text)}
            />
            <View style={styles.amountView}>
              <TextInput
                style={styles.amountModalText}
                placeholder="amount"
                value={amount}
                onChangeText={(text) => setAmount(text)}
                keyboardType={'numeric'}
              />
              <DropDownPicker
                items={[
                  {label: 'liter', value: 'liter'},
                  {label: 'deciliter', value: 'deciliter'},
                  {label: 'centilter', value: 'centiliter'},
                  {label: 'mililter', value: 'mililiter'},
                  {label: 'kilogram', value: 'kilogram'},
                  {label: 'gram', value: 'gram'},
                  {label: 'pcs', value: 'pcs'},
                ]}
                defaultIndex={0}
                defaultNull
                placeholder="Measure"
                containerStyle={styles.measureContainer}
                dropDownStyle={styles.width200}
                dropDownMaxHeight={270}
                activeLabelStyle={styles.green}
                placeholderStyle={styles.black}
                selectedLabelStyle={styles.green}
                style={styles.marginBottom20}
                onChangeItem={(item) => {
                  setMeasure(item.value);
                }}
              />
            </View>
            <View style={styles.zIndex1}>
              <DropDownPicker
                items={[
                  {label: 'Meat🍗', value: 'Meat'},
                  {label: 'Chicken🐤', value: 'Chicken'},
                  {label: 'Pork🐷', value: 'Meat'},
                  {label: 'Pasta🍝', value: 'Pasta'},
                  {label: 'Rice🍚', value: 'Rice'},
                  {label: 'Potato🥔', value: 'Potato'},
                  {label: 'Fish🐟', value: 'Fish'},
                  {label: 'Fruit🍎', value: 'Fruit'},
                  {label: 'Green🥗', value: 'Green'},
                  {label: 'Other❓', value: 'Other'},
                ]}
                defaultIndex={0}
                defaultNull
                placeholder="Choose a category"
                containerStyle={styles.categoryContainer}
                dropDownStyle={styles.categoryDropDown}
                dropDownMaxHeight={340}
                style={styles.categoryStyle}
                activeLabelStyle={styles.green}
                placeholderStyle={styles.black}
                selectedLabelStyle={styles.green}
                onChangeItem={(item) => {
                  setCategory(item.value);
                }}
              />
            </View>

            <View style={styles.modalRow}>
              <TouchableHighlight
                style={styles.submitButton}
                onPress={() => {
                  toggleModalVisibility();
                  addIngredient();
                  checkTextInput();
                  setTextInput('');
                  setCategory('');
                  setAmount(0);
                  setMeasure('');
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
        style={styles.addIngredientButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.addIngredientText}>Add ingredient</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
  openButton: {
    backgroundColor: '#2196F3',
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
  submitButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    top: 110,
    right: 25,
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
  closeButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    top: 110,
    left: 45,
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
  addIngredientButton: {
    backgroundColor: '#2196F3',
    alignItems: 'center',
    width: 170,
    elevation: 2,
    bottom: 0,
    left: 110,
    borderRadius: 20,
    padding: 8,
    borderWidth: 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  addIngredientText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },
  modalText: {
    marginBottom: 15,
    fontSize: 20,
    textAlign: 'center',
  },
  amountModalText: {
    right: 10,
    width: 80,
    marginBottom: 15,
    fontSize: 20,
    textAlign: 'center',
    borderBottomWidth: 0.3,
    borderBottomColor: 'black',
  },
  amountView: {
    flexDirection: 'row',
    zIndex: 2,
  },
  green: {
    color: 'green',
  },
  black: {
    color: 'black',
  },
  zIndex1: {
    zIndex: 1,
  },
  width200: {
    width: 200,
  },
  measureContainer: {
    width: 200,
    height: 70,
  },
  marginBottom20: {
    marginBottom: 20,
  },
  categoryContainer: {
    width: 150,
    height: 70,
  },
  categoryDropDown: {
    width: 200,
    left: -25,
  },

  categoryStyle: {
    width: 200,
    right: 25,
    marginBottom: 20,
  },

  ingredientClose: {
    backgroundColor: '#2196F3',
    left: 45,
    borderColor: 'black',
    borderWidth: 0.7,
  },
  right25: {
    right: 25,
  },
});
