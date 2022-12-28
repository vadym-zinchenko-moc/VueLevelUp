import { createApp } from 'vue'
import App from './App.vue'

 const app = createApp(App)

 app.directive('font-style', {
    beforeMount (el, binding) {
        let size = 14
        let color = 'black'

        if(binding.modifiers.small) {
            size = 8
        } else if(binding.modifiers.large) {
            size = 24
        } else if(binding.modifiers.extraLarge) {
            size = 48
        }

        if(binding.modifiers.red) {
            color = 'red'
        } else if( binding.modifiers.green) {
            color = 'green'
        }

        el.style.fontSize = size + 'px'
        el.style.color = color
    }
 })

 app.directive('validator', {
    updated(el, binding) {
        if(binding.value.length === 0) {
            el.style.border = '1px solid red'
        } else {
            el.style.border = '1px solid green'
        }
    }
})

 app.mount('#app')


