import express from "express"; // ESModules son imports and exports
import diaryRouter from "./routes/diaries";

const app = express();
app.use(express.json()); // middleware que transforma la req.body a un json. La info que envio a las endpoint de mi API

const PORT = 3000;

app.get("/ping", (_req, res) => {
  console.log("someone ping here!!");
  res.send("pong");
});
// creamos un endpoint llamado /ping

app.use("/api/diaries", diaryRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// nuestra aplicacion esta escuchando en el puerto 3000
