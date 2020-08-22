<template>
    <el-menu class="top-bar" mode="horizontal" router>
        <el-menu-item class="tab" index="/">首页</el-menu-item>
        <el-menu-item class="tab" index="/articles">最新文章</el-menu-item>
        <el-menu-item class="tab" index="/classify">分类</el-menu-item>
        <el-menu-item class="tab" index="/about">关于网站</el-menu-item>
        <el-menu-item class="tab" index="/login">登录</el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: 'NarBar',
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .top-bar {
        margin-bottom: 20px;
        padding-left: 25%;
        padding-right: 25%;
        .tab {
            margin-left: 8%;
        }

    }
</style>
