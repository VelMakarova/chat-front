import { io } from 'socket.io-client';

const socket = io('http://127.0.0.1:3010');
console.log(socket.active && 'connected');

export default socket;
