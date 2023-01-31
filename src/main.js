import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add( faInstagram, faYoutube, faGithub )
createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
