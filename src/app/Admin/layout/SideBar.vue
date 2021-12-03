<template>
  <div class="bg-dark-theme sidebar-background">
    <div class="side admin-sidebar " id :class="{ closed: closed }">
      <div class="py-1 ">
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
            <span class="m-0 mt-1 text-main-light" style="font-size:20px;"
              >Car Parts </span
            >
          </div>

          <div class="drawer">
            <b-button
              @click="
                closed = !closed;
                $emit('toggle', closed);
              "
              variant="transparent"
            >
              <fa icon="fas fa-bars" class="text-light"></fa>
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
            <fa :icon="item.icon" class="mr-2 text-g1" />
            <span :class="'text-g1'">
              {{ item.name }}
            </span>
          </b-nav-item>
        </div>
      </ul>
    </div>
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
.sidebar-background {
  display: flex;
  align-items: center;
  z-index: 0;
  width: 100%;
  min-height: 100vh;
  position: fixed;
}
@import "@/assets/sass/_custom.scss";
.admin-sidebar {
  transition: 0.3s ease-in-out;
  position: fixed;
  height: 94vh !important;
  width: 270px;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    z-index: 50;
    width: 100%;
    height: 10% !important;
    bottom: 0;
    .side-bar-list label,
    .side-header {
      display: none !important;
    }
    .side-bar-list {
      padding: 0 !important;
      overflow-x: scroll;
      overflow-y: hidden;
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row !important;
      .folder {
        display: flex !important;
        flex-direction: row !important;
        flex-wrap: nowrap;
      }
      .nav-link {
        display: flex;
        justify-content: center;
        svg {
          margin: 0 !important;
        }
        span {
          display: none;
        }
        display: flex;
        justify-content: center;
        flex-direction: column;
        &::after {
          display: none;
        }
      }
      .router-link-active {
        background-color: $primary !important;
      }
    }
  }
  left: 0;
  opacity: 0.8;
  backdrop-filter: blur(5px);
  background-color: $darkTheme;
  overflow: auto;
  overflow-x: hidden;
  label {
    white-space: nowrap;
    font-size: 12px;
    height: 20px;
  }

  &::-webkit-scrollbar {
    width: 10px;
    transition: 0.5s;
  }
  &::-webkit-scrollbar-track {
    background: $darkTheme;
  }
  &::-webkit-scrollbar-thumb {
    background: $primary;
    border-radius: 20px;
  }
  .nav-link {
    color: #fff !important;
    position: relative;
    padding: 1rem;
    transition: 0.3s ease-in-out;
    border-radius: 25px;
    max-height: 60px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    &:hover {
      background-color: rgba(0, 0, 0, 0.205) !important;
    }
    span {
      transition: 0.3s;
    }
  }
  .router-link-active {
    background-color: rgba(0, 0, 0, 0.205) !important;
    &::after {
      position: absolute;
      content: "";
      height: 50%;
      width: 3px;
      border-radius: 25px;
      background-color: $primary;
      right: 20px;
      box-shadow: 0 0 5px 1px $primary;
    }
  }
  .side-header {
    height: 90px;
  }
}
.brand {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;
  transition: 0.3s;
}
.drawer svg {
  transition: 0.5s;
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
    white-space: nowrap;
  }
  .router-link-active {
    &::after {
      display: none;
      height: 0;
      width: 0;
    }
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

  .drawer svg {
    transform: rotate(180deg);
  }
  &::-webkit-scrollbar-thumb {
    background: $primary;
    border-radius: 20px;
  }
}
</style>
