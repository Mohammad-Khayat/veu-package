<template>
<div id="app">

<router-view>

</router-view>
</div>
</template>

<script>
export default {
  components: {
  },
};
</script>

<style lang="scss">
body{
}
*{
  direction: rtl;
  text-align: right;
}
.full-screen{

  height: calc(100vh - 56px);
  flex-direction: column;
}
small{
  cursor: pointer;
}
label{
  color:#777;
}
::placeholder{
  font-size:12px ;
}
@import url('https://fonts.googleapis.com/css2?family=Tajawal&display=swap');
*{
  font-family: 'Tajawal', sans-serif !important;
}
body{
  background-color: #f5f5f5 !important;
}
</style>

