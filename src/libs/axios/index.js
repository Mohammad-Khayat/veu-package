 import axios from "axios";
 import vue from 'vue'
import app from '../app'
axios.defaults.headers.Authorization ='jwt';
const axi = axios.create({
    baseURL:app.domain + '/api/'
})
vue.prototype.$axi = axi
export default axi;

 