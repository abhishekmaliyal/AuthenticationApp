import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {firebase} from '../config';

const Dashboard = () => {
  const [name, setName] = useState('');
  useEffect(() => {
    firebase
      .firestore()
      .collection('users')
      .doc(firebase.auth().uid)
      .get()
      .then(snapshot => {
        if (snapshot.exists) {
          setName(snapshot.data());
        } else {
          console.log('User does not exist');
        }
      });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>
        Hello,{name.firstname}
      </Text>
      <TouchableOpacity onPress={() => firebase.auth().signOut()}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
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

export default Dashboard;
