import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/_old/Home.vue'
import About from '@/views/_old/About.vue'
import WgTodo from '@/views/WgTodo.vue'
// import WgTForm from '@/views/WgTodoForm/index.vue'
// import WgTListView from '@/components/wg-todo/list.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/todo',
    name: 'wg-todo',
    component: WgTodo,
    // children: [
    //   { path: '', name: 'WgTListView', component: WgTListView },
    //   {
    //     path: '/todo/new',
    //     name: 'WgTFormCreate',
    //     component: WgTForm,
    //   },
    //   {
    //     path: '/todo/update/:id',
    //     name: 'WgTFormUpdate',
    //     component: WgTForm,
    //   },
    //   {
    //     path: '/todo/read/:id',
    //     name: 'WgTFormRead',
    //     component: WgTForm,
    //   },
    // ],
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
