import React from 'react';
import Home from './screens/home';
import SignUp from './screens/signUp';
import { useFonts } from 'expo-font';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
 const [fontsLoaded] = useFonts({
   Roboto_400Regular,
   Roboto_700Bold
 }); //carregamento das fonts da google

 if(!fontsLoaded){
  return <AppLoading/> //enquanto fonts nao carregar, segura na splash
 }

  return (
    <NavigationContainer> 
                       {/* nessa parte ele tira o menu */}
      <Stack.Navigator  screenOptions={{ headerShown: false }}> 
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
