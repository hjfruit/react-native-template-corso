import { StackNavigationOptions } from '@react-navigation/stack'

export default interface IRouteConfig {
  [key: string]: {
    name: string
    component: React.ComponentType<any>
    options: StackNavigationOptions
  }
}
