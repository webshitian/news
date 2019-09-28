<template>
  <div class="footer">
      <input type="text" placeholder="写跟帖" @focus="handleFocus">
      <span class="comment">
           <em>1020</em>
           <i class="iconfont">&#xe679;</i> 
      </span>

      <i class="iconfont">&#xe657;</i>

      <i class="iconfont">&#xe8b8;</i>
  </div>
</template>

<script>
export default {
    methods:{
        //获取焦点时候触发
        handleFocus(){
    
        }
    }
}
</script>

<style scoped lang="less">

</style>
