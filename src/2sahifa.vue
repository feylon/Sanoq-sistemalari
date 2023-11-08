<template>

    <div class="container  mt-3">
    <div class="d-flex justify-content-around align-items-center">
    
      <button class="btn btn-primary" @click="router.push('/')">Orqaga</button>
    
    <div class="menus m-auto">
      <ul class="d-flex  gap-4 align-items-center">
        <li :class="menu[0]?'active_menu':''" @click="router.push('/ikkinchi');change_menu(0);">ACSII ikkilikga o'tgazish</li>
        <li :class="menu[1]?'active_menu':''" @click="router.push('/acsii2');change_menu(1)">Ikkilikdan ACSIIga</li>
        <li :class="menu[2]?'active_menu':''" @click="router.push('/acsii_number_to_str');change_menu(2)">Belgi AcSII jadvalga</li>
        <li :class="menu[3]?'active_menu':''" @click="router.push('/code_str');change_menu(3)">Acsiidagi o'rinni belgiga aylantirish</li>
      </ul>
    </div>
    
    <div class="w-50"></div>
    </div>
    <RouterView></RouterView>
    
    </div>
    
    </template>
    <script setup>
    import { useRouter } from 'vue-router';
    import { provide, ref,inject } from 'vue';
    import ikkilik from "./components/un_oltilik.vue"
    const router = useRouter();
    let menu = ref([true,false,false,false]);
    let change_menu = function (item){
      menu.value = [false,false,false,false];
      menu.value [item] = true;
    }
    </script>
    <style >
    @import url("./../node_modules/bootstrap/dist/css/bootstrap.min.css");
      .container{
        user-select: none;
      }
      .menus>ul li{
        list-style: none;
        font-size: 18px;
        font-weight: 600;
        border-bottom: 2px solid transparent;
        cursor: pointer;
      }
    ul{
    
    }
    .active_menu{
      border-bottom: 2px solid #0d6efd!important;
      color: #0d6efd;
    }
    
    </style>