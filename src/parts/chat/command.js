const webview = require('../../webview')
const {user} = require('../../global')
const { checkUser } = require('../../auth')
const { roomList,friendsList } = require('../../service')

function checkResource({friends,rooms}){
    const promises = []
    const _rooms = rooms.select()
    promises.push(_rooms.length?_rooms:roomList().then(data=>{
        rooms.update(data)
    }))
    const _friends = friends.select()
        promises.push(_friends.length?_friends:friendsList().then(data=>{
            friends.update(data)
        }))
    return Promise.all(promises)
}

module.exports = {
    'extension.chat315': async () => {
        await checkUser()
        const {friends,rooms,chatList} = require('../../storage')
        await checkResource({friends,rooms})
        const _webview = await webview.chart()
        _webview.postMessage({
            action:'setUser',
            value:user()
        })
        _webview.postMessage({
            action:'updateRooms',
            value:rooms.select()
        })
        _webview.postMessage({
            action:'updateFriends',
            value:friends.select()
        })
        _webview.postMessage({
            action:'setChatList',
            value:chatList.select()
        })
    }
}
