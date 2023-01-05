import { createRouter, createWebHistory } from "vue-router"
import AboutPage from '../components/AboutPage'
import HomePage from '../components/HomePage'
import TodoList from '../components/TodoList'

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
            component: TodoList
        },
    ]
})

export default router