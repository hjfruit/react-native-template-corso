import React from "react";
import { Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { globalStyleParams } from "./assets/styles/globalParams";
import appModel from "./models";
import Router from "@/router";
import dva from "./utils/dva";

const app = dva({
  initialState: {},
  models: appModel,
});

// style里面的尺寸大小都写与2倍图设计稿一样(以宽度750px为基础)，eg:设计稿为20px,style里面写20rem
const entireScreenWidth = Dimensions.get("window").width;

EStyleSheet.build({ $rem: entireScreenWidth / 750, ...globalStyleParams });

const App = app.start(<Router />);
export default App;
