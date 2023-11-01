<template>

<div class="container mt-3">
<button class="btn btn-primary" @click="router.go(-1)">Orqaga</button>

<nav>
    <div class="h4 text-center">Sanoq sistemalari</div>
</nav>

<form @click.prevent="converter()">
    
<input v-model="bin" @keyup="bin_change_down()" @keypress="bin_change(event)" type="text" class="form-control text-center mt-3" placeholder="Ikkilik sistema" >
<input v-model="oct" @keyup="oct_change_down" @keypress="oct_change()"  type="text" class="form-control text-center mt-3" placeholder="Sakkizlik sistema" >
<input v-model="dec" @keyup="dec_change_down()" @keypress="dec_change()" type="text" class="form-control text-center mt-3" placeholder="O'nlik sistema" >
<input v-model="hex" @keyup="hex_change_down()" @keypress="hex_change()" type="text" class="form-control text-center mt-3" placeholder="O'n oltilik sistema" >

<button v-if="false" class="btn btn-primary w-100 m-auto mt-4">
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
@import url("./../node_modules/bootstrap/dist/css/bootstrap.min.css");
  .container{
    user-select: none;
  }
</style>