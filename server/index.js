import express from "express";
import cors from "cors";    

const app = express();
const PORT = 4000;

// app.use(cors(
//   {
//     origin: [
//     'http://localhost:3000',
//     'http://localhost:5173',
//     'http://localhost:5174'
//   ],
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   credentials: true,
// }
// ));
app.use(express.json());

// a simple route
app.get("/server/api/data", (req, res) => {
  res.json({ message: "Welcome to Aadat Khata Server." });
});

app.listen(PORT,"0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});