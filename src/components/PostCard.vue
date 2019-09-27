<template>
  <div class="card">
    <!--左侧文字-->
    <div class="card-left">
        <div class="post-title">
            北京大兴国际机场地跨北京市大兴区和河北省
            廊坊市，从高空俯瞰，北京大兴国际机场宛若
            展翅的凤凰。该机场距离天安门的直线距离是
            46公里，距离首都机场67公里，到雄安新区约65
            公里，距天津市区75公里。
        </div>
        <p class="post-info">
            <span>火星时报</span>
            <span>100跟帖</span>
        </p>
    </div>

    <div class="card-img">
        <img src="http://img5.imgtn.bdimg.com/it/u=4218249526,2406754247&fm=26&gp=0.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
    .card{
        padding: 20px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px #ccc solid;
        .card-left{
            flex:1;
            .post-title{
                font-size: 14px;
                line-height: 1.5;
                margin-bottom: 5px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
            }
            .post-info{
                font-size:12px;
                color:#999;
            }
        }
        .card-img{
            img{
                display: block;
                width: 120 / 360 * 100vw;
                height: 80 / 360 * 100vw;
                object-fit: cover;
            }
        }
    }
</style> 
