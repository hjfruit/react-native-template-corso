import React from 'react'
import { Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import PathMapping from '@/router/config'

const Mine = ({ navigation }) => (
  <SafeAreaView>
    <Text>Mine</Text>
    <Button title="Go to Details" onPress={() => navigation.navigate(PathMapping.Login.Login)} />
  </SafeAreaView>
)

export default Mine
