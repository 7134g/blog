<template>
    <div id="home_page">
        <div class="go_to_Article">

            <button @click="goArticles()" :class="{'login':BottonStaStatus, 'login active': BottonMidStatus, 'login active verity': BottonFinStatus}">
                <p>LOGIN</p>
                <div class="loading ">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <!-- 使用svg绘制 -->
                <svg class='checkmark' width='30px' height='30px' stroke='white' fill='none'>
                    <polyline points='2,10 12,18 28,2'></polyline>
                </svg>
            </button>
            <div v-show="message" class="loading_msg">
                <p>账号或密码错误请重试</p>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                BottonStaStatus: true,
                BottonMidStatus: false,
                BottonFinStatus: false,
            };
        },
        methods: {
            goArticles: function(){
                this.BottonStaStatus = false
                this.BottonMidStatus = true
                setTimeout(
                    () => {
                        this.BottonMidStatus = false
                        this.BottonFinStatus = true
                    }, 500
                )

            }
        }
    }
</script>

<style lang="stylus"  scoped>
    .go_to_Article{
        margin-top 300px;
        text-align:center;
    }

    /* button style start */
    .login{
        position: relative;
        border: none;
        outline: none;

        width: 12rem;
        height: 5rem;
        border-radius: 5rem;
        background-color: #000;
        color: #fff;
        font-weight: bold;
        font-size: 1.5rem;
        box-shadow: 0 8px 28px black;
        cursor: pointer;

        transition: .5s;
    }

    .active.login{
        width: 5rem;
        color:transparent;
    }

    /* button style end */

    /* loading style start */
    .loading{
        opacity: 0;
        transition: .5s;
    }

    .active .loading{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);

        width: 70%;
        height: 40%;

        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        opacity: 1;
    }

    .active .loading div{
        width: .3rem;
        height: .3rem;
        border-radius: 50%;
        background-color: #fff;

        animation: .9s loading ease-in-out infinite alternate;
    }

    @keyframes loading{
        to{
            transform: translate(0, -1rem);
        }
    }

    .active .loading div:nth-child(2){
        animation-delay: .2s;
    }

    .active .loading div:nth-child(3){
        animation-delay: .4s;
    }

    .verity .loading{
        opacity: 0;
    }
    /* loading style end */

    /* checkmark style start */
    .checkmark{
        position: absolute;
        left: 50%;
        top: 56%;
        transform: translate(-50%,-50%);
        stroke-width: 2px;
        /* 利用stroke的虚线和偏移值达到加载的动画效果 */
        stroke-dasharray: 36px;
        stroke-dashoffset: 36px;
    }

    .verity .checkmark{
        animation: .6s show forwards;
        animation-delay: .4s;
    }

    @keyframes show{
        to{
            stroke-dashoffset: 0;
        }
    }

    /* checkmark style end */


    .loading_window {
        position: absolute;
        height: 100%;
        z-index: 9999;
    }

    .thisTimeLoading {
        float: left;
        width: 100%;
        top: 5rem;
    }

    .thisTimeLoading h3 {
        text-align: center;
        font-size: 50px;
    }

    .loading_local {
        position: fixed;
        top: 5rem;
        left: 5%;
        width: 90%;
    }

    .loading_local h3 {
        text-align: center;
        font-size: 50px;
    }

    .loading_local input {
        width: 40%;
        margin-left: 30%;
        margin-top: 1%;
        height: 4rem;
        border: 1px solid #b9b9b9;
        border-radius: 2rem;
        box-shadow: 0 8px 28px gainsboro;
        text-align: center;
        font-size: 20px;
    }


    .loading_msg{
        position: fixed;
        margin-top: 10%;
    }


    .loading_msg p {
        font-size: 15px;
        color: red;
        text-align: center;
    }
</style>
