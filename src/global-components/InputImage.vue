<template>
  <div class="vue-file-component">
    <label for="vfile" v-if="label" class="mr-1 mb-1">{{ label }}</label>
    <FormulateInput
      id="vfile"
      @input="handleInput"
      @file-removed="deleteFile"
      @file-upload-complete="addFile"
      type="image"
      class="formulate"
      name="file"
      v-bind="$attrs"
    >
    </FormulateInput>

    <div class="image-previewer" v-if="value">
      <b-row v-if="isMulti" cols="3 ">
        <b-col v-for="(image, i) in images" :key="i">
          <div class="img">
            <b-button
              class="position-absolute rounded-pill p-0 delete-img-btn"
              :variant="image.deleted?'success':'danger'"
              @click="deleteImage(image.id)"
              >
              <fa :icon="image.deleted?'fas fa-trash-restore':'fas fa-trash'"></fa>
              </b-button>
            <b-img
              class="w-100"
              style="height:100px; object-fit:cover"
              :class="[{ deleted: image.deleted ,  },'image-preview']"
              :src="image.path"
            ></b-img>
          </div>
        </b-col>
      </b-row>
      <div v-else>
        <b-button class="position-absolute rounded-pill" variant="danger"
          ><fa icon="fas fa-times"></fa
        ></b-button>
        <b-img class="w-100 border" :src="value"></b-img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { label: String, value: null },
  data() {
    return {
      images: [],
      files: [],
      file: null,
    };
  },
  computed: {
    isMulti() {
      return this.$attrs.multiple == "";
    },
  },
  mounted() {
    if (this.isMulti)
      this.value.forEach((element, i) => {
        this.images.push({ id: i, path: element, deleted: false });
      });
  },

  methods: {
    handleInput(event) {
      if (this.isMulti) {
        event.fileList.forEach((file) => {
          this.files.push(file);
        });
        this.upload();
      } else if (!this.$attrs.multiple) {
        this.$emit("input", event.files[0].file);
      }
    },
    deleteImage(id) {
      this.images[this.images.findIndex((el) => el.id == id)].deleted = !this
        .images[this.images.findIndex((el) => el.id == id)].deleted;
      this.upload();
    },
    deleteFile(e) {
      this.files = e.map((ob) => ob.file);
      this.upload();
    },
    addFile({file}) {
      if(!this.files.some(el=>el.name == file.name)){
      this.files.push(file)
        this.upload()
      }
},
    upload() {
      let oldImages = this.images
        .filter((el) => !el.deleted)
        .map((el) => el.path);
      this.$emit("input", { oldImages, files: this.files });
    },
  },
};
</script>

<style lang="scss">
.vue-file-component {
  label {
    font-size: 0.9rem;
  }
  .formulate-input-element {
    max-width: 100% !important;
  }

  .formulate-input {
    &:hover {
      .formulate-input-upload-area-mask {
        border-color: #7a7a7a !important ;
        &::before {
          background-color: #7a7a7a !important;
        }
      }
    }
    .formulate-input-upload-area-mask {
      border-radius: 1rem !important;
    }
    .formulate-file-image-preview {
      img {
        object-fit: cover !important;
      }
    }
    .formulate-file-remove {
      position: absolute !important;
      right: 65px !important;
    }
  }
}
.deleted {
  opacity: 0.5;
  filter:grayscale(100%)
}

.delete-img-btn {
  z-index: 2;
  top: 10px;
  right: 20px;
  height: 30px;
  width: 30px;
  transition: .5s;
}

</style>
