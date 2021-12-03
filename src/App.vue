<template>
  <div id="app">
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss">
.full-screen {
  height: calc(100vh - 56px);
  flex-direction: column;
}
small {
  cursor: pointer;
}
label {
  color: #777;
}
::placeholder {
  font-size: 12px;
}
@import url("https://fonts.googleapis.com/css2?family=Tajawal&display=swap");
* {
  font-family: "Tajawal", sans-serif !important;
}
body {
  background-color: #fafafa !important;
}
</style>
