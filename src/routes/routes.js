//导入Login.vue
import Login from "@/pages/Login.vue"
import Register from "@/pages/Register";
import Personal from "@/pages/Personal";
import EditProfile from "@/pages/EditProfile";
import UserFollow from "@/pages/UserFollow";
import UserComment from "@/pages/UserComment";
import PostDetail from "@/pages/PostDetail";
import Index from "@/pages/index/Index";

import Comment from "@/pages/comment/Index.vue";
//路由:2.创建路由配置
const routes = [
    {path:"/login",component: Login},
    {path:"/register", component: Register},
    {path:"/personal",component: Personal},
    {path:"/edit_profile",component:EditProfile},
    {path:"/user_follow",component:UserFollow},
    {path:"/user_comment",component:UserComment},
    {path:"/",component:Index},
    // :id文章的id
    {path:"/post_detail/:id",component:PostDetail},
    {path:"/post_comment/:id",component:Comment}
];

export default routes;