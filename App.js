
import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import TabBawah from "./pages/BottomTab";
import Details from "./pages/Details";
import News from "./pages/News";
import DetailNews from "./pages/DetailNews";
import ProfileScreen from './pages/ProfileScreen';
import DetailBahan from './pages/DetailBahan';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen name="INFORMASI SKINCARE" component={TabBawah}/>
        <Stack.Screen name="HOT NEWS" component={News}/>
        <Stack.Screen name="BRAND" component={Details}/>
        <Stack.Screen name="INGREDIENTS" component={DetailBahan}/>
        <Stack.Screen name="About App" component={ProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};