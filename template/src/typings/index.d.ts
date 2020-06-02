import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";


/*************************
 * EStyleSheet 类型 start
 */
type StyleSet<T = any> = { [K in keyof T]: AnyStyle }

type Value<T> = T | (string & {})

type AnyStyle = ImageStyle & TextStyle & ViewStyle
type Extended<T> = { [K in keyof T]: Value<T[K]> }

type NamedStyles<T> = { [P in keyof T]: Extended<AnyStyle> }
declare interface IEStyleSheet {
  create: <T extends NamedStyles<T> | NamedStyles<any>>(styles: T) => StyleSet<T>
}
/**
 * EStyleSheet 类型 end
 ***********************/


declare interface Global {
  global: any;
}

/**
 * dispatch 类型
 * @type P: Type of payload
 * @type C: Type of callback
 */
type Dispatch = <P = any, C = (payload: P) => void>(action: {
  type: string;
  payload?: P;
  callback?: C;
  [key: string]: any;
}) => any;

export interface IDispatch {
  dispatch?: Dispatch;
}

/**
 * navigation 类型
 */
export interface INavigation {
  navigation?: StackNavigationProp<
    Record<string, object | undefined>,
    "Profile"
  >;
}
