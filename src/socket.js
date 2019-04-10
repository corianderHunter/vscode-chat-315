var io = require('socket.io-client');

const Socket = class {
    constructor(url, options = {}, on = {}, emit = {}) {
        this.url = url
        this.options = options
        this.socket = null
        this.on = on
        this.emit = emit
        this.init()
    }
    init() {
        this.socket = io.connect(this.url, {
            reconnection: true,
            ...this.options
        })
        this.socket.on('connect', () => {
            console.log(`socket.io to ${this.url} has created!`)
            for (let pro in this.on) {
                this.socket.on(pro, this.on[pro])
            }
        })

        this.socket.on('connect_error', (error) => {
            console.log(`socket.io occur a connection error`, error)
        })

        this.socket.on('connect_timeout', (timeout) => {
            console.log(`socket.io connection timeout`, timeout)
        })
    }
}

let socket;

module.exports = function getInstance(...args) {
    return socket || (socket = new Socket(...args).socket)
}