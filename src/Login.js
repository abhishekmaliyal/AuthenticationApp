import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../config';

import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;
if (user !== null) {
  const emailVerified = user.emailVerified;
}

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (emailVerified == true) {
    LoginUser = async (email, password) => {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (error) {
        alert(error.message);
      }
    };
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 26 }}>Login</Text>
      <View style={{ marginTop: 40 }}>
        <TextInput
          style={styles.textinput}
          placeholder="Email"
          onChangeText={email => setEmail(email)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Password"
          onChangeText={password => setPassword(password)}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        onPress={() => LoginUser(email, password)}
        style={styles.button}>
        <Text style={{ fontWeight: 'bold', fontSize: 22 }}> Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Registration')}
        style={{ marginTop: 20 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
          Don't have an account? Register
        </Text>
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
    marginTop: 30,
    height: 50,
    width: 200,
    backgroundColor: '#FEA1BF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});

export default Login;
