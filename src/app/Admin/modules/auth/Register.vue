<template>
  <div
    class="full-screen d-flex rounded align-items-center justify-content-center"
  >
    <b-form class="signup-form rounded auth-form shadow">
      <b-card>
        <b-row no-gutters>
          <b-col cols="12">
            <h4 class="text-dark m-auto text-center">انشاء حساب</h4>
          </b-col>
          <b-col cols="12" class="my-2">
            <div class="d-flex flex-column">
              <label for="">اسم المستخدم</label>
              <b-input placeholder="ادخل اسم المستخدم"></b-input>
            </div>
          </b-col>
          <b-col cols="12" class="my-2">
            <div class="d-flex flex-column">
              <label for="">كلمة المرور</label>
              <b-input placeholder="ادخل كلمة المرور "></b-input>
            </div>
          </b-col>
          <b-col cols="12 " class="my-2">
            <div class="d-flex flex-column">
              <label for=""> التحقق من كلمة المرور </label>
              <b-input placeholder=" ادخل كلمة المرور مجددا "></b-input>
            </div>
          </b-col>
          <b-col cols="12" class="my-2">
            <b-button variant="primary" block>انشاء حساب</b-button>
          </b-col>
        </b-row>
      </b-card>
    </b-form>
    <div class="mt-2">
      <small
        >لديك حساب بالفعل؟<a
          class="text-primary"
          @click="$router.push('/login')"
        >
          تسجيل الدخول
        </a></small
      >
    </div>
 
  </div>
</template>

<script>
export default {};
</script>

<style>
.auth-form {
  width: 500px;
}
.auth-svg {
  position: absolute;
  right: 50px;
  bottom: 50px;
  width: 12vw;
  height: 12vw;
}
#Vector {
  transform-origin: 133px 144px;
  animation: rotate 10s infinite linear;
}
#Vector_2 {
  animation: rotate 7s infinite linear reverse;
  transform-origin: 292px 311px;
}
#Vector_3 {
  animation: rotate 5s infinite linear reverse;
  transform-origin: 345px 144px;
}
@keyframes rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>