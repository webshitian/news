<template>
    <div>
        <div class="profile">
            <img src="http://img1.imgtn.bdimg.com/it/u=2357912857,682090914&fm=26&gp=0.jpg" alt="">
            
            <div class="profile-center">
                <div class="name">
                    <span class="iconfont iconxingbienan"></span>
                    web势天
                </div>            
                <div class="time">
                    2019年9月24日16:28:54
                </div>
            </div>
            <span class="iconfont iconjiantou1"></span>
        </div>
        
        <!--调用条形组件-->
        <CellBar/>
    </div>
    
</template>

<script>
//导入条形组件
import CellBar from "@/components/CellBar";

export default {
    components: {
        CellBar
    },
    
    mounted(){
        //请求个人资料接口
        this.$axios({
            url:"/user/" + localStorage.getItem("user_id"),
            //添加头信息
            headers:{
                Authorization:localStorage.getItem("token")
            }
        }).then(res=>{
            console.log(res)
        })
    }
}
</script>

<style scoped lang="less">
// scoped	英[skəʊpt] s go pt
    .profile{
        display: flex;
        padding: 20px 10px;
        justify-content: space-between;
        align-items: center;
        border-bottom: 5px #eee solid;
        img{
            width: 70 / 360 * 100vw;
            height: 70 / 360 * 100vw;
            border-radius: 50%;
        }
        .profile-center{
            flex:1;
            padding: 0 10px;
        }
        .name{
            span{
                color:#75b9eb;
            }
        }
        .time{
            color:#666;
            font-size: 14px;
            margin-top: 5px;
        }
    }
</style>
