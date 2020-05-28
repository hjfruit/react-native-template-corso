import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Flex } from '@ant-design/react-native'
// import EStyleSheet from 'react-native-extended-stylesheet'
// import { IEStyleSheet, INavigation } from '@/typings'

const Login = () => (
  <SafeAreaView>
    <View>
      <Text>手机号登录/注册</Text>
    </View>
    <View>
      <Text>欢迎来到云上江北嘴</Text>
    </View>
    <View>
      <Text>请输入手机号</Text>
    </View>
    <Flex justify="between">
      <Text>短信验证码</Text>
      <Text>获取验证码</Text>
    </Flex>
  </SafeAreaView>
)

// const styles = (EStyleSheet as IEStyleSheet).create({
//   txt1: {
//     color: '#000',
//   },
// })
export default Login
