<template>
    <div class="chat-list middle on">
        <div class="wx_search">
            <input
                type="text"
                placeholder="搜索"
            >
            <button>+</button>
        </div>
        <div class="office_text">
            <ul class="user_list">
                <li class="user_active">
                    <div class="user_head">
                        <img src="images/head/15.jpg">
                    </div>
                    <div class="user_text">
                        <p class="user_name">早安无恙</p>
                        <p class="user_message">我是傻逼！，金少凯牛逼！</p>
                    </div>
                    <div class="user_time">下午 2：54</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        list(){
            return this.$store.state.chatList
        }
    },
    watch: {
        list(v){
            console.log(v)
        }
    },
};
</script>

<style lang="scss" scoped>
</style>