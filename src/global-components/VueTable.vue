<template>
  <div>
    <vue-good-table
      class="vue-good-table-scope"
      :columns="cols"
      :rows="data"
      :sort-options="{enabled: false}"
       />
  </div>
</template>
        // :search-options="{enabled: true}"

<script>
export default {
  name: 'my-component',
  props:{
      cols:Array,
      data:Array,
      label:String,
      sortable:{
          type:Boolean,
          default:false
      }
  },
  data(){
    return {

    };
  },
};
</script>


<style lang="scss">
@import '@/assets/_custom.scss';

.vue-good-table-scope{
    overflow: hidden;
    border: 0 !important;
    border-radius: 10px !important;
    table{
 
    thead{
        tr{

        th{
        color: #fff;
        background:$mainDark !important ;
        vertical-align: middle !important;
        }
        }
    }
 
     }
}


</style>

