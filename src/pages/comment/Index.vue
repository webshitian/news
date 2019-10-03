<template>
  <div>
      <!--头部组件-->
      <HeaderNormal title="精彩跟帖"></HeaderNormal>
      
      <!--评论模块-->
      <div class="comment">
          <div class="comment-info">
            
              <!--左侧的用户的信息-->
              <div class="comment-user">
                  <!--头像-->
                  <img src="../../../static/default_green.jpg" alt="">
                  <!--用户的名字-->
                  <div class="user-info">
                      <p>web势天</p>
                      <span>2019年10月3日13:39:13</span>
                  </div>
              </div>
              <span class="reply">回复</span>
          </div>
          <!--评论楼层-->
          <div class="comment-floor">
              <div class="floor-header">
                  <span>web小石潭</span>
                  <i>2019年10月3日13:45:51</i>
                  <em>回复</em>
              </div>
              <div class="comment-content">
                  仿苏宁易购鼠标点击搜索框提示信息
              </div>
          </div>
          <div class="comment-content">
                车主注意啦！9月下旬部分临时泊位进行清洁保养
          </div>
      </div>
  </div>
</template>

<script>
import config from "./index"
export default config;
</script>

<style scoped lang="less">
@import url("./index.less");
</style>

