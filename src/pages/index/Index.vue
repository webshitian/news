<template>
    <div>

      <!-- 红色块头部 -->
      <div class="header">
          <span class="iconfont logo">&#xe600;</span>
          <router-link to="/search" class="link-search">
            <div class="header-search">
                <span class="iconfont">&#xe6d5;</span>
                <i>搜索新闻</i>
            </div>
          </router-link>
          <router-link to="/personal">
            <span class="iconfont  personal">&#xe60a;</span>
          </router-link>
      </div>

      <!--栏目列表-->
      <!--v-model:默认选中的标签栏-->
      <!--stick：配置粘贴性布局-->
      <!--swipeable:滑动切换-->
      <van-tabs v-model="active" stick swipeable>
        <!--title:要显示的内容-->
        <van-tab
        v-for="(item, index) in categories"
        :key="index"
        :title="item.name" 
        >
        <!-- v-model: 列表是否在加载 -->
            <!-- finished: 是否加载完毕 -->
            <!-- load: 到底部触发的事件 -->
            <!-- immediate-check 禁止list立即出发onload -->
            <van-list
                v-model="item.loading"
                :finished="item.finished"
                finished-text="没有更多了"
                @load="onLoad"
                :immediate-check="false"
                >
                <!-- 文章模块组件，post是单篇文章详情 -->
                <PostCard 
                v-for="(item, index) in item.posts" 
                :key="index"
                :post="item"/>
            </van-list>
        </van-tab>
      </van-tabs>
  </div>
</template>

<script>

import config from "./index";
export default config;

</script>

<style scoped lang="less">
@import url("./index.less");
</style> 
