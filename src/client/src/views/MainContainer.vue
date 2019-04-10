<template>
    <div id="app">
        <div class="vschat">
            <Sidestrip></Sidestrip>
            <ChatList></ChatList>
            <FriendList></FriendList>
            <PluginList></PluginList>
            <ChatWindow></ChatWindow>
        </div>
    </div>
</template>

<script>
import ChatList from "./ChatList.vue";
import Sidestrip from "./Sidestrip.vue";
import FriendList from "./FriendList.vue";
import PluginList from "./PluginList.vue";
import ChatWindow from "./ChatWindow.vue";
export default {
    components: { ChatList, Sidestrip, FriendList, PluginList, ChatWindow }
};
</script>

<style lang="scss" scoped>
</style>