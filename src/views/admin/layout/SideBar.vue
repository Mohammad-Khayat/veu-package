<template>
  <div class="side admin-sidebar shadow  " id :class="{ closed: closed }">
    <div class="py-4">
      <div
        class="
              side-header
              d-flex
              align-items-center
              justify-content-between
              m-auto
              px-3
            "
      >
        <div class="brand">
          <b-img src="/media/logos/logo.svg" height="35px"> </b-img>
          <span class="m-0 mt-1" style="font-size:20px;">اسم الشركة</span>
        </div>

        <div class="drawer">
          <b-button
            @click="
              closed = !closed;
              $emit('toggle', closed);
            "
            variant="transparent"
          >
            <fa icon="fas fa-bars" class="text-primary"></fa>
          </b-button>
        </div>
      </div>
    </div>

    <ul class="side-bar-list p-0 m-0">
      <div class="folder" v-for="(value, key) in navLinks" :key="key">
        <label class="w-100 px-4">{{ key }}</label>
        <b-nav-item
          v-for="item in value"
          :key="item.name"
          :to="item.path"
          class="my-2"
        >
          <fa :icon="item.icon" class="ml-2 text-primary" />
          <span class="text-main-dark">
            {{ item.name }}
          </span>
        </b-nav-item>
      </div>
    </ul>
  </div>
</template>

<script>
import navLinks from "@/navigation";
export default {
  data() {
    return {
      closed: false,
    };
  },
  computed: {
    navLinks() {
      return navLinks;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/_custom.scss";
.admin-sidebar {
  transition: 0.3s ease-in-out;
  position: fixed;
  height: 100%;
  width: 270px;
  opacity: 0.8;
  backdrop-filter: blur(5px);
  overflow: auto;
  overflow-x: hidden;
   label {
    font-size: 12px;
    height: 20px;
  }

  &::-webkit-scrollbar {
    width: 10px;
    transition: 0.5s;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: $primary;
    border-radius: 20px;
  }
  .nav-link {
    color: #fff !important;
    padding: 18px;
    transition: 0.3s ease-in-out;
    border-radius: 25px;
    &:hover {
      background-color: #2b2b2b1a;
    }
    span {
      transition: 0.3s;
      position: absolute;
      z-index: -1;
    }
  }
  .router-link-active {
    box-shadow: 0px 5px 15px -5px #2b2b2b70;
  }
  .side-header {
    height: 90px;
  }
}
.brand {
  transition: 0.3s;
}
.closed {
  overflow-x: hidden;
  width: 78px;
  .brand {
    opacity: 0;
    transform: translateX(150px);
    visibility: hidden;
    position: absolute;
    z-index: 10;
    width: 500px;
  }

  label {
    transition: 0.3s;
    padding: 0 !important;
    text-align: center;
  }

  .nav-item {
    padding: 5px !important;
    text-align: center;
    .nav-link {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 60px;
      width: 60px;
      border-radius: 50% !important;
      margin: auto;
      text-align: center;
      svg {
        margin: 0 !important;
      }

      span {
        opacity: 0;
        position: absolute;
        transform: translateX(-300px);
      }
    }
  }
  &::-webkit-scrollbar {
    width: 5px;
    transition: 0.5s;
  }
}
</style>
