import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

/*************************
 * EStyleSheet 类型 start
 */
type Function<K> = () => K;
type Value<T> = T | (string & {});
type Variable<T> = Value<T> | Function<Value<T>>;
type Extended<T> = { [K in keyof T]: Variable<T[K]> };

type AnyStyle = ImageStyle & TextStyle & ViewStyle;
type AnyStyleSet = { [key: string]: AnyStyle };

type EStyleSet<T = any> = {
  [K in keyof T]: T[K] extends Variable<number>
    ? T[K]
    : T[K] extends MediaQuery
    ? T[K]
    : Extended<AnyStyle> & EStyleSet;
};

type StyleSet<T = any> = {
  [K in keyof T]: T[K] extends number
    ? T[K]
    : T[K] extends string
    ? T[K]
    : T[K] extends Function<number>
    ? number
    : T[K] extends Function<string>
    ? string
    : T[K] extends MediaQuery
    ? any
    : AnyStyle;
};

export type MediaQuery = { [key: string]: Extended<AnyStyle> };

declare interface IEStyleSheet {
  create<T = EStyleSet>(styles: EStyleSet<T>): StyleSet<T>;
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
