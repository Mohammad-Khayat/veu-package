<template>
  <div>

<b-container fluid> 

 <b-row>

<b-col cols='6'>

<vue-select label='input select' v-model='selected' :options='users'></vue-select>
  </b-col>

   <b-col>
  <input-image   :label="'input image'"  >
  </input-image>
  </b-col>
  <b-col>
  <input-image    :label="'input image'"  >
  </input-image>
  </b-col>

</b-row>

 </b-container>  
  
  </div>
</template>

<script>
import {mapState} from 'vuex';
import axios from 'axios'
 import {toFormData} from '@/functions/formData.js'
import InputImage from '@/global-components/InputImage.vue';
 export default {
  components: { InputImage },
   data:()=>({
     selected:'',
     files:null

   }),
computed:{
...mapState(

{
  dto:(state)=>state.adminModule.dto,
  users:(state)=>state.adminModule.users
  
  
  }
)

},
created()
{
  let fd = toFormData(this.dto)
  axios.post('safsaasgaga',fd)
  
}

}
</script>

<style>

</style>