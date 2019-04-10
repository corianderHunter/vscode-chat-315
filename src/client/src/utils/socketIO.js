import { Manager } from 'socket.io-client';

export default function(token) {
    const socketIo = new Manager(process.env.SERVER_URL, {
        query: {
            token
        }
    });
}

const socketIO = io(process.env.SERVER_URL);

//auth middleware
socketIO.use((socket, next) => {
    console.log(socket);
    next();
});

socketIO.on('connection', () => {
    console.log('socketIO connection has established!');
});
