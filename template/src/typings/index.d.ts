import { ViewStyle, TextStyle, ImageStyle, FlexStyle } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
// import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation'

// export interface INavigation {
//   navigation: NavigationScreenProp<NavigationState, NavigationParams>
// }

type IS = typeof EStyleSheet
declare interface IEStyleSheet extends IS {
  create: (styles: {
    [className: string]: Partial<ViewStyle | TextStyle | ImageStyle | FlexStyle | { [key: string]: number | string }>
  }) => EStyleSheet.AnyObject
}
declare interface Global {
  global: any
}
