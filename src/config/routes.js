/**
 * Created by zhangshiyan on 2017/7/3.
 */
// 引用模板
import index from '../page/index.vue'
import content from '../page/content.vue'
import movies from '../page/movies.vue'
// 配置路由
export default [
  {
    path: '/',
    component: index
  },
  {
    path: '/content',
    component: content
  },
  {
    path: '/movies',
    component: movies
  }
]
