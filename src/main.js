
import Vue from "vue";
//导入vant-ui组件
import Vant from 'vant';
import {Toast} from 'vant';
// 导入axios
import axios from "axios";
//路由：1.导入路由构造函数
import VueRouter from "vue-router";

//1.导入组件
//导入App.vue
import App from "./App.vue";
//路由：2.导入路由的配置
import routes from "@/routes/routes";



import "@/assets/styles/iconfont.css";
import "@/assets/styles/iconfont.js";


//在.vue文件中要使用router-link或者router-view。需要注册下插件
Vue.use(VueRouter);
Vue.use(Vant);

//把axios挂载到原型
Vue.prototype.$axios = axios;//this.$axios
//基准路径，以后每次请求都会自动在前面加上该路径
axios.defaults.baseURL = "http://localhost:3000";


//路由:3.创建对象
const router = new VueRouter({
    routes
})

//路由守卫,就是一页面跳转之前的拦截器
//to要跳转之后的页面，去哪里
//from跳转之前的页面，来自哪里
//next必须要调用next()。调用才会执行跳转，还可以重定向,next("/login")
router.beforeEach( (to, from, next) => {
    // 是否有token
    const hasToken = localStorage.getItem("token");

    // 判断是否是需要登陆权限的页面
    if(to.path === "/personal" || to.path === "/edit_profile"){

        // 判断本地是否有token
        if(hasToken){
            // 正常跳转
            next();
        }else{
            // 没有token正常跳转到登录
            next("/login")
        }

    }else{
        // 所有人都可以访问的页面正常浏览
        next();
    }

})

//axios的统一的拦截器，拦截响应
//使用axios的拦截器统一处理响应错误
//固定的声明
//interceptors 英[ˌɪntəˈsɛptəz] inter(s哑)的
axios.interceptors.response.use(res => {
    const {message,statusCode} = res.data;

    if(statusCode === 401){
        Toast.fail(message);
    }

    //token过期了，或者token无效，一般引起的原因可能token被清空，密码修改了
    if(message === '用户信息验证失败'){
        //跳转到登录
        router.push('/login')
    }

    //必须要返回res
    return res;
    
});

new Vue({
    el: "#app",
    
    // 路由:4.挂载到根实例
    router,
    //指定一个组件渲染根实例，这个组件可以称为最底层的组件
    render: function(createElement){
        //render函数使用固定的写法，只有App可变
        return createElement(App)
    }
})

  