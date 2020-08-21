<template>
    <div>
        <!-- 在使用表单验证时，需要注意：
        1.必须给表单对象绑定一个对象：:model="loginForm"，而且不能写成：v-model="loginForm"
        2.所有的子控件的绑定对象必须是表单对象的内部对象，比如：v-model="loginForm.username"，否则总是验证失败
         -->
        <el-form class="login-container" :model="loginForm" ref="loginForm"
                 :rules="rules" label-position="left">
            <h3 class="login-title">myblog</h3>
            <el-form-item prop="username">
                <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
            </el-form-item>
            <el-checkbox class="login-remember" v-model="checked">记住密码</el-checkbox>
            <el-form-item>
                <el-button class="login-button" type="primary" @click="submitClick('loginForm')">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        name: "Login",
        data() {
            return {
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur'}
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur'}
                    ]
                },
                loginForm: {
                    username: "",
                    password: ""
                },
                checked: true
            };
        },
        methods: {
            submitClick(formName) {
                // 表单验证
                this.$refs[formName].validate(valid => {
                    if(valid) {
                        alert('提交成功！')
                    } else {
                        console.log("error submit！")
                        return false
                    }
                })
            }
        }
    };
</script>
<style lang="stylus" scoped>
    .login-container
        width 350px
        margin 130px auto
        background-clip padding-box
        padding 35px 35px 15px 35px
        border 1px solid #eaeaea
        border-radius 15px
        box-shadow 0 0 25px #cac6c6
        background #fff
        .login-title
            margin 0 auto 40px auto
            text-align center
            color #505458
        .login-remember
            margin 0 0 35px 0
            text-align center
        .login-button
            width 100%
</style>
