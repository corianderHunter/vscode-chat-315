const io = require('socket.io-client');
const _ = require('lodash');

let _socket;

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
    on(events) {
        this.promise.then(() => {
            const _events = Array.isArray(events) ? events : [events]
            _events.forEach(v => {
                if (typeof v !== 'function') return;
                this.socket.on(v.name, v)
            })
        }, () => {
            console.error('socket.io connection did not established!');
        })
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

const channels = {
    ptpMessage(data) {

    },
    roomMessage(data) {

    },
}

function getInstance(...args) {
    _socket = new Socket(...args);
    _socket.on(_.values(channels))
    return _socket
}

module.exports = function (...args) {
    return _socket || getInstance(...args)
}
