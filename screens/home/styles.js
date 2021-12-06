import { themes } from "../../styles/themes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginBottom: 50,
    width: 100,
    height: 100,
  },
  title: {
    fontFamily: themes.fonts.title,
    fontSize: 38,
    textAlign: "center",
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
    alignItems: "center",
    justifyContent: "center",
  },
  hintBtn: {
    color: themes.colors.hint,
    fontFamily: themes.fonts.text,
    fontSize: 20,
  },
  btnGoogle: {
    backgroundColor: themes.colors.btnSignIn,
    height: 55,
    width: 350,
    margin: 12,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  btnGoogleHint: {
    color: themes.colors.hint,
    fontFamily: themes.fonts.text,
    fontSize: 20,
  }
});
