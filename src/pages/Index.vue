<template>
    <div>

      <!-- 红色块头部 -->
      <div class="header">
          <span class="iconfont logo">&#xe600;</span>

          <div class="header-search">
              <span class="iconfont">&#xe6d5;</span>
              <i>搜索新闻</i>
          </div>

          <router-link to="/personal">
            <span class="iconfont  personal">&#xe60a;</span>
          </router-link>
      </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
    .header{
        height:50 / 360 * 100vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:0 10px;
        background:#f00;
        position: relative;
        .logo{
            font-size:27 / 360 * 100vw;
            color:#fff;
            margin-bottom: 32px;
            margin-left: 8px;
            
        }
        .personal{
            position: absolute;
            bottom:13px;
            right: 10px;

            font-size:25 / 360 * 100vw;
            color:#fff;
            
            
        }
        .header-search{
            height:34 / 360 * 100vw;
            background: rgba(255,255,255,0.5);
            flex:1;
            margin-left: 1.5rem;
            margin-right:3rem; 
            display: flex;
            align-items: center;
            justify-content: center;
            color:#fff;
            border-radius: 50px;
            span{
                margin-bottom: 13px;
            }
            i{
                font-size: 14px;
                margin-left:5px;
            }
        }
    }
</style> 
