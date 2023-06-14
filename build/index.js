"use strict";
const __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // middleware que transforma la req.body a un json. La info que envio a las endpoint de mi API
const PORT = 3000;
app.get("/ping", (_req, res) => {
  console.log("someone ping here!!");
  res.send("pong");
});
// creamos un endpoint llamado /ping
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// nuestra aplicacion esta escuchando en el puerto 3000
