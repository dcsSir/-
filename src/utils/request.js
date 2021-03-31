import axios from "axios"
import { Toast } from "vant"
import { getToken } from "@/utils/auth";
import router from "@/router"

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';

const instance = axios.create({
    baseURL: 'http://172.22.40.63:8080/',
    timeout: 10000,
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    Toast("拦截成功")
    if (getToken()) {
        config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }

    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

export default instance;