<template>
    <div>
        <router-link to="/edit_profile">
            <div class="profile">
                <!--$axios.defaults.baseURL读取axios的服务器路径-->
                <img :src="profile.head_img" alt="">
                <div class="profile-center">
                    <div class="name">
                        <!--这里可以使用v-if判断是否显示，用profile.gender来判断-->
                        <!--<span class="iconfont iconxingbienan"></span>-->
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-xingbienan
    "></use>
                        </svg>
                        {{profile.nickname}}
                    </div>            
                    <div class="time">
                        2019年9月24日16:28:54
                    </div>
                </div>
                <span class="iconfont">&#xe742;</span>
            </div>
        </router-link>
        <!--调用条形组件-->
        <CellBar label="我的关注" text="关注的用户"/>
        <CellBar label="我的跟帖" text="跟帖/回复"/>
        <CellBar label="我的收藏" text="文章/视频"/>
        <CellBar class="log_out" label="退出" @click="handleLogout"/>
        
    </div>
    
</template>

<script>
//导入条形组件
import CellBar from "@/components/CellBar";

export default {
    data(){
        return{
            //个人信息
            profile:{}
        }
    },
    components: {
        CellBar
    },
    
    methods:{
        //退出登录
        handleLogout(){
            //清除本地的token和id
            localStorage.removeItem("token");
            localStorage.removeItem("user_id");

            //replace替换上一个页面
            this.$router.push("/login");
        }
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
            const{data} = res.data;

            if(data){
            //保存到data
            this.profile = data;

                //如果用户有头像
                if(data.head_img){
                    this.profile.head_img = this.$axios.defaults.baseURL + data.head_img;
                }else{
                    this.profile.head_img = "./static/kgwzm.JPG";
                }
            }
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
            .icon {
                width: 1.2em;
                height: 1.2em;
                vertical-align: -0.15em;
                fill: currentColor;
                overflow: hidden;
            }
        }
        .time{
            color:#666;
            font-size: 14px;
            margin-top: 5px;
        }
    }
    .log_out{
        padding-top:21rem;
        border-bottom: none;
    }
    /*
        8,9,10,11,12,
        13,14,15,16,17,
        18,19,20,21,22,
        23,0。
    */
</style>
