<template>
    <div>
        <div v-if="target._id">
            <p>张三</p>
            <button class="addChatList">发消息</button>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            target:{
                type:Object
            }
        },
        methods: {
            addChatList(){
                this.$store.dispatch('')
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>