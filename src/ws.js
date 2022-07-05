const { Server } = require("socket.io");

module.exports = (httpServer) => {
  const io = new Server(httpServer, {});

  io.on("connection", () => {
    console.log("some user has connected");
  });
};
