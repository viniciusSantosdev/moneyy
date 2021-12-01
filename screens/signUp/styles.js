import { themes } from "../../styles/themes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
      fontSize: 15,
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
      fontSize: 15,
      color: themes.colors.subTitle,
      marginRight: 33,
    },
    inputBottom: {
      height: 55,
      width: 210,
      backgroundColor: themes.colors.input,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      fontSize: 15,
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
      fontSize: 15,
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
  