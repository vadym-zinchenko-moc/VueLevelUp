import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useLoginStore = defineStore("login", () => {
  const isAuth = ref(false);
  const user = ref(null);

  const fullName = computed(() => {
    return `${user.value.first_name} ${user.value.last_name} `;
  });

  const login = async () => {
    const data = await fetch("https://reqres.in/api/users/2");
    const userData = await data.json();
    user.value = userData.data;
    isAuth.value = true;
  };

  const logout = () => {
    user.value = null;
    isAuth.value = false;
  };

  return { isAuth, user, login, logout, fullName };
});
