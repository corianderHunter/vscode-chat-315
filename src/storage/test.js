const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({list:[]}).write()

db.get('list').remove(v=>v.a===1).write()