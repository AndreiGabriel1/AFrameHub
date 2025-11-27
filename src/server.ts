import express from "express";
import framesRouter from "./routes/frames";

const app = express();

app.use(express.json());

// UI static din src/static
app.use(express.static("src/static"));

// Servim și galeria de imagini existentă
app.use("/gallery", express.static("gallery"));
app.use("/public", express.static("public"));

// API frames sub /api/frames
app.use("/api/frames", framesRouter);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`[AFrameHub] listening on http://localhost:${PORT}`);
});
