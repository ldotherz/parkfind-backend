import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./db.js"; // PostgreSQL konekcija

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// GET svi parkinzi
app.get("/api/parking", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM parking");
    res.json(result.rows);
  } catch (err) {
    console.error("Greška kod SELECT-a:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// POST za update slobodnih mjesta po ID-u
app.post("/api/parking/:id", async (req, res) => {
  const id = req.params.id;
  const { slobodnaMjesta } = req.body;

  try {
    await pool.query(
      "UPDATE parking SET slobodnaMjesta = $1 WHERE id = $2",
      [slobodnaMjesta, id]
    );
    res.json({ success: true });
  } catch (err) {
    console.error("Greška kod UPDATE-a:", err);
    res.status(500).json({ error: "Database error" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Backend radi na portu ${PORT}`);
});
