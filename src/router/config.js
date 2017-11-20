export default [
  {
    path: '/',
    name: 'MainPage',
    meta: {
      requireAuth: false,
      title: 'myspace'
    },
    component: (resolve) => require(['@/views/MainPage.vue'], resolve)
  }, {
    path: '/input',
    meta: {
      requireAuth: false,
      title: 'input'
    },
    name: 'input',
    component: (resolve) => require(['@/components/InputDemo.vue'], resolve)
  }
]
