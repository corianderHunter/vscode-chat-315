<template>
    <div class="friend-list middle">
        <div class="wx_search">
            <input type="text" placeholder="搜索">
            <button>+</button>
        </div>
        <div class="office_text">
            <ul class="friends_list">
                <li>
                    <p>新的朋友</p>
                    <div class="friends_box">
                        <div class="user_head">
                            <img src="images/head/1.jpg">
                        </div>
                        <div class="friends_text">
                            <p class="user_name">新的朋友</p>
                        </div>
                    </div>
                </li>
                <li>
                    <p>房间</p>
                    <div class="friends_box" >
                        <div class="user_head">
                            <img src="images/head/2.jpg">
                        </div>
                        <div class="friends_text">
                            <p class="user_name">公众号</p>
                        </div>
                    </div>
                </li>
                <li>
                    <p>好友</p>
                    <div class="friends_box" v-for="item in friends" :key="item._id">
                        <div class="user_head">
                            <img src="images/head/5.jpg">
                        </div>
                        <div class="friends_text">
                            <p class="user_name">{{item.name}}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        friends(){
            return this.$store.state.friends
        },
        rooms(){
            return this.$store.state.rooms
        },
        list(){
            return this.friends.concat(this.rooms)
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