const path = require('path')
const { existsSync, mkdirSync } = require('fs')

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const dateFormat = require('dateformat');

const { user } = require('../global')

const SUBDIR = checkPath(path.join(__dirname, '__CACHE__'))

if(!user()) throw(new Error('用户尚未创建！'));

function checkPath(path) {
    !existsSync(path) && mkdirSync(path)
    return path
}

class Storage {
    constructor() {
        this.category = this.constructor.name.toUpperCase()
        this._user = user()
        this.initTime = Date.now()
        this.timestamp = dateFormat(this.initTime, 'yyyy-mm-dd')
        this.own = this._user._id
        this.subPath = checkPath(path.join(SUBDIR, this.own))
    }

    createDB(...args) {
        if(args.length>1) checkPath(path.join(...args.slice(0,-1)))
        return low(new FileSync(path.join(...args)))
    }
}

class ChatList extends Storage {
    constructor() {
        super()
        this.path = path.join(this.subPath, this.category)
        this.db = this.createDB(this.path)
        this.db.defaults({list:[]}).write()
    }
    push(data){
        this.db
            .get('list')
            .push(data)
            .write()
    }
    remove(_id){
        this.db
            .get('list')
            .remove(v=>v._id===_id)
            .write()
    }
    select(){
        return this.db.get('list').value()
    }
}

class Friends extends Storage {
    constructor() {
        super()
        this.path = path.join(this.subPath, this.category)
        this.db = this.createDB(this.path)
        this.db.defaults({list:[]}).write()
    }
    select(){
        return this.db.get('list').value()
    }
    update(data) {
        this.db
            .set('list',data)
            .write()
    }
}

class Rooms extends Storage {
    constructor() {
        super()
        this.path = path.join(this.subPath, this.category)
        this.db = this.createDB(this.path)
        this.db.defaults({list:[]}).write()
    }
    select(){
        return this.db.get('list').value()
    }
    update(data) {
        this.db
            .set('list',data)
            .write()
    }
}

class Message extends Storage {
    constructor() {
        super()
        this.dbMap = new Map()
        this.dir = checkPath(path.join(this.subPath, this.category))
    }

    append({info:{_id,type}, message}) {
        if (!this.dbMap.get(_id) || !this.freshDate()) {
            this.dbMap.set(_id, this.createDB(this.dir, _id,this.timestamp))
            this.dbMap.get(_id).defaults({
                message: [],
                info: { _id,type }
            }).write()
        }
        let _db = this.dbMap.get(_id)
        _db.message.push.apply(_db.message, message)
    }

    select({_id,time}) {
        
    }

    freshDate() {
        if (dateFormat(Date.now(), 'yyyy-mm-dd') === this.timestamp) return true
        this.timestamp = dateFormat(Date.now(), 'yyyy-mm-dd')
    }
}

module.exports = {
    message: new Message(),
    chatList:new ChatList(),
    friends:new Friends(),
    rooms:new Rooms()
}