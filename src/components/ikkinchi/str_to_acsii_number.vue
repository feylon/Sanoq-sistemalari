<template>




    <div class="h5 text-center">
        Belgini ACSII jadvalga o'tgazish
    </div>
    
    <div class="w-75 m-auto mt-3">
        <form @submit.prevent="form_change()">
            <div>
                <textarea  v-model="value" type="text" class="form-control" placeholder="Belgilarni kiriting (probel bilan)" required>
                    </textarea>
                </div>
    
            <button class="btn btn-primary m-auto d-block mt-4 w-75 " type="submit">
                O'tgazish
            </button>
            <textarea disabled v-model="value_2" type="text" class="form-control mt-4"  placeholder="ACSIIdagi ko'rinish">
            
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
   
       
        let inputArray = value.value.split(" ");
value_2.value = stringToCharCodeArray(inputArray).join(" ");


    }
    
    
    function stringToCharCodeArray(strings) {
  return strings.map(str => str.charCodeAt(0));
}



   
   </script>
    <style></style>