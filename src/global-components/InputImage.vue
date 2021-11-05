<template>
  <div>
    <FormulateInput
      @input="handleInput"
      type="image"
      class="formulate"
      name="file"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      filesList: null,
      file: null,
    };
  },

  methods: {
    handleInput(event) {
      console.log(this.$attrs);
      // console.log(event);
      // if (this.multiple) {
      //   event.files.forEach((element) => {
      //     this.filesList.push(element.file);
      //     this.$emit("input", this.filesList);
      //   });
      // } else {
      //   this.$emit(event.file);
      // }
      if (this.$attrs.multiple == '') {
        this.$emit("input", event.fileList);
        console.log('mul')
      } 
      else if( !this.$attrs.multiple) {
        this.$emit("input", event.files[0].file);
      }
    },
    // onFileSelected(e) {
    //   this.selectedFile = e.target.files[0];
    //   if (this.selectedFile) {
    //     this.imagePreview = URL.createObjectURL(this.selectedFile);
    //     this.$emit("upload", this.selectedFile);
    //   }
    // },
  },
};
</script>

<style lang="scss">
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
</style>
