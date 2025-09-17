import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

// Root route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript + Express!");
});

// Another sample route
app.get("/api/greet", (req: Request, res: Response) => {
  res.json({ message: "Welcome to the TypeScript API 🚀" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
