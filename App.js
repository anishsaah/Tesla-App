// In App.js in a new project
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Base from './Base';
import { NativeBaseProvider } from 'native-base';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NativeBaseProvider>
    <NavigationContainer >
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={Base} />
      </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;