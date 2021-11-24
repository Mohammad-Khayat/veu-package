<template>
  <div class="vue-select-component">
    <b-form-group>
      <label for="vselect" v-if="label" class="mr-1 mb-1">{{ label }}</label>
      <VSelect
        id="vselect"
        :value='localValue'
        @input="$emit('input', $event)"
        :v-bind="$attrs"
        :label="labelKey"
        :placeholder="placeholder"
        :options="options"
        :reduce="(item) => (valueKey ? item[valueKey] : item.id)"
      ></VSelect>
    </b-form-group>
  </div>
</template>

<script>
import VSelect from "vue-select";
import "vue-select/dist/vue-select.css";

export default {
  props: {
    label: String,
    options: Array,
    value: null,
    labelKey: {
      type: String,
      default: "name",
    },
    valueKey: {
      type: String,
      default: "id",
    },

    placeholder: {
      type: String,
      default: "",
    },
  },
  components: {
    VSelect,
  },
  data() {
    return {
      localValue: "",
    };
  },
  mounted(){
    this.localValue = this.value
},
watch:{
  value(newValue){
    console.log(newValue)
    this.localValue = newValue
  }
}
};
</script>

<style lang="scss">
.vue-select-component {
  .v-select {
    .vs__dropdown-toggle {
      border-radius: 1rem !important;
      height: 38px !important;
    }
    .vs__dropdown-menu {
      background-color: #fafafa !important;
      border-radius: 0.8rem !important;
      padding: 15px 5px;
    }
  }
  label {
    font-size: 0.9rem !important;
  }
  .vs__clear{
    margin-left:15px ;
  }
}
</style>
