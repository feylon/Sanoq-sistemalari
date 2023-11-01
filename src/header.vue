<template>
<div class="container_home">

<div class="box">
<div @click="router.push('/birinchi')" class="box1 box_1">
<div class="logo_div">
    <img src="./assets/GIT.png" alt="">
    <span>
Sanoq sistemalari
</span></div>
</div>
<div @click="router.push('/ikkinchi')" class="box1 box_3">
    <div class="logo_div">
    <img src="./assets/GIT.png" alt="">
    <span>
    lorem impsum

</span></div>
</div>
<div @click="router.push('/uchinchi')" class="box1 box_4">
    <div class="logo_div">
    <img src="./assets/GIT.png" alt="">
    <span>
    lorem impsum

</span></div>
</div>
<div @click="router.push('/turtinchi')" class="box1 box_5">
    <div class="logo_div">
    <img src="./assets/GIT.png" alt="">
    <span>
    lorem impsum

</span></div>
</div>
</div>

</div>
    
    </template>
    <script setup>
import { useRouter } from 'vue-router';
let router = useRouter();    
    </script>
    <style scoped>
   .container_home{
    height: 100vh;
    background-color: rgb(62, 106, 248);
    display: flex;
    align-items: center;
    justify-content: center;
}
   .box{
    width: 300px;
    height: 300px;
    background-color: white;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
.box1{
    width: 149px;
    height: 149px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    transition: 0.5s ease all;
}   

.box_1{
    border-bottom: 1px solid gray;

}
.box_3{
    border-left: 1px solid gray;

}
.box_4{
    border-right: 1px solid gray;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}
.box_5{
    border-top: 1px solid gray;

}
.logo_div img{
width: 40px;
margin-bottom: 20px;
}      
.logo_div{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

}
.logo_div span{
transition: 0.5s ease   all;
font-size: 13px;
}
.box1:hover{
    background-color: rgb(76, 113, 233)  ;
    cursor: pointer;
}
.box1:hover span{color: white;}
    </style>