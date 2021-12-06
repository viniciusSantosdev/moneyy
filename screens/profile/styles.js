import { themes } from "../../styles/themes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        fontFamily: themes.fonts.title,
    },
    img: {
        height: 100,
        width: 100
    }
});