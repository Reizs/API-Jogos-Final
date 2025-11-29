import express from "express";
import cors from "cors";
import jogosRoutes from "./routes/jogosRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();


app.use(cors());
app.use(express.json());


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, "..", "public")));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});


app.use("/jogos", jogosRoutes);

export default app;
