import React from 'react'
import Home from '@/pages/home'
import Activity from '@/pages/activity'
import News from '@/pages/news'
import Mine from '@/pages/mine'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tabs = createBottomTabNavigator()

export default () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={Home} />
    <Tabs.Screen name="Activity" component={Activity} />
    <Tabs.Screen name="News" component={News} />
    <Tabs.Screen name="Mine" component={Mine} />
  </Tabs.Navigator>
)
