import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {firebase} from '../config';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  registerUser = async (email, password, firstname, lastname) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .auth()
          .currentUser.sendEmailVerification({
            handleCodeInApp: true,
            url: 'https://authentication-96354.firebaseapp.com',
          })
          .then(() => {
            alert('Verification mail sent');
          })
          .catch(error => {
            alert(error.message);
          })
          .then(() => {
            firebase
              .firestore()
              .collection('users')
              .doc(firebase.auth().currentUser.uid)
              .set({
                firstname,
                lastname,
                email,
              });
          })
          .catch(error => {
            alert(error.message);
          });
      })
      .catch(error => {
        alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', fontSize: 23}}>Register Here </Text>
      <View style={{marginTop: 40}}>
        <TextInput
          style={styles.textinput}
          placeholder="Firstname"
          onChangeText={firstname => setFirstname(firstname)}
          autoCorrect={false}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Lastname"
          onChangeText={lastname => setLastname(lastname)}
          autoCorrect={false}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Email"
          onChangeText={email => setEmail(email)}
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.textinput}
          placeholder="Password"
          onChangeText={password => setPassword(password)}
          autoCorrect={false}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        onPress={() => registerUser(email, password, firstname, lastname)}
        style={styles.button}>
        <Text style={{fontWeight: 'bold', fontSize: 22}}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
  },
  textinput: {
    paddingTop: 20,
    paddingBottom: 10,
    width: 400,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    marginTop: 50,
    height: 70,
    width: 250,
    backgroundColor: '#026efd',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});

export default Registration;
