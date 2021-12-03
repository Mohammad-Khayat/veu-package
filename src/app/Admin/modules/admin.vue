<template>
  <div class="admin">
    <div class="p-0 m-0">
      <side-bar ref="sideBar" @toggle="getSideSize"></side-bar>
    </div>

    <div class="main bg-light-theme p-0 m-0" :class="{ 'main-fluid': closed }">
      <navbar class="rounded"></navbar>
      <bread-crumb class="mt-2">
        <router-view name="actions"> </router-view>
      </bread-crumb>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideBar from "../layout/SideBar.vue";
import Navbar from "../layout/NavBar.vue";
import BreadCrumb from "../layout/BreadCrumb.vue";
export default {
  components: {
    Navbar,
    BreadCrumb,
    SideBar,
  },
  data: () => ({
    closed: false,
  }),

  methods: {
    getSideSize(closed) {
      this.closed = closed;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/sass/_custom.scss";

.admin {
  position: relative;
  ul,
  li {
    list-style: none !important;
    padding: 0 15px;
  }

  .main {
    position: absolute;
    width: calc(100% - 270px);
    right: 0;
    top: 0;
    transition: 0.3s;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: #fafafa !important;
    min-height: 100vh;
    @media (max-width: 768px) {
      position: fixed;

      min-height: auto !important;
      height: 90%;
      border-radius: 0 0 20px 20px;
      width: 100vw;
      overflow-y: scroll;
    }
    z-index: 10;
    box-shadow: 15px 0 15px -14px #111 !important;
  }
  .main-fluid {
    width: calc(100% - 78px);
  }
}
</style>
