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
      alert('Ingredient name cannot be empty');
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
            <View style={{flexDirection: 'row', zIndex: 2}}>
              <TextInput
                style={{
                  ...styles.modalText,
                  right: 10,
                  width: 80,
                  borderBottomWidth: 0.3,
                  borderBottomColor: 'black',
                }}
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
                  {label: 'pcs', value: 'pcs'},
                ]}
                defaultIndex={0}
                defaultNull
                placeholder="Measure"
                containerStyle={{width: 200, height: 70}}
                dropDownStyle={{width: 200}}
                dropDownMaxHeight={270}
                activeLabelStyle={{color: 'green'}}
                placeholderStyle={{color: 'black'}}
                selectedLabelStyle={{color: 'green'}}
                style={{marginBottom: 20}}
                onChangeItem={(item) => {
                  setMeasure(item.value);
                }}
              />
            </View>
            <View style={{zIndex: 1}}>
              <DropDownPicker
                items={[
                  {label: 'Meat🍗', value: 'Meat'},
                  {label: 'Chicken🐤', value: 'Chicken'},
                  {label: 'Bacon🥓', value: 'Bacon'},
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
                containerStyle={{width: 150, height: 70}}
                dropDownStyle={{width: 200, left: -25}}
                dropDownMaxHeight={340}
                style={{
                  width: 200,
                  right: 25,
                  marginBottom: 20,
                }}
                activeLabelStyle={{color: 'green'}}
                placeholderStyle={{color: 'black'}}
                selectedLabelStyle={{color: 'green'}}
                onChangeItem={(item) => {
                  setCategory(item.value);
                }}
              />
            </View>

            <View style={styles.modalRow}>
              <TouchableHighlight
                style={{
                  ...styles.openButton,
                  backgroundColor: '#2196F3',

                  right: 25,
                }}
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
                style={{
                  ...styles.openButton,
                  backgroundColor: '#2196F3',

                  left: 45,
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
        style={styles.addIngredientButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={{...styles.textStyle, fontSize: 15}}>Add ingredient</Text>
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
  addIngredientButton: {
    backgroundColor: '#2196F3',
    alignItems: 'center',
    width: 170,
    elevation: 2,
    bottom: 0,
    left: 110,
    borderRadius: 20,
    padding: 8,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  modalText: {
    marginBottom: 15,
    fontSize: 20,
    textAlign: 'center',
  },
});
