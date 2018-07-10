import Links from '@/components/pages/links/index'
import Users from '@/components/pages/users/index'
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
    name: 'Login',
    component: Login
  }
]

export default routes
