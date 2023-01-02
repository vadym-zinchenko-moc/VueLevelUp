import { ref } from "vue";

export default function useShow ()  {
    const show = ref(false);
    
    const toogleShow = () => {
      show.value = !show.value;
    };

    return {show, toogleShow}
}