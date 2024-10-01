import { reactive, computed } from "vue";

export default function useForm (emit)  {
    const newUser = reactive({
        name: "",
        email: "",
      });
  
      const addUser = () => {
        emit("addNewUser", newUser);
        newUser.name = "";
        newUser.email = "";
      };
  
      const valid = computed(() => {
        return newUser.name.trim().length && newUser.email.trim().length;
      });
      
      return {addUser, valid, newUser}
}