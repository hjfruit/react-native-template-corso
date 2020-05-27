import * as React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTabs from './bottom'
import StackRoute from './config'
import { SafeAreaProvider } from 'react-native-safe-area-context'
const Stack = createStackNavigator()

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="bottoms" component={BottomTabs} options={{ headerShown: false }} />
          {Object.keys(StackRoute).map((key) => (
            <Stack.Screen
              key={StackRoute[key].name}
              name={StackRoute[key].name}
              component={StackRoute[key].component}
              options={StackRoute[key].options}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
export default App
