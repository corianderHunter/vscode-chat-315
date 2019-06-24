import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    friends:[],
    rooms:[],
    chatList:[],
    windowMsgs:[],
    user:{},
    chatting:{},
    messages:[]
  },
  mutations: {
    setMessage(state,value){
      state.messages = value
    },
    pushMessage(state,value){
      state.messages.push(value)
    },
    setChatting(state,value){
      state.chatting = value
    },
    updateFriends(state,value){
      state.friends = value
    },
    updateRooms(state,value){
      state.rooms = value
    },
    pushChatList(state,value){
      state.chatList.push(value)
    },
    latestMsg(state,{_id,msg}){
      state.chatList = state.chatList.map(v=>{
        if(v._id===_id) v.latest = msg
        return v
      })
    },
    setChatList(state,value){
      state.chatList = value
    },
    setWindowMsgs(state,msgs){
      state.windowMsgs = msgs
    },
    pushWindowMsgs(state,msgs){
        state.windowMsgs.push.apply(state.windowMsgs,msgs)
    },
    setUser(state,value){
      state.user = value
    }
  },
  actions: {
    pushMessage({commit},value){
      commit('pushMessage',value)
    },
    setMessage({commit},value){
      commit('setMessage',value)
    },
    setChatting({commit},value){
      commit('setChatting',value)
    },
    updateFriends({commit},value){
      commit('updateFriends',value)
    },
    updateRooms({commit},value){
      commit('updateRooms',value)
    },
    pushChatList({commit},value){
      commit('pushChatList',value)
    },
    latestMsg({commit},value){
      commit('latestMsg',value)
    },
    setChatList({commit},value){
      commit('setChatList',value)
    },
    setWindowMsgs({commit},msgs){
      commit('setWindowMsgs',msgs)
    },
    pushWindowMsgs({commit},msgs){
      commit('pushWindowMsgs',msgs)
    },
    setUser({commit},value){
      commit('setUser',value)
    }
  }
})
