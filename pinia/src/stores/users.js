import {defineStore} from 'pinia'

export const useUsersStore = defineStore('users',{
    state: () => ({
        users: [],
        userDetails: null
    }),
    getters: {
        getLengsUsers () {
            return this.users.length
        }
    },
    actions: {
        async  getUsers () {
           const data = await fetch('https://jsonplaceholder.typicode.com/users')
           const users = await data.json()
           this.users = users
        },
        addUser (user) {
            this.users.push(user)
        },
        getUserDetails (id) {
            this.users.filter((user) => {
                if(user.id === id) this.userDetails = user
            })
        }
    }
})
