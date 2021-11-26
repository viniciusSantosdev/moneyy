import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { themes } from "../styles/themes";

export default function SignUp() {
  const navigation = useNavigation();

  //navegacao ate a tela home
  const backHome = () => navigation.navigate("Home");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subTitle}>Create an account</Text>

      {/* view para organizar o botao e o textinput um ao lado do outro */}
      <View style={styles.containerInter}>
        <TouchableOpacity style={styles.btnInivisible} activeOpacity={10}>
          <Text style={styles.btnHintInvisible}>E-mail</Text>
        </TouchableOpacity>

        <TextInput style={styles.input} placeholder="email@mail.com" />
      </View>

      {/* view para organizar o botao e o textinput um ao lado do outro */}
      <View style={styles.containerInterBottom}>
        <TouchableOpacity style={styles.btnInivisibleBottom} activeOpacity={10}>
          <Text style={styles.btnHintInvisibleBottom}>Password</Text>
        </TouchableOpacity>

        <TextInput style={styles.inputBottom} secureTextEntry autoCorrect={false} placeholder="********"/>
      </View>

      <TouchableOpacity
        style={styles.btnBack}
        activeOpacity={0.7}
        onPress={backHome}
      >
        <Text style={styles.hintBtnBack}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: themes.colors.background,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: themes.fonts.title,
    fontSize: 38,
    alignSelf: "flex-start",
    marginLeft: 25,
  },
  subTitle: {
    fontSize: 20,
    fontFamily: themes.fonts.text,
    color: themes.colors.subTitle,
    alignSelf: "flex-start",
    marginLeft: 25,
    marginTop: 10,
  },
  input: {
    height: 55,
    width: 210,
    backgroundColor: themes.colors.input,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    fontSize: 18,
    color: themes.colors.subTitle,
    marginTop: 10,
  },
  containerInter: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  btnInivisible: {
    height: 55,
    width: 140,
    backgroundColor: themes.colors.input,
    borderTopStartRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  btnHintInvisible: {
    fontSize: 18,
    color: themes.colors.subTitle,
    marginRight: 33
  },
  inputBottom: {
    height: 55,
    width: 210,
    backgroundColor: themes.colors.input,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    fontSize: 18,
    color: themes.colors.subTitle,
    marginTop: 20,
  },
  containerInterBottom: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  btnInivisibleBottom: {
    height: 55,
    width: 140,
    backgroundColor: themes.colors.input,
    borderTopStartRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  btnHintInvisibleBottom: {
    fontSize: 18,
    color: themes.colors.subTitle,
  },
  btnBack: {
    backgroundColor: themes.colors.btnSignIn,
    height: 55,
    width: 350,
    margin: 12,
    marginTop: 100,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  hintBtnBack: {
    color: themes.colors.hint,
    fontFamily: themes.fonts.text,
    fontSize: 20,
  },
});
