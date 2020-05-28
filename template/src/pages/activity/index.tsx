import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { IDispatch } from '@/typings'

interface IProps extends IDispatch {}

const Activity: React.FC<IProps> = () => {
  return (
    <SafeAreaView>
      <Text>324234</Text>
    </SafeAreaView>
  )
}

export default Activity
