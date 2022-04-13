import { createApp } from 'vue'
import App from './App.vue'
import 'swiper/css/bundle'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import './css/main.less'
import './css/shake.css'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

createApp(App).mount('#app')
