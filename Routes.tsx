import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RegistroDePonto from './pages/RegistroDePonto';
import Configuracao from "./pages/Configuracao";

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="RegistroDePonto" component={RegistroDePonto} />
        <Stack.Screen name="Configuracao" component={Configuracao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;