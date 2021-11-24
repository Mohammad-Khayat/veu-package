<template>
  <div
    class="
      full-screen
      px-md-1
      login
      d-flex
      align-items-center
      justify-content-center
    "
  >
    <b-form class="auth-form bg-light rounded shadow">
      <b-card>
        <b-row>
          <b-col cols="12">
            <h4 class="text-dark m-auto text-center">تسجيل الدخول</h4>
          </b-col>
        </b-row>
        <b-row no-gutters>
          <b-col cols="12" class="my-2">
            <div class="d-flex flex-column">
              <label for="">اسم المستخدم</label>
              <b-input placeholder="ادخل اسم المستخدم" v-model="loginDto.username"></b-input>
            </div>
          </b-col>
          <b-col cols="12" class="my-2">
            <div class="d-flex flex-column">
              <label for="">كلمة المرور</label>
              <b-input placeholder="ادخل كلمة المرور" v-model="loginDto.password" ></b-input>
            </div>
          </b-col>
          <b-col cols="12" class="my-2">
            <b-button variant="primary" type="button" @click="login(loginDto)" block> تسجيل الدخول</b-button>
          </b-col>
        </b-row>
      </b-card>
    </b-form>
    <div class="mt-2">
      <small
        >الا تملك حساب؟
        <a class="text-primary" @click="$router.push('/register')"
          >انشاء حساب جديد</a
        ></small
      >
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  computed:{
    ...mapState({loginDto:({auth})=>auth.loginDto})
  },
  methods:{
    ...mapActions(['login'])
  }
};
</script>

<style lang='scss'>
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