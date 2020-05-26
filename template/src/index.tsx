// import UpdateVersion from '@/components/UpdateVersion'
// import { Provider } from '@ant-design/react-native'
import React from 'react'
import { Dimensions } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { globalStyleParams } from './assets/styles/globalParams'
import appModel from './models'
// import Router, { routerMiddleware, routerReducer } from '@/router'
import dva from './utils/dva'
// import UpdateModal from '@/components/update-modal'
import Home from '@/pages/home'

const app = dva({
  initialState: {},
  models: appModel,
})

// style里面的尺寸大小都写与2倍图设计稿一样(以宽度750px为基础)，eg:设计稿为20px,style里面写20rem
const entireScreenWidth = Dimensions.get('window').width

EStyleSheet.build({ $rem: entireScreenWidth / 750, ...globalStyleParams })

const App = app.start(
  // <Provider>
  //   <Router />
  //   <UpdateModal />
  // </Provider>,
  <Home />,
)
export default App
