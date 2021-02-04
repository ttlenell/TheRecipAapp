import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Alert,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import CountDown from 'react-native-countdown-component';
import {useKeepAwake} from '@sayem314/react-native-keep-awake';

const RecipeDetailScreen = ({route}) => {
  const [isRunning, setIsRunning] = useState(false);
  var timerTextBox = isRunning ? 'Pause' : 'Start';

  const AwakeAlert = () => {
    Alert.alert(
      'Keep screen active',
      "Would you like the screen to stay active while you're looking at this recipe?",
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes!',
          onPress: () => {
            useKeepAwake, console.log('keep awake activated!');
          },
        },
      ],
      {cancelable: false},
    );
  };

  useEffect(() => {
    AwakeAlert();
  }, []);

  let item = route.params.item;

  return (
    <View style={styles.container}>
      <View style={{bottom: 300}}>
        <Text style={styles.recipeName}>{item.recipeName}</Text>
      </View>
      <View style={styles.flatList}>
        <View>
          <Text style={styles.flatListHeader}>Category {'   '}Name </Text>
        </View>
        <FlatList
          data={item.ingredients}
          keyExtractor={(item) => item.key}
          renderItem={({item}) => {
            return (
              <View>
                <View>
                  <Text style={styles.cookingText}>
                    {item.category}
                    {'           '}
                    <Text style={{alignItems: 'flex-end'}}>{item.name}</Text>
                  </Text>
                  <View style={{alignItems: 'flex-end'}}>
                    <Text>
                      {item.amount} {item.measure}
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
      <View style={styles.cookingView}>
        <Text style={styles.cookingText}>{item.cookingText}</Text>
      </View>

      <View style={styles.timerView}>
        <Text style={{fontSize: 20}}>
          The timer is set to:{' '}
          <Text style={{fontWeight: 'bold'}}>{item.timer}</Text> minutes
        </Text>
        <TouchableOpacity
          style={styles.timerButton}
          onPress={() => setIsRunning((prev) => !prev)}>
          <Text style={{fontSize: 25}}>{timerTextBox}</Text>
        </TouchableOpacity>
        <CountDown
          style={{top: 1}}
          onFinish={() => alert('Timer ended!')}
          timeToShow={['M', 'S']}
          size={30}
          until={parseInt(item.timer * 60)}
          running={isRunning}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  recipeName: {
    color: 'black',
    top: 200,
    fontSize: 25,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  flatList: {
    width: 350,
    bottom: 100,
    height: 350,
    borderColor: 'black',
    borderWidth: 2,
    padding: 10,
  },
  flatlistItems: {
    fontSize: 16,
  },
  flatListHeader: {
    fontSize: 20,
    fontStyle: 'italic',
  },
  cookingView: {
    marginBottom: 20,
    bottom: 100,
  },
  cookingText: {
    fontSize: 20,
  },
  timerButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 8,
    alignItems: 'center',
    width: 170,
  },
  timerView: {
    top: 100,
    alignItems: 'center',
  },
});

export default RecipeDetailScreen;
