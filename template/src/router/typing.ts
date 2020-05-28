import { StackNavigationOptions } from '@react-navigation/stack'

export default interface IRouteConfig {
  name: string
  component: React.ComponentType<any>
  options: StackNavigationOptions
}
