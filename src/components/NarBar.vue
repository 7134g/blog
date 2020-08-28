<template>
    <el-menu class="top-bar" mode="horizontal" router>

        <el-menu-item class="bar" index="/">首页</el-menu-item>
        <el-menu-item class="bar" index="/ShowArticles">最新文章</el-menu-item>
        <el-menu-item class="bar" index="/classfication">分类</el-menu-item>
        <el-menu-item class="bar" index="/TimeLine">时间轴</el-menu-item>
        <el-menu-item class="bar" index="/about">关于网站</el-menu-item>
        <el-menu-item class="bar" index="/JianLi">简历</el-menu-item>
<!--        <el-menu-item class="bar" index="/login">登录</el-menu-item>-->
        <div class="login" @click="loging">
            <el-row class="demo-avatar demo-basic">
                <el-col span="12">
                    <div class="demo-basic--circle">
                        <div class="block"><el-avatar size="50" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar></div>
                        <div class="sub-title">登录</div>

                    </div>
                </el-col>

            </el-row>
        </div>
    </el-menu>
</template>

<script>
    export default {
        name: 'NarBar',
        methods: {
            loging() {
                this.$router.push({path:'/Login'})
            }
        }
    };
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .top-bar {
        /*margin-left: 5%;*/
        margin-bottom: 20px;
        /*padding-left: 15%;*/
        /*padding-right: 15%;*/
        .bar {
            margin-left: 50px;
        }


    }
    .login {
        margin-left: 90%;
        margin-right: 80px;
        text-align: center;
    }
</style>
