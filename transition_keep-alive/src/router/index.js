import { createRouter, createWebHistory } from "vue-router"
import AboutPage from '../components/AboutPage'
import HomePage from '../components/HomePage'
import UsersList from '../components/UsersList'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/about',
            component: AboutPage
        },
        {
            path: '/todo',
            component: UsersList
        },
    ]
})

export default router