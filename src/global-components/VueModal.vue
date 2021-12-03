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
              <fa icon="fas fa-times" class="text-main-dark"> </fa>
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
            v-if="isEdit"
              variant="primary"
              @click="
                $emit('edit');
                close();
              "
              > تعديل <fa icon='fas fa-pen' class="mx-1"></fa>  </b-button
            >
            <b-button
            v-else
              variant="primary"
              @click="
                $emit('ok');
                close();
              "
              > اضافة <fa icon='fas fa-plus' class="mx-1"></fa>  </b-button
            >
          </slot>
        </template>
      </b-card>
    </div>
    <b-btn v-if="!noBtn" variant="primary" class="action-btn" @click="visible=true">
      <slot name="add">
        <fa icon='fas fa-plus'></fa>
      </slot>
    </b-btn>
  </div>
</template>

<script>
export default {
  props: ["width", "height", "title","noBtn","isEdit"],
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
.action-btn{
  height: 45px;
  width: 45px;
  border-radius: 50% !important;
  position: fixed;
  bottom: 12%;
  right: 3%;

}
</style>
