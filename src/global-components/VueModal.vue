<template>
  <div>
    <div class="modal-parent" :class="visible ? 'visible' : 'unvisible'">
      <b-card
        no-body
        class="modal-card"
        :style="{ height: height + '%', width: width + '%' }"
      >
        <template #header>
          <div class="d-flex justify-content-between align-items-center">
            <h4 class="m-0">{{ title }}</h4>
            <b-button
              variant="transparent"
              class="rounded-circle shadow border close-btn"
              @click="close()"
            >
              <fa icon="fas fa-times" fill="#000"> </fa>
            </b-button>
          </div>
        </template>
        <b-card-body>
          <b-row no-gutters>
            <b-col>
               <slot>
               </slot>
             </b-col>
          </b-row>
        </b-card-body>

        <template #footer>
          <slot name="footer">
            <b-button
              variant="primary"
              @click="
                $emit('ok');
                close();
              "
              >Ok</b-button
            >
          </slot>
        </template>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  props: ["width", "height", "title"],
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    open() {
      this.visible = true;
    },
    close() {
      console.log("close");
      this.visible = false;
    },
  },
};
</script>

<style lang="scss">
.modal-parent {
  height: 100vh;
  width: 100vw;
  top: 0;
  right: 0;
  position: fixed;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0c0c0cda;
  transition: 0.3s ease;
  .modal-card{
    transition: .3s;
  }
}
.unvisible {
  visibility: hidden;
  .modal-card{
  transform: scale(2 ) ;
  }

  opacity: 0;
}
.visible {
  visibility: visible;
  .modal-card{
  transform: scale(1 )   ;
  }
  }
.card-body {
  overflow: auto;
}
.close-btn{
height: 36px;
width: 36px;
}
</style>
