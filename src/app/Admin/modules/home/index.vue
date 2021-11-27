<template>
  <div>
    <b-container fluid>
    <swiper  :options="swiperOption">
      <swiper-slide >
      <b-img  src="/media/placeholders/tik.jpg" style="width:100%" ></b-img>
      </swiper-slide>
      <swiper-slide>
      <b-img  src="/media/placeholders/tik.jpg" style="width:100%" ></b-img>
      </swiper-slide>
      <swiper-slide>
      <b-img  src="/media/placeholders/tik.jpg" style="width:100%" ></b-img>
      </swiper-slide>
      <swiper-slide>
      <b-img  src="/media/placeholders/tik.jpg" style="width:100%" ></b-img>
      </swiper-slide>
    </swiper>
 

     </b-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import 'swiper/core/'
import { mapState } from "vuex";
 export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
   data: () => ({
    selected: "",

        swiperOption: {
                    effect: 'coverflow',

          slidesPerView: 3,
          spaceBetween: 30,
 
        }
  }),
  computed: {
    ...mapState({
      dto: (state) => state.adminModule.dto,
      users: (state) => state.adminModule.users,
    }),
  },
  created() {},
  methods:{
    handleInput(e){
      console.log(e)
      this.dto.images=e.oldImages
      this.dto.file = e.files
    }
  }
};
</script>

<style></style>
