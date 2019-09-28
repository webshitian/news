<template>
  <div>
      <!--文章的详情页的内容-->
      <div class="articel">
          <div class="header">
              <div class="header-left" @click="$router.back()">
                    <span class="iconfont">&#xe630;</span>
                    <span class="iconfont icon-xinlang"></span>
              </div>
              <span class="focus">关注</span>
          </div>

          <h3>文章的详情页的内容</h3>
          <p class="post-info">火星时报 2019年9月28日16:39:50</p>
          
          <div class="post-content">
                中国女排虽然战胜了荷兰，但第三局却被对手打得有点狼狈，对于这一局的失利，郎平表示：“第三局对手也是加强了发球的攻击性，我们有时候一传不到位时，强攻下不了球。如果和强队打比赛，自己失误这么多，（要赢）很难。”

                江苏球员张常宁在这场比赛中得到了15分。进攻方面，她在28次进攻中得到了10分，比起前几场比赛，进攻得分率不太理想。在第三局局末，张常宁曾被李盈莹替换下场。对于张常宁的表现，郎指导说道：“张常宁今天确实在进攻方面遇到一些困难，打得有一点着急，所以我们对她说还是要保持耐心，有些球她太想进攻直接得分，所以动作有一点变形。”

                此外，第四局时郎平还特意单独嘱咐了张常宁几句，说的是什么内容呢？对此，郎平透露道：“我主要希望她能耐心打，其他人给她保护。”
          </div>
      </div>

      <div class="post-btns">
          <span>
              <i class="iconfont">&#xe6a8;</i>1
              
          </span>
          <span>
              <i class="iconfont icon-weixin"></i>微信
              
          </span>
      </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="less">
.articel{
    padding:10px;
    .header{
        position:relative;
        height:60 / 360 * 100vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .header-left{
            position: absolute;
            top:-7px;
            left:0px;
            position:relative;
            *{
                vertical-align: middle;
            }
            
            .icon-xinlang{
                position: absolute;
                font-size:25px;  
                top: -13px;
                left: 24px;

            }
        }
        
        .focus{
            width:62 / 360 * 100vw;
            height: 26 / 360 * 100vw;
            line-height: 26 / 360 * 100vw;
            text-align: center;
            font-size:12px;
            background:red;
            color:#fff;
            border-radius: 100px;
        }
    }
    h3{
        margin-bottom:5px;
    }
    .post-info{
        font-size: 12px;
        color:#999;
        margin-bottom:10px;
    }
    .post-content{
        line-height: 1.5;
    }
}
.post-btns{
    margin-top:30px;
    display: flex;
    justify-content: space-around;
    span{
        padding: 0 15px;
        width: 50 / 360 * 100vw;
        height: 27 / 360 * 100vw;
        line-height: 14 / 360 * 100vw;
        font-size:12px;
        border: 1px #ddd solid;
        border-radius: 50px;
        vertical-align: middle;
        .iconfont{
            padding-right: 8px;
        }
        .icon-weixin{
            color: #07c907;
        
        }
        
    }
    
    
}
</style>



