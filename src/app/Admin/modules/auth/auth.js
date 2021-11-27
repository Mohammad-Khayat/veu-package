import axi from "@/libs/axios";
import djwt from "jwt-decode";
import router from "@/router.js";
import appConfig from '@/libs/app'

export function isLogedIn(){
  return !!localStorage.getItem(appConfig.projectName+'AccessToken')
}
export function getUserData(){
  return JSON.parse(localStorage.getItem(appConfig.projectName+'UserData'))
}
export function jwtDecoded() {
  return djwt(localStorage.getItem(appConfig.projectName+'AccessToken'));
}
 

let module =

{ 
  
  state: {
    loginDto: {
      username: "",
      password: "",
      // rememberMe: true,
    },
    userData: null,
  },

  actions: {
    login({ commit }, payload) {
      console.log(payload)
      axi.post("Account/Login", payload).then((res) => {
        console.log(res)
        if (res.status === 200) commit("SET_USER_DATA", res.data);
      });
    },
  },
  mutations: {
    SET_USER_DATA(state, payload) {
        localStorage.setItem(appConfig.projectName+'AccessToken', payload.access_token);
        localStorage.setItem(appConfig.projectName+'UserData', JSON.stringify(payload));
        state.userData = payload;
        router.push("/admin");
    },
    LOG_OUT(state){
        state.userData=null;
        localStorage.removeItem(appConfig.projectName+'AccessToken')
        localStorage.removeItem(appConfig.projectName+'UserData')
        router.push('/login')
    },
    CHECK_AUTH(){
      if(!isLogedIn){
        router.push('/login')
      }
    }
  },

  getters: {
    userData:getUserData,
    jwtDecoded,
    isLogedIn
  },
};
export default module;

