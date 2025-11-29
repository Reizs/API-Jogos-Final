import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import jogosRoutes from "./src/routes/games.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// MUITO IMPORTANTE ↓↓↓
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// Arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Rotas da API
app.use("/api/jogos", jogosRoutes);

// Página inicial
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

export default app;
