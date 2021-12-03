<template>
  <div>
    <b-container fluid>
 
    </b-container>
  </div>
</template>

<script>
import "swiper/swiper-bundle.css";
import "swiper/core/";
import { mapState } from "vuex";
export default {
  components: {},
  data: () => ({
    selected: "",

    swiperOption: {
      effect: "coverflow",

      slidesPerView: 3,
      spaceBetween: 30,
    },
  }),
  computed: {
    ...mapState({
      dto: (state) => state.adminModule.dto,
      users: (state) => state.adminModule.users,
    }),
  },
  created() {},
  methods: {
    handleInput(e) {
      console.log(e);
      this.dto.images = e.oldImages;
      this.dto.file = e.files;
    },
  },
};
</script>

<style></style>
