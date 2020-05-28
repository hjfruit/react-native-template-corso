import React from 'react'
import { View, Text, Button } from 'react-native'
import PathMapping from '@/router/config'
import { SafeAreaView } from 'react-native-safe-area-context'
import { INavigation } from '@/typings'

const News: React.FC<INavigation> = ({ navigation }) => (
  <SafeAreaView>
    <View>
      <Text>News</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate(PathMapping.News.NewsInfo.name)} />
    </View>
  </SafeAreaView>
)

export default News
