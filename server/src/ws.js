const { Server } = require("socket.io");

module.exports = (httpServer) => {
  // io - это сервер-слушатель
  const io = new Server(httpServer, {
    // options
  });

  io.on("connection", (socket) => {
    // socket конкретный пользователь
    console.log("some user has connected");

    socket.on('Hello',()=>{
      console.log('someone say`s hello!');
    })
  });
};
