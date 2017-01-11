export const routes = [
  {
    path: '/',
    component: require('src/views/main'),
    children: [
      {
        path: '',
        redirect: '/topics/all'
      },
      {
        path: '/topics',
        redirect: '/topics/all'
      },
      {
        path: '/find',
        component: require('src/views/find')
      },
      {
        path: '/alert',
        component: require('src/views/alert')
      },
      {
        path: '/message',
        component: require('src/views/message')
      },
      {
        path: '/info',
        component: require('src/views/info')
      },
      {
        path: '/topics/:tab',
        component: require('src/views/topics')
      }
    ]
  },
  {
    path: '/topic/:id',
    name: 'topic',
    component: require('src/views/topicitem')
  }
]
