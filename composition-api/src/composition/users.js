import { ref } from "vue";

export default function useUsers () { 
    const users = ref([]);
    const userDetails = ref(null);

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
     
    return {users, userDetails, addNewUser, getUserDetails, deleteUser}
}