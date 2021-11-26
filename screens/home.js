import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { themes } from '../styles/themes';

export default function Home(){
    const navigation = useNavigation();

    // navegando para tela de cadastro
    const handleSignUp = () => navigation.navigate("SignUp");

    return(
    <View style={styles.container}>
      <Image  
       style={styles.logo}
       source={require('../assets/money.png')}
      />

      <Text style={styles.title}>Get your Money {"\n"}Under Control</Text>
      <Text style={styles.subTitle}>Manage your expenses.</Text>

    <TouchableOpacity style={styles.btn} activeOpacity={0.7} onPress={handleSignUp}>
        <Text style={styles.hintBtn}>SignUp with Email</Text>
    </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 50,
    width: 100,
    height: 100
  },
  title: {
    fontFamily: themes.fonts.title,
    fontSize: 38,
    textAlign: 'center'
  },
  subTitle: {
    marginTop: 20,
    fontSize: 20,
    fontFamily: themes.fonts.text,
    color: themes.colors.subTitle,
  },
  btn: {
    backgroundColor: themes.colors.btnSignIn,
    marginTop: 100,
    height: 55,
    width: 350,
    margin: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  hintBtn: {
    color: themes.colors.hint,
    fontFamily: themes.fonts.text,
    fontSize: 20
  }
});
    


