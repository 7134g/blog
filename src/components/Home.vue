<template>
    <div id="home_page">

        <el-row>
            <el-button type="primary" index="/articles" round>go</el-button>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style lang="stylus"  scoped>
    #home_page
        margin-top 300px;
        margin-left 50%
        width 50%
</style>
