import NewsInfo from '@/pages/news/info'
import NewsList from '@/pages/news/list'
import IRouteConfig from '@/router/typing'

type Key = 'NewsInfo' | 'NewsList'
const routes: Record<Key, IRouteConfig> = {
  NewsInfo: {
    name: 'NewsInfo',
    component: NewsInfo,
    options: {
      title: '新闻资讯',
    },
  },
  NewsList: {
    name: 'NewsList',
    component: NewsList,
    options: {
      title: '新闻列表',
    },
  },
}
export default routes
