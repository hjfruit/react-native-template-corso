import React from 'react'
import { View, Text, Button } from 'react-native'
import PathMapping from '@/router/config'

const News = ({ navigation }) => (
  <View>
    <Text>News</Text>
    <Button title="Go to Details" onPress={() => navigation.navigate(PathMapping.NewsInfo.name)} />
  </View>
)

export default News
