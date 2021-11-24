<template>
  <div>
    <b-container fluid>
    <pre>
      {{ dto }}
    </pre>
      <b-row>
        <b-col cols="12">
          <vue-select
            label="input select"
            v-model="dto.selectedExper"
            :options="users"
          ></vue-select>

          {{ dto.userInfo }}
        </b-col>
        <b-col>
        <b-button @click="dto.file=null">reset</b-button>
          <input-image :label="'input image'"> </input-image>
        </b-col>
        <b-col>
          <input-image
            :value="dto.images"
            @input="handleInput"
            :label="'input image'"
            multiple
          >
          </input-image>
        </b-col>
        
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import InputImage from "@/global-components/InputImage.vue";
export default {
  components: { InputImage },
  data: () => ({
    selected: "",
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
