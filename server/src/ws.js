const { Server } = require("socket.io");

const eventTypes = {
  HELLO: "hello",
  NEW_MESSAGE: "newMessage",
  SEND_MESSAGE:"sendMessage",
};

module.exports = (httpServer) => {
  // io - это сервер-слушатель
  const io = new Server(httpServer, {
    // options
    cors: {
      origin: ["http://localhost:3000"],
    },
  });

  io.on("connection", (socket) => {
    // socket конкретный пользователь
    console.log("some user has connected");
    //socket.emit(eventTypes.HELLO, { data: "test" });

    socket.on(eventTypes.SEND_MESSAGE, (data) => {
      //console.log("someone say`s", data);
    //});

    // setTimeout(() => {
    //   socket.emit(eventTypes.NEW_MESSAGE, { body: "hello msg", _id: "1239" });
    // }, 2000);
    // socket.on(eventTypes.SEND_MESSAGE,(data)=>{
    //   //messageService.creatMsg(data);

      io.emit(eventTypes.NEW_MESSAGE,data);
      console.log(data);
    });
  });
};

// const { Server } = require("socket.io");

// const eventTypes = {
//   HELLO: "hello",
//   NEW_MESSAGE: 'newMessage',
//   SEND_MESSAGE: 'sendMessage',
// };

// module.exports = (httpServer) => {
//   // io это сервер-слушатель
//   const io = new Server(httpServer, {
//     // options
//     cors: {
//       origin: ["http://localhost:3000/"],
//     },
//   });

//   io.on("connection", (socket) => {
//     // socket это конкретный пользователь

//     console.log("some user has connected");

//     // отправить конкретному пользователю
//     // socket.emit()

//     socket.on(eventTypes.SEND_MESSAGE, (data) => {
//       // save to DB
//       // messageService.crearMsg(data);

//       // socket.broadcast()
//       io.emit(eventTypes.NEW_MESSAGE, data);

//       console.log(data);
//     });
//   });
// };
