<template>
  <b-container fluid>
    <div class=" p-2  bread ">

               <div class="d-flex   h-100 w-50 ">
              <div
                class="bread-item d-flex align-items-center"
                v-for="(item, i) in items"
                :key="i"
              >
                <fa v-if="item.icon" class="text-primary  ml-2" :icon="item.icon">
                
                </fa>
                <b-nav-item class="text-dark p-0" :to="item.path">{{
                  item.name
                }}</b-nav-item>
                <fa
                  v-if="i != items.length - 1"
                  class="text-main mx-3"
                  icon="fas fa-angle-left"
                >
                </fa>
              </div>
            </div>

            <div class="actions w-50">
             <slot>
              <div class="placeholder"></div>
            </slot>
            </div>
        </div>
   </b-container>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$route.meta.breadcrumb;
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-link {
   padding: 0 !important;

}
.bread {
  height: 54px;
  display: flex;
 }
.placeholder {
  height: 38px;
}
</style>
