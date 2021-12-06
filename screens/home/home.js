import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import * as AuthSession from "expo-auth-session";

export default function Home() {
  const navigation = useNavigation();

  // navegando para tela de cadastro
  const handleSignUp = () => navigation.navigate("SignUp");

  // funcao para criar conta com o google
  async function handleSignUpGoogle() {
    const CLIENT_ID =
      "486836389146-a5psbo1pobuafnnrr88i0sssv44n0nh5.apps.googleusercontent.com";
    const REDIRECT_URI = "https://auth.expo.io/@vsantosdev/moneyy";
    const RESPONSE_TYPE = "token";
    const SCOPE = encodeURI("profile email");

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
    const { type, params } = await AuthSession.startAsync({ authUrl });

    if(type === 'success'){
      navigation.navigate("Profile", { token: params.access_token });
    }
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/money.png")} />

      <Text style={styles.title}>Get your Money {"\n"}Under Control</Text>
      <Text style={styles.subTitle}>Manage your expenses.</Text>

      {/* botao entrar com email */}
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.7}
        onPress={handleSignUp}
      >
        <Text style={styles.hintBtn}>SignUp with Email</Text>
      </TouchableOpacity>

      {/* boitao entrar com conta google */}
      <TouchableOpacity
        style={styles.btnGoogle}
        activeOpacity={0.7}
        onPress={handleSignUpGoogle}
      >
        <Text style={styles.btnGoogleHint}>SignUp with Google</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}
