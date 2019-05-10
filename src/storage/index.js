const path = require('path')
const { existsSync, mkdirSync } = require('fs')

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const dateFormat = require('dateformat');

const { user } = require('../global')

const SUBDIR = path.join(__dirname, '__CACHE__')

class Storage {
    constructor() {
        this.category = this.constructor.name.toUpperCase()
        this._user = user()
        this.initTime = Date.now()
        this.timestamp = dateFormat(this.initTime, 'yyyy-mm-dd')
        this.own = this._user._id
        this.subPath = path.join(SUBDIR, this.own)
    }

    createDB(_path, target = '') {
        return low(new FileSync(path.join(_path, target)))
    }

    checkPath(path) {
        !existsSync(path) && mkdirSync(path)
        return path
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
}

class Friends extends Storage {
    constructor() {
        super()
        this.path = path.join(this.subPath, this.category)
        this.db = this.createDB(this.path)
        this.db.defaults({list:[]}).write()
    }
    update(data) {
        this.db.defaults({list:[]}).write()
    }
}

class Rooms extends Storage {
    constructor() {
        super()
        this.path = path.join(this.subPath, this.category)
        this.db = this.createDB(this.path)
        this.db.defaults({list:[]}).write()
    }
    update(data) {
        
    }
}

class Message extends Storage {
    constructor() {
        super()
        this.dbMap = new Map()
        this.dir = path.join(this.subPath, this.category)
        this.path = this.checkPath(path.join(this.dir, this.timestamp))
    }

    append(info, message) {
        const { _id } = info
        if (!this.dbMap.get(_id) || !this.check()) {
            this.dbMap.set(_id, this.createDB(this.path, _id))
            this.dbMap.get(_id).defaults({
                message: [],
                info: { _id }
            }).write()
        }
        let _db = this.dbMap.get(_id)
        _db.message.push.apply(_db.message, message)
    }

    select(info) {

    }

    check() {
        if (dateFormat(Date.now(), 'yyyy-mm-dd') === this.timestamp) return true
        this.timestamp = dateFormat(Date.now(), 'yyyy-mm-dd')
        this.path = this.checkPath(path.join(this.dir, this.timestamp))
    }
}
