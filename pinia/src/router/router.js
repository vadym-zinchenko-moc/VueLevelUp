import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage'
import UsersPage from '../views/UsersPage'

const routes = [
    {
        component: LoginPage,
        path: '/'
    },
    {
        component: UsersPage,
        path: '/users'
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router