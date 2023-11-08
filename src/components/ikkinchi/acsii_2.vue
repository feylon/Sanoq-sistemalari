<template>




<div class="h5 text-center">ACSII kodini ikkilikga o'g'irish</div>

<div class="w-75 m-auto mt-3">
    <form @submit.prevent="form_change()">
        <div>
            <textarea v-model="value" type="text" class="form-control" placeholder="Belgilarni kiriting" required>
                </textarea>
            </div>

        <button class="btn btn-primary m-auto d-block mt-4 w-75 " type="submit">
            O'tgazish
        </button>
        <textarea disabled v-model="value_2" type="text" class="form-control mt-4"  placeholder="Ikkilikdagi ko'rinish">
        
            </textarea>
            <textarea  disabled v-model="value_3" type="text" class="form-control mt-4"  placeholder="Ikkilikdagi ko'rinish, belgilar bilan birga">
            
        </textarea>

    </form>
</div>






</template>
<script setup>
import { ref } from 'vue';
let value = ref("");
let value_2 = ref("");
let value_3 = ref("");

const form_change = function (){
let str = value.value;
let array = [];
let array2 = [];
for (let i = 0; i < str.length; i++) {
  let charCode = str.charCodeAt(i);
  let ikkilik = acsii_ikkilik(charCode);
  array.push(ikkilik);
  array2.push(ikkilik.toString() + `(${str[i]}) `);

  value_2.value = array.join(" ");
  value_3.value = array2.join(" ");

}
}





function acsii_ikkilik(asciiCode) {
  return (asciiCode >>> 0).toString(2); 
}



 
</script>
<style></style>