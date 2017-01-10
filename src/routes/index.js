export const routes = [
  {
    path: '/topics',
    redirect: '/topics/all'
  },
  {
    path: '/',
    redirect: '/topics/all'
  },
  {
    path: '/topics/:tab',
    component: require('src/views/topic.vue')
  }
]
