import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')
const Dashboard = () => import('@/views/Dashboard')
const Readme = () => import('@/views/Readme')
// const Page = () => import('@/views/Page')

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/readme',
      name: 'home',
      component: DefaultContainer,
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: '/readme',
          name: 'Readme',
          component: Readme
        },
      ]
    }
  ]
});