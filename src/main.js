import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import "./../src/style.css";

// *sahifalar 
import header from "./header.vue";
import birinchi from "./1sahifa.vue";
import ikkinchi from "./2sahifa.vue";
import uchinchi from "./3sahifa.vue";
import turtinchi from "./4sahifa.vue";
let router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/", component:header
        },
        {path:"/birinchi", component:birinchi},
        {path:"/ikkinchi", component:ikkinchi},
        {path:"/uchinchi", component:uchinchi},
        {path:"/turtinchi",component:turtinchi}


    ]
})

// sahifalar 



let app = createApp(App);
app.use(router)
app.mount('#app')
