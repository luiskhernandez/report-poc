const io = require("socket.io")(3001, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
})
io.on("connection", socket => {
  socket.on('mouseChange', data => {
    console.log("data", data)
    socket.broadcast.emit('otherUserMouseChange', data);
  } )
  // socket.on("get-document", async documentId => {
  //   const document = await findOrCreateDocument(documentId)
  //   socket.join(documentId)
  //   socket.emit("load-document", document.data)

  //   socket.on("send-changes", delta => {
  //     socket.broadcast.to(documentId).emit("receive-changes", delta)
  //   })

  //   socket.on("save-document", async data => {
  //     await Document.findByIdAndUpdate(documentId, { data })
  //   })
  // })
})
