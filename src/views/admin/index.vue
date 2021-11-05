<template>
  <div class="admin">
       <div class="p-0 m-0">
        <side-bar ref="sideBar" @toggle="getSideSize"></side-bar>
    </div>

    


      <div class="main p-0 m-0" :class="{'main-fluid':closed}">
         <navbar class="shadow-sm rounded"></navbar>
         <bread-crumb class="mt-2">
           <router-view name="actions"> </router-view>
        </bread-crumb>
         <router-view></router-view>
      </div>
    </div>
 </template>

<script>
import SideBar from "@/views/admin/layout/SideBar.vue";
import Navbar from "./layout/NavBar.vue";
import BreadCrumb from "@/views/admin/layout/BreadCrumb.vue";
export default {
  components: {
    Navbar,
    BreadCrumb,
    SideBar,
  },
  data: () => ({
    closed:false

  }),
 
  methods: {
      getSideSize(closed){
        this.closed = closed
      }
  },
};
</script>

<style lang="scss">
@import '@/assets/_custom.scss';

.admin {
  position: relative;
ul,
li {
  list-style: none !important;
  padding: 0 15px;
}

.main {
  height: 100%;
  position: absolute;
  width: calc(100% - 270px);
  left: 0;
  transition: .3s;
}
.main-fluid{
    width: calc(100% - 78px);

}
}

</style>
