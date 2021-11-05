<template>
  <div>
  <VSelect :v-bind="$attrs" :label='labelKey'  :placeholder='placeholder' :options='options' :reduce="(item) => (valueLabel ? item[valueKey] : item)"
></VSelect>
  </div>
</template>

<script>
import VSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

export default {
  props:{
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
.v-select{
.vs__dropdown-toggle{
  border-radius: 1rem !important;
  height:38px !important;
}
}
</style>