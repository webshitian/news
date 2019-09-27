<template>
  <div>
      <HeaderNormal title="我的跟帖"/>

      <!--评论的列表-->
      <div class="comment-item">
          <div class="time">2019年9月27日10:53:24</div>
          
          <!--当前的评论回复的评论-->
          <div class="parent">
              <div class="parent-title">
                  @:web小势天
              </div>
              <div class="parent-content">
                  今天有没有打算撸代码？
              </div>
          </div>
      </div>

      <!--个人评论的内容-->
      <div class="conten">
          现在还不知道呢！
      </div>

     
          <router-link to="#" class="article-link">
            <p>  
              原文:今天有没有打算撸代码，如果不撸代码，你怎么能进BAT呢！30岁之前能进BAT就好咯！想想都开心
            </p>
            <span class="iconfont">&#xe742;</span>  
          </router-link>
     
  </div>
</template>

<script>
//导入头部
import HeaderNormal from "@/components/HeaderNormal";
export default {
    components:{
        HeaderNormal
    }
}
</script>

<style scoped lang="less">
    .comment-item{
        padding:10px;
        font-size:14px;
        line-height: 1.8;
        border-bottom:1px #ccc solid;
        
        .time{
            font-size:12px;
            color:#999;
            margin-bottom:5px;  
        }

        .parent{
            background:#eee;
            padding: 10px;
            margin-bottom: 5px;
            
            .parent-title{
                font-size:12px;
                color:#999;
            }
        }
    }
    .content{
        margin-bottom:5px;
    
    }
    .article-link{
        display:flex;
        justify-content: space-between;
        align-items:center;
        font-size:12px;
        color:#999;

        p{
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
        }
    }
</style>
