import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import jogosRoutes from "./routes/games.js"; // ajuste conforme seu nome real

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// public
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/jogos", jogosRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Rodando na porta", port));
