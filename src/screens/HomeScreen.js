import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
  Fragment,
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
  SafeAreaView,
  RefreshControl,
} from 'react-native';

import {FirebaseContext} from '../context/FirebaseContext';

import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header';

import FloatingActionBar from '../components/FloatingActionBar';

//...
export default function Home({navigation}) {
  const firebase = useContext(FirebaseContext);
  const [recipesList, setRecipesList] = useState([]);

  const [refreshing, setRefreshing] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      firebase.getRecipes().then(setRecipesList);
      setRefreshing(false);
    } catch (error) {
      console.log('error', error);
    }
  });

  useEffect(() => {
    firebase.getRecipes().then(setRecipesList).catch(console.log('error'));
  }, [firebase]);

  return (
    <Fragment>
      <SafeAreaView style={styles.safeAreaView1} />
      <SafeAreaView style={styles.safeAreaView2}>
        <Header />
        <View style={styles.container}>
          <View style={styles.fab}>
            <FloatingActionBar
              onPressFunction={() => {
                navigation.navigate('CreateRecipe');
                console.log('fab pressed');
              }}
            />
          </View>
          <FlatList
            style={styles.flatList}
            data={recipesList}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            keyExtractor={(item) => item.key}
            renderItem={({item}) => {
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('RecipeDetail', {item})}>
                    <View style={styles.flatListItemView}>
                      <Text style={styles.flatListItems}>
                        {item.recipeName}
                        {'   '}
                      </Text>
                      <View style={styles.flatListItemView}>
                        <Icon
                          name="heart"
                          style={styles.iconAlignSelfFlexEnd}
                          size={30}
                          color="red"
                          backgroundColor="transparent"
                        />
                        <Icon
                          name="trash"
                          style={styles.iconAlignSelfFlexEnd}
                          size={30}
                          color="red"
                          backgroundColor="transparent"
                          onPress={() =>
                            Alert.alert(
                              'Are you sure you want to remove this recipe?',
                              'This cannot be undone',
                              [
                                {
                                  text: 'Cancel',
                                  onPress: () =>
                                    console.log('closed alert box'),
                                  style: 'cancel',
                                },
                                {
                                  text: 'Remove',
                                  onPress: () =>
                                    firebase
                                      .deleteRecipe(item)
                                      .catch(console.log('error')),
                                },
                              ],
                            )
                          }
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
            ListEmptyComponent={
              <Text style={styles.textstyle}>No recipes added to firebase</Text>
            }
          />
        </View>
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeAreaView1: {
    flex: 0,
    backgroundColor: '#8490B8',
  },
  safeAreaView2: {
    flex: 1,
    backgroundColor: 'white',
  },
  iconAlignSelfFlexEnd: {
    alignSelf: 'flex-end',
  },
  fab: {
    top: 400,

    zIndex: 2,
  },
  textstyle: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
  },
  flatList: {
    width: 350,

    padding: 10,
  },
  flatListItems: {
    fontSize: 20,

    borderColor: 'black',
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  flatListItemView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
