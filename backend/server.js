const { createServer } = require("http");
// const { console } = require("inspector");
const { Server } = require('socket.io');

const httpServer = createServer();
const io = new Server(httpServer,{
  cors:{
    origin: "http://localhost:5173",
  }
});


let playerScore = []

io.on("connection",(socket)=>{
  socket.on('scores',(scores)=>{
    playerScore.push({...scores, id: socket.id})
    console.log(playerScore)
    socket.emit("playerScore", playerScore)

    setInterval(()=>{
      socket.emit("playerScore", playerScore)
    }, 5000)
  })
})


httpServer.listen(3000,()=>{
  console.log("WebSocket is connected")
})

