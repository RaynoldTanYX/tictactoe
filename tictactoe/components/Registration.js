import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Registration = (props) => {

    const [username, setUsername] = React.useState("John Doe");

    const OnPressConfirm = () => {
        console.log("User has confirmed the username: " + username);
        props.onUsernameSet(username);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>What is your name?</Text>
            <TextInput style={styles.textinput} onChangeText={setUsername}>{username}</TextInput>
            <Button title='Confirm' onPress={OnPressConfirm}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 3,
        paddingTop: '50%',
        //justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#000000',
        fontSize: 23,
        textAlign: 'center'
    },
    textinput: {
        marginTop: 10,
        backgroundColor: '#EEEEEE',
        width: '80%',
        color: '#000000',
        fontSize: 23,
        textAlign: 'center',
        marginBottom: 15,
    },
});

export default Registration;