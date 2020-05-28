import { ViewStyle, TextStyle, ImageStyle, FlexStyle } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { StackNavigationProp } from "@react-navigation/stack";

/**
 * EStyleSheet 类型
 */
type IS = typeof EStyleSheet;
declare interface IEStyleSheet extends IS {
  create: (styles: {
    [className: string]: Partial<
      | ViewStyle
      | TextStyle
      | ImageStyle
      | FlexStyle
      | { [key: string]: number | string }
    >;
  }) => EStyleSheet.AnyObject;
}
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
