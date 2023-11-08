<template>




    <div class="h5 text-center">Ikkilik kodini ACSIIga o'g'irish</div>
    
    <div class="w-75 m-auto mt-3">
        <form @submit.prevent="form_change()">
            <div>
                <textarea @keypress="bin_change(event)" v-model="value" type="text" class="form-control" placeholder="Belgilarni kiriting" required>
                    </textarea>
                </div>
    
            <button class="btn btn-primary m-auto d-block mt-4 w-75 " type="submit">
                O'tgazish
            </button>
            <textarea disabled v-model="value_2" type="text" class="form-control mt-4"  placeholder="ACSIIdagi ko'rinish">
            
                </textarea>
                <!-- <textarea  disabled v-model="value_3" type="text" class="form-control mt-4"  placeholder="ACSIIdagi ko'rinish, belgilar bilan birga">
                
            </textarea> -->
    
        </form>
    </div>
    
    
    
    
    
    
    </template>
    <script setup>
    import { ref } from 'vue';
    let value = ref("");
    let value_2 = ref("");
    let value_3 = ref("");
    
    const form_change = function (){
   
        let binaryString = "01001000 01100101 01101100 01101100 01101111"; // Replace with your binary string
        value_2.value = IkkilikToSatr(value.value);



    }
    
    
    
    
    
   
const bin_change = function (e){
if(event.key != "1" && event.key != "0") {event.preventDefault();}
}
    
function IkkilikToSatr(binaryString) {
  let binaryCode = binaryString.split(" ");
  let text = "";

  for (let i = 0; i < binaryCode.length; i++) {
    text += String.fromCharCode(parseInt(binaryCode[i], 2));
  }

  return text;
}
     
   
function IkkilikToSatr_belgi(binaryString) {
  let binaryCode = binaryString.split(" ");
  let text = "";

  for (let i = 0; i < binaryCode.length; i++) {
    text += String.fromCharCode(parseInt(binaryCode[i], 2));
    text += `[${binaryCode[i].toString()}]`;               
  }

  return text;
}
   
   </script>
    <style></style>