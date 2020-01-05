import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { creatStackNavigator, createStackNavigator } from "react-navigation-stack";
import Loading from "./screens/Loading";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home";

import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCu-N0033UqndSo83wpnMkqViVkqnzOmNo",
    authDomain: "react-native-try.firebaseapp.com",
    databaseURL: "https://react-native-try.firebaseio.com",
    projectId: "react-native-try",
    storageBucket: "react-native-try.appspot.com",
    messagingSenderId: "130143712620",
    appId: "1:130143712620:web:002c6c024dca9ef8a22f49",
    measurementId: "G-EDH0LLVKJS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
    Home: Home
});

const AuthStack = createStackNavigator({
    Login: Login,
    Register: Register
});

export default createAppContainer(
    createSwitchNavigator(
        {
            Loading: Loading,
            App: AppStack,
            Auth: AuthStack
        },
        {
            initialRouteName: "Loading"
        }
    )
);
