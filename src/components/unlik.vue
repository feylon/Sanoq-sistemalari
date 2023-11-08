<template>

    <div class="container  mt-3 w-75">
   <nav>
        <div class="h4 text-center">O'nlikdan boshqasiga o'tgazish</div>
    </nav>
    
    <form @submit.prevent="dec_change_down()">
        
        <div class="d-flex justify-content-evenly align-items-center w-75 m-auto">
            <label class="w-25 h6 mt-3" for="">O'nlik :</label>
            <input  v-model="dec"  @keypress="dec_change()" type="text" class="form-control text-center mt-3" placeholder="O'nlik sistema" >
        </div>

        <div class="d-flex justify-content-evenly align-items-center w-75 m-auto">
            <label for="" class="w-25 h6 mt-3">Ikkilik :</label>
            <input :disabled= "true?'true':''" :readonly="true?'true':''" v-model="bin"  @keypress="bin_change(event)" type="text" class="form-control text-center mt-3" placeholder="Ikkilik sistema" >
        </div>
        <div class="d-flex justify-content-evenly align-items-center w-75 m-auto">
            <label for="" class="w-25 h6 mt-3">Sakkizlik :</label>
            <input :disabled= "true?'true':''" :readonly="true?'true':''" v-model="oct" @keyup="oct_change_down" @keypress="oct_change()"  type="text" class="form-control text-center mt-3" placeholder="Sakkizlik sistema" >
        </div>
       
        <div class="d-flex justify-content-evenly align-items-center w-75 m-auto">
            <label class="w-25 h6 mt-3" for="">O'n oltilik :</label>
            <input :disabled= "true?'true':''" :readonly="true?'true':''" v-model="hex" @keyup="hex_change_down()" @keypress="hex_change()" type="text" class="form-control text-center mt-3" placeholder="O'n oltilik sistema" >
        </div>
    
    <button  class="btn btn-primary w-100 m-auto mt-4">
        O'tgazish
    </button>
    
    </form>
    </div>
    
    </template>
    <script setup>
    import { useRouter } from 'vue-router';
    import { ref } from 'vue';
    document.title = "Sanoq sistemari";
    let router = useRouter();
    // *o'zgaruvchilar
    let bin = ref("");
    let oct = ref("");
    let dec = ref("");
    let hex = ref("");
    
    
    let  converter = function () {
        
    }
    
    let bin_change = function (e){
    if(event.key != "1" && event.key != "0") {event.preventDefault();}
    let bin_new = parseInt(bin.value, 2);
    }
    
    let bin_change_down = function(){
      if(!bin.value){
      dec.value = "";
      oct.value = "";
      hex.value = "";
        return;
      
      }
      
      let bin_new = parseInt(bin.value,2);
      dec.value = bin_new.toString(10);
      oct.value = bin_new.toString(8);
      hex.value = bin_new.toString(16);
      
    
    }
    
    
    
    let oct_change_down = function(){
      if(!oct.value){
      dec.value = "";
      bin.value = "";
      hex.value = "";
        return;
      
      }
      
      let oct_new = parseInt(oct.value,8);
      dec.value = oct_new.toString(10);
      bin.value = oct_new.toString(2);
      hex.value = oct_new.toString(16);
      
    
    }
    
    let dec_change_down = function(){
      if(!dec.value){
      oct.value = "";
      bin.value = "";
      hex.value = "";
        return;
      
      }
      
      let dec_new = parseInt(dec.value,10);
      oct.value = dec_new.toString(8);
      bin.value = dec_new.toString(2);
      hex.value = dec_new.toString(16);
      
    
    }
    
    
    
    let hex_change_down = function(){
      if(!hex.value){
      oct.value = "";
      bin.value = "";
      dec.value = "";
        return;
      
      }
      
      let hex_new = parseInt(hex.value,16);
      oct.value = hex_new.toString(8);
      bin.value = hex_new.toString(2);
      dec.value = hex_new.toString(10);
      
    
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    let oct_change = function (e){
    if(event.key != "1" && event.key != "0"  && event.key != "2" && event.key != "3" && event.key != "4" && event.key != "5" && event.key != "6" && event.key != "7" ) {event.preventDefault();return}
    }
    let dec_change = function (){
    if(event.key != "1" && event.key != "0"  && event.key != "2" && event.key != "3" && event.key != "4" && event.key != "5" && event.key != "6" && event.key != "7"  && event.key != "8" && event.key != "9" ) {event.preventDefault();return}
    
    }
    
    
    let hex_change = function (){
    if(event.key != "1" && event.key != "0"  && event.key != "2" && event.key != "3" && event.key != "4" && event.key != "5" && event.key != "6" && event.key != "7"  && event.key != "8" && event.key != "9" && event.key != "a" && event.key != "b" && event.key != "c" && event.key != "d" && event.key != "e" && event.key != "f") {event.preventDefault();return}
    
    }
    </script>
    <style >
    @import url("./../../node_modules/bootstrap/dist/css/bootstrap.min.css");
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
    label{
    }
    
    </style>