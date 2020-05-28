import * as React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTabs from './bottom'
import StackRoute from './config'
import { SafeAreaProvider } from 'react-native-safe-area-context'
const Stack = createStackNavigator()

/**
 * 展开路由
 */
const routes = []
Object.keys(StackRoute).forEach((key) => {
  Object.keys(StackRoute[key]).forEach((subKey) => {
    routes.push(StackRoute[key][subKey])
  })
})

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="bottoms" component={BottomTabs} options={{ headerShown: false }} />
          {routes.map((items) => (
            <Stack.Screen key={items.name} name={items.name} component={items.component} options={items.options} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
export default App
