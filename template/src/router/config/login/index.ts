import LoginScreen from '@/pages/login'
import IRouteConfig from '@/router/typing'

type Key = 'Login'
const routes: Record<Key, IRouteConfig> = {
  Login: {
    name: 'Login',
    component: LoginScreen,
    options: {
      title: '登录',
    },
  },
}

export default routes
