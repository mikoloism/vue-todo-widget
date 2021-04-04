import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TodoHome from '../views/TodoHome.vue'
import TodoFormNew from '../views/Forms/TodoNew.vue'
import TodoList from '../layouts/todo-item-group.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/todo',
    component: TodoHome,
    children: [
      { path: '', name: 'TodoList', component: TodoList },
      {
        path: '/todo/new',
        name: 'TodoFormNew',
        component: TodoFormNew,
      },
      {
        path: '/todo/update/:id',
        name: 'WTFUpdate',
        component: TodoFormNew,
      },
      {
        path: '/todo/read/:id',
        name: 'WTFRead',
        component: TodoFormNew,
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
