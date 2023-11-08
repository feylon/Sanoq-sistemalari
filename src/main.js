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

/*children component birinchi */
import ikkilik from "./components/ikkilik.vue";
import sakkizlik from "./components/sakkkizlik.vue";
import unlik from "./components/unlik.vue";
import un_oltilikVue from './components/un_oltilik.vue';

import acsii_2 from "./components/ikkinchi/acsii_2.vue";
import acsii2 from "./components/ikkinchi/2acsii.vue"
import acsii_number_to_str from "./components/ikkinchi/acsii_number_to_str.vue";
import str_to_acsii_number from "./components/ikkinchi/str_to_acsii_number.vue";
let router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/", component:header
        },
        {path:"/birinchi", component:birinchi,
    
    children:[
        {path:"/birinchi",component:ikkilik,name:'birinchi'},
        {path:"/sakkizlik",component:sakkizlik},
        {path:"/unlik",component:unlik},
        {path:"/un_oltilik",component:un_oltilikVue},
    ]

},
        {path:"/ikkinchi", component:ikkinchi,
        children:[
            {path:'/ikkinchi', component:acsii_2},
            {path:"/acsii2",component:acsii2},
            {path:"/code_str", component:acsii_number_to_str},
            {path:"/acsii_number_to_str",component:str_to_acsii_number}
        ]
    },
        {path:"/uchinchi", component:uchinchi},
        {path:"/turtinchi",component:turtinchi}


    ]
})

// sahifalar 



let app = createApp(App);
app.use(router)
app.mount('#app')
