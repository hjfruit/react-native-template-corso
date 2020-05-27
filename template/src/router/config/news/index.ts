import NewsInfo from '@/pages/news/info'
import IRouteConfig from '@/router/typing'

const routes: IRouteConfig = {
  NewsInfo: {
    name: 'NewsInfo',
    component: NewsInfo,
    options: {
      title: '新闻资讯',
    },
  },
}
export default routes
