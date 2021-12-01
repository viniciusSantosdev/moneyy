import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import { styles } from './styles';
import { auth } from '../../firebase';

export default function SignUp() {
  // state para pegar info do input email e senha
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // variavel para fazer a navegacao
  const navigation = useNavigation();

  //navegacao ate a tela home
  const backHome = () => navigation.navigate("Home");

  // funcao para criar usuario com email e senha
  const handleSignUp = () => {
    auth.createUserWithEmailAndPassword(email, password).then(userCredentials =>{
      const user = userCredentials.user;
      console.log(user.email);
      // toast sera a mensagem exibida ao usuario crie o email sem problemas
      ToastAndroid.show('Your account has been created.', ToastAndroid.LONG);
    }).catch(error => alert(error.mensage));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subTitle}>Create an account</Text>

      {/* view para organizar o botao e o textinput um ao lado do outro */}
      <View style={styles.containerInter}>
        <TouchableOpacity style={styles.btnInivisible} activeOpacity={10}>
          <Text style={styles.btnHintInvisible}>E-mail</Text>
        </TouchableOpacity>

        {/* input do email */}
        <TextInput 
          style={styles.input} 
          placeholder="email@mail.com" 
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>
      {/* fim da view */}

      {/* view para organizar o botao e o textinput um ao lado do outro */}
      <View style={styles.containerInterBottom}>
        <TouchableOpacity style={styles.btnInivisibleBottom} activeOpacity={10}>
          <Text style={styles.btnHintInvisibleBottom}>Password</Text>
        </TouchableOpacity>

        {/* input do password */}
        <TextInput
          style={styles.inputBottom}
          secureTextEntry
          autoCorrect={false}
          placeholder="********"
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>
      {/* fim da view */}

      <TouchableOpacity
        style={styles.btnBack}
        activeOpacity={0.7}
        onPress={handleSignUp}
      >
        <Text style={styles.hintBtnBack}>Create an account</Text>
      </TouchableOpacity>
    </View>
  );
}
