import { ref } from "vue";

export default function useUsers () { 
    const users = ref([]);
    const userDetails = ref(null);

    const getUsers = async () => {
      const data =  await fetch("https://jsonplaceholder.typicode.com/users")
      const response = await data.json()
      users.value = response 
    }

    const addNewUser = (newUser) => {
      const user = { ...newUser, id: users.value.length + 1 };
      users.value.push(user);
    };

    const getUserDetails = (id) => {
      userDetails.value  = users.value.find((user) => user.id === id )
    }

    const deleteUser = (id) => {
      const newArray = users.value.filter((e) => e.id !== id)
      users.value = newArray
    }   
     
    return {users, userDetails, addNewUser, getUserDetails, deleteUser, getUsers}
}