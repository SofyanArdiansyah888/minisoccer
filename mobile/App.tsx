import React from "react";
import Beranda from "./screen/beranda/Beranda";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Home" component={Beranda} />
        <Tab.Screen name="Aktifitas" component={Beranda} />
        <Tab.Screen name="Test" component={Beranda} />
        <Tab.Screen name="Profil" component={Beranda} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
