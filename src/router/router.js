import Auth from '@/pages/Auth'
import Main from '@/pages/Main'
import Analitics from "@/pages/Analitics"
import {createRouter, createWebHistory} from 'vue-router'
import store from '@/store'
const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/analitics',
        component: Analitics,
        meta: { 
            requiresAuth: true
        },
        beforeEnter: (to, from, next) => {
            console.log(store.state.post.isLoggedIn)
            if(to.matched.some(record => record.meta.requiresAuth)) {
     
                if (store.state.post.isLoggedIn) {
                  next()
                  return
                }
                else {
                    next('/auth')
                }
              } else {
                next('') 
              }

          },
    },
    {
        path: '/auth',
        component: Auth
    }
]
const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})


export default router;