import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import {styles} from './styles';

export default function Home(){
    const navigation = useNavigation();

    // navegando para tela de cadastro
    const handleSignUp = () => navigation.navigate("SignUp");

    return(
    <View style={styles.container}>
      <Image  
       style={styles.logo}
       source={require('../../assets/money.png')}
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



