<template>
  <div class="container">
      <div class="header">
          <span class="iconfont back" @click="$router.back()">&#xe630;</span>
          <div class="input-wrap">
              <span class="iconfont iconsearch">&#xe6d5;</span>
              <input type="text">
          </div>
          <span class="search-btn">搜索</span>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
    .header{
        height: 60 / 360 * 100vw;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        .back{
            margin-top:-17px;
        }
        .input-wrap{
            position: relative;
            flex:1;
            margin: 0 10px;
            
            .iconsearch{
                position: absolute;
                left:15px;
                top:-2 / 360 * 100vw;
            }
            input{
                width: 100%;
                display: block;
                
                height: 40 / 360 * 100vw;
                background: #fff;
                border: 1px #eee solid;
                border-radius: 50px;
                padding:0 15px 0 38px;
                font-size:12px;
                box-sizing: border-box;
            }
        }
        .search-btn{
            font-size:14px;
        }
    }
</style> 
