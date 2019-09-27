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

      <div class="article-link">
          <router-link to="#">
              原文:今天有没有打算撸代码，如果不撸代码，你怎么能进BAT呢！30岁之前能进BAT就好咯！想想都开心
          </router-link>
      </div>
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

<style>

</style>
