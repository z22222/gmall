<template>
  <div>
        <header class="header">
            <!-- 头部的第一行 -->
            <div class="top">
                <div class="container">
                    <div class="loginList">
                        <p>尚品汇欢迎您！</p>
                        <p>
                            <span>请</span>
                            <a href="javascript:;" @click="$router.push('/login')">登录</a>
                            <a href="javascript:;" @click="$router.push('/register')" class="register">免费注册</a>
                        </p>
                    </div>
                    <div class="typeList">
                        <a href="###">我的订单</a>
                        <a href="###">我的购物车</a>
                        <a href="###">我的尚品汇</a>
                        <a href="###">尚品汇会员</a>
                        <a href="###">企业采购</a>
                        <a href="###">关注尚品汇</a>
                        <a href="###">合作招商</a>
                        <a href="###">商家后台</a>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <h1 class="logoArea">
                    <a class="logo" title="尚品汇" href="javascript:;" @click="$router.push('/home')" >
                        <img src="./images/logo.png" alt="">
                    </a>
                </h1>
                <div class="searchArea">
                    <form action="###" class="searchForm">
                        <input type="text" id="autocomplete" v-model="keyword" class="input-error input-xxlarge" />
                        <button @click="goSearch" class="sui-btn btn-xlarge btn-danger" type="button">搜索</button>
                    </form>
                </div>
            </div>
        </header>
  </div>
</template>

<script>
export default {
    name:'Header',
    data() {
        return {
            keyword:'',
        }
    },
    methods: {
        goSearch(){
            // 路由参数传递,对象形式
            this.$router.push({name:"search",params:{keyword:this.keyword||undefined},query:{k:this.keyword.toUpperCase()||undefined}},()=>{},()=>{})
        },
    },
}
</script>

<style lang="less">
    .header {
        &>.top {
            background-color: #eaeaea;
            height: 30px;
            line-height: 30px;

            .container {
                width: 1200px;
                margin: 0 auto;
                overflow: hidden;

                .loginList {
                    float: left;

                    p {
                        float: left;
                        margin-right: 10px;

                        .register {
                            border-left: 1px solid #b3aeae;
                            padding: 0 5px;
                            margin-left: 5px;
                        }
                    }
                }

                .typeList {
                    float: right;

                    a {
                        padding: 0 10px;

                        &+a {
                            border-left: 1px solid #b3aeae;
                        }
                    }

                }

            }
        }

        &>.bottom {
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;

            .logoArea {
                float: left;

                .logo {
                    img {
                        width: 175px;
                        margin: 25px 45px;
                    }
                }
            }

            .searchArea {
                float: right;
                margin-top: 35px;

                .searchForm {
                    overflow: hidden;

                    input {
                        box-sizing: border-box;
                        width: 490px;
                        height: 32px;
                        padding: 0px 4px;
                        border: 2px solid #ea4a36;
                        float: left;

                        &:focus {
                            outline: none;
                        }
                    }

                    button {
                        height: 32px;
                        width: 68px;
                        background-color: #ea4a36;
                        border: none;
                        color: #fff;
                        float: left;
                        cursor: pointer;

                        &:focus {
                            outline: none;
                        }
                    }
                }
            }
        }
    }

</style>