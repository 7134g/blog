<template>
    <el-menu class="top-bar" mode="horizontal" router>
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/article">最新文章</el-menu-item>
        <el-menu-item index="/classify">分类</el-menu-item>
        <el-menu-item index="/login">登录</el-menu-item>
        <el-menu-item index="/about">关于网站</el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: 'Home',
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .top-bar {
        margin-bottom: 20px;
    }
</style>
