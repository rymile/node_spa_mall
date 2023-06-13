const express = require("express");
const app = express();
const port = 3000;
const goodsRouter = require("./routes/goods.js");
const cartsRouter = require("./routes/carts.js");
const connect = require("./schemas");
connect();

//모든 코드에서 body parser를 등록해서 body데이터를 쓰겠다.
app.use(express.json());
// api호출하는 부분
app.use("/api", goodsRouter, cartsRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸습니다.");
});
