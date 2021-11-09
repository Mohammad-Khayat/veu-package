<template>
  <div class="vue-select-component">
 <b-form-group>
  <label for="vselect" v-if="label" class="mr-1 mb-1">{{label}}</label>
  <VSelect id="vselect" @input="$emit('input',$event)" :v-bind="$attrs" :label='labelKey'  :placeholder='placeholder' :options='options' :reduce="(item) => (valueLabel ? item[valueKey] : item.id)"></VSelect>
 </b-form-group> 
  </div>
</template>

<script>
import VSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

export default {
  props:{
    label:String,
   options: Array,
  labelKey: {
	type: String,
	default: "name"
},
    valueKey: {
	type: String,
	default: "id"
},

placeholder: {
	type: String,
	default: ""
},

  },
components: {
    VSelect
}



}
</script>

<style lang='scss'>
.vue-select-component{
  
.v-select{
.vs__dropdown-toggle{
  border-radius: 1rem !important;
  height:38px !important;

}
.vs__dropdown-menu{
  background-color: #FAFAFA !important;
  border-radius: .8rem !important;
  padding: 15px 5px;
}

}
label{
font-size: .9rem !important;
}
}
</style>