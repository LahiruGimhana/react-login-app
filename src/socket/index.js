import io from 'socket.io-client';

const socket = io('http://127.0.0.1:3100');

let messageCallBack = null;


socket.on('connection', (soc) => {
    console.log("socket connected");
});

socket.on('event', function (data) {
    messageCallBack(data);
});

let registerCallBack = function (callback) {
    messageCallBack = callback;
}

//Registers the client on server
let register = function (myId) {
    socket.emit("reply", { event: "register", myId: myId });
}

let sendMessage = function (from, to, message) {
    // alert(from +'  '+ to +' '+  message);
    socket.emit("reply", { event: "send", from: from, to: to, content: message });
}

export { registerCallBack, sendMessage, register };



