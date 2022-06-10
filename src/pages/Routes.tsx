import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RegistroDePonto from './RegistroDePonto/RegistroDePonto';
import Configuracao from "./Configuracao/Configuracao";
import Relatorio from "./Relatorio/Relatorio";

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="RegistroDePonto" component={RegistroDePonto} />
        <Stack.Screen name="Configuracao" component={Configuracao} />
        <Stack.Screen name="Relatorio" component={Relatorio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;