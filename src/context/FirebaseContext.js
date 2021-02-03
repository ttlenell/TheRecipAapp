import React, {createContext} from 'react';

import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import config from '../config/firebase';
import {v1 as uuidv1} from 'uuid';

const FirebaseContext = createContext();

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.firestore();

const Firebase = {
  getCurrentUser: () => {
    return firebase.auth().currentUser;
  },

  createUser: async (user) => {
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password);
      const uid = Firebase.getCurrentUser().uid;

      let profilePhotoUrl = 'default';

      await db.collection('users').doc(uid).set({
        username: user.username,
        email: user.email,
        profilePhotoUrl,
      });

      // if (user.profilePhoto) {
      //   profilePhotoUrl = await Firebase.uploadProfilePhoto(user.profilePhoto);
      // }

      delete user.password;

      return {...user, profilePhotoUrl, uid};
    } catch (error) {
      console.log('Error @createUser: ', error.message);
    }
  },

  addRecipe: async (recipe) => {
    const uid = Firebase.getCurrentUser().uid;
    await db
      .collection('users')
      .doc(uid)
      .collection('recipes')
      .add(recipe)
      .then((snapshot) => {
        id = snapshot.id;
      });
  },

  getRecipes: async () => {
    const uid = Firebase.getCurrentUser().uid;
    let querySnapshot = await db
      .collection('users')
      .doc(uid)
      .collection('recipes')
      .get();

    let recipes = [];

    querySnapshot.forEach((doc) => {
      // console.log('from firebaseContext:', doc.id, ' => ', doc.data());
      recipes.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    return recipes;
  },

  getUserInfo: async (uid) => {
    try {
      const user = await db.collection('users').doc(uid).get();

      if (user.exists) {
        return user.data();
      }
    } catch (error) {
      console.log('Error @getUserInfo: ', error);
    }
  },

  logOut: async () => {
    try {
      await firebase.auth().signOut();

      return true;
    } catch (error) {
      console.log('Error @logOut: ', error);
    }

    return false;
  },

  signIn: async (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },
};

const FirebaseProvider = (props) => {
  return (
    <FirebaseContext.Provider value={Firebase}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export {FirebaseContext, FirebaseProvider};
