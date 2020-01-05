import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import * as firebase from "firebase";

export default class Home extends React.Component {
    state = {
        email: "",
        displayName: ""
    };

    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;

        this.setState({ email, displayName });
    }

    signOutUser = () => {
        firebase.auth().signOut();
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{alignItems:'center'}}>
                    <Text style={{fontFamily:'monospace'}}>Hi {this.state.email}!</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={this.signOutUser}>
                        <Text style={{ color: "#FFF", fontWeight: "500" }}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    
}

const styles = StyleSheet.create({
    container: {
        flex:1, 
        justifyContent:'center'
    },
    button: {
        marginHorizontal: 120,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 30,
        justifyContent: "center",
        alignItems: "center"
    }
});
