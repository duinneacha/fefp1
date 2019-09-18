
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layouts.vue'),
    children: [
      { 
        path: '',
        component: () => import('pages/BookFair.vue')
      },
      { 
        path: '/visitor',
        component: () => import('pages/Visitors.vue')
      },
      { 
        path: '/exhibitor',
        component: () => import('pages/Exhibitors.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
