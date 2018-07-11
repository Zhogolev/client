import Links from '@/components/pages/links/index'
import Users from '@/components/pages/users/index'
import Login from '@/components/pages/login/index'
const routes = [

  {
    path: '/links',
    name: 'Links',
    component: Links
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

export default routes
