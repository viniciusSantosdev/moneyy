import { useRoute } from "@react-navigation/native";
// useEffect eh usado para buscar info, useState para armazenar em um estado e compartilhar com interface
import React, { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import { styles } from "./styles";

export default function profile() {
  const route = useRoute();

  const [profile, setProfile] = useState({});

  //   token usado para trazer as info do usuario
  const { token } = route.params;
  console.log(token);

  //   funcao para buscar os dados do usuario atraves do token
  async function loadProfile() {
    // fetch = buscar, serve basicamente para fazer request e response
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`
    );
    // coleta as infos e converte em json e salva em profile
    const userInfo = await response.json();
    setProfile(userInfo);
  }

  // busca as infos 
  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, {profile.name}</Text>
      <Image
        source={{ uri: profile.picture }}
        style={styles.img}
      ></Image>
    </View>
  );
}
