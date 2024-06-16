import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

const appleIcon = require('./assets/apple.png')
const googleIcon = require('./assets/google.png')
const facebookIcon = require('./assets/facebook.png')

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home', { name, email });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title1}>Jobizz</Text>
      <Text style={styles.title2}>Welcome Back 👋</Text>
      <Text style={styles.subtitle}>Let's log in. Apply to jobs!</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>

      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 68}}>
          <View style={{flex: 1, height: 1, backgroundColor: '#AFB0B6'}} />
          <View>
            <Text style={{color:'#AFB0B6'}}>  Or continue with  </Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: '#AFB0B6'}} />
        </View>

        <View style={{flexDirection:'row', marginTop:37, paddingHorizontal: 10}}>
            <View style={{marginRight:20}}>
                <Image source={appleIcon}/>
            </View>
            <View style={{marginRight:20}}>
                <Image source={googleIcon}/>
            </View>
            <View style={{marginRight:20}}>
                <Image source={facebookIcon}/>
            </View>
            
        </View>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 100,
    backgroundColor:'#f0f0f0',
  },
  title1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#356899',
  },
  title2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0D0D26',
    paddingTop: 18,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
    color: '#888888',
    paddingTop: 15,
  },
  input: {
    width: '100%',
    padding: 12,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#356899',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default LoginScreen;
