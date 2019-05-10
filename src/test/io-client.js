const io = require('socket.io-client');

const Socket = class {
    constructor(url, options = {}, ons = {}, emits = {}) {
        this.url = url;
        this.options = options;
        this.socket = null;
        this.ons = ons;
        this.emits = emits;
        this.promise = null;
        this.init();
    }
    init() {
        this.socket = io.connect(this.url, {
            reconnection: true,
            ...this.options
        });
        this.promise = new Promise((resolve, reject) => {
            this.socket.on('connect', () => {
                console.log(`socket.io to ${this.url} has created!`);
                for (let pro in this.ons) {
                    this.socket.on(pro, this.ons[pro]);
                }
                resolve();
            });
            this.socket.on('connect_error', error => {
                console.log(`socket.io occur a connection error`, error);
                reject();
            });
            this.socket.on('connect_timeout', timeout => {
                console.log(`socket.io connection timeout`, timeout);
                reject();
            });
        });
    }
    emit(eventName, ...args) {
        this.promise.then(
            () => {
                this.socket.emit(eventName, ...args);
            },
            () => {
                console.error('socket.io connection did not established!');
            }
        );
    }
};

function getInstance(...args) {
    return new Socket(...args);
}

const uri = 'http://localhost:9008'

const clients = Array(10).fill(null).map((v, idx) => {
    return getInstance(uri, {
        query: { _id: idx }
    })
})

clients[0].socket.on('test', (data, ck) => {
    console.log(data)
    ck('test ask')
})

