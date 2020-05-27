import HomeScreen from '@/pages/home'
import IRouteConfig from '@/router/typing'

const routes: IRouteConfig = {
  Home: {
    name: 'Home',
    component: HomeScreen,
    options: {
      title: '首页',
    },
  },
}

export default routes
