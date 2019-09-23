<template>
    <div class="container">
        <!--关闭的按钮-->
        <div class="close">
          <span class="iconfont iconicon-test"></span>
        </div>  
      
      <!--logo-->
      <!--<div class="logo">
          <span class="iconfont iconnew"></span>
      </div>-->

      <svg class="logo" aria-hidden="true">
        <use xlink:href="#icon-xinlang"></use>
      </svg>

      <!--用户密码输入框-->
      <div class="inputs">
        <!--输入框组件-->
          <AuthInput
          placeholder="手机号码"
          :value='form.username'
          @input="handleUsername"

          :rule="/^1[0-9]{4,10}$/"
          err_message="手机号码格式不正确"
          ></AuthInput> 
          
          <AuthInput
          placeholder="密码"
          type="password"
          v-model="form.password"

          :rule="/^[0-9a-zA-Z]{3,12}$/"
          err_message="密码格式不正确"
          >
          </AuthInput> 
        
        <!--登录按钮-->
        <p class="tips">
          没有账号？ 
          <router-link to="/register">去注册</router-link>
        </p>
        <!--<button @click="handleSubmit">登录按钮</button>-->
        <AuthButton text="登录" @click="handleSubmit"/>   
      </div>
  </div>
</template>

<script>
//导入组件
import AuthInput from "@/components/AuthInput";
import AuthButton from "@/components/AuthButton";
// import axios from "axios";

export default {
    data(){
      return{
        //发送给后台的数据
        form:{
          username:"",
          password:""
        },
      }
    },
    //注册组件
  components:{
    AuthInput,
    AuthButton
  },

  methods:{
    //传递给输入框组件，用于获取用户名
    handleUsername(value){
      this.form.username = value;
    },
    //表单提交
    handleSubmit(){
      console.log(this.form)

      this.$axios({  
        url:"/login",
        method:"POST",//method相当于type
        data:this.form 
      }).then( res => { //.then的回调函数相当于success
        const{message} = res.data;
        
        if(message === "登录成功"){
          //跳转到首页
          this.$router.push("/")
        }
      });
    }
  }
}

</script>

<style scoped lang="less">
    // scoped 作用域样式
    //lang声明样式的类型

.container {
  padding: 20px;
}

.close {
  span {
    font-size: 27/360 * 100vw;
  }
}

.logo {
  display: flex;
  justify-content: center;
  width: 0.7em;
  height: 0.7em;
  padding-left: 0.9em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  display: block;
  font-size: 126/360*100vw;

  // span {
  //   display: block;
  //   font-size: 126/360*100vw;
  //   color: #d81e06;
  // }
}

.inputs{
    margin-top: 30px;  
    input{
      
      margin-bottom: 20px;
    }
}
.tips{
  text-align: right;
  margin-bottom: 20px;
  
  a{
    color:#3385ff;
  }
}

// .icon {
//   width: 1em;
//   height: 1em;
//   vertical-align: -0.15em;
//   fill: currentColor;
//   overflow: hidden;
// }
</style>