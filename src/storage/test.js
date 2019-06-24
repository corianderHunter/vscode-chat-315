const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('test/db.json')
const db = low(adapter)

db.defaults({list:[]}).write()

// const list = db.get('list').value()

const list = db.set('list',[]).write()

console.log(list)


function a({info:{a,b},data}){
    console.log(a,b,data)
}

a({
    info:{a:1,b:2},
    data:[1,23,4]
})