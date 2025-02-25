import express, { Request, Response } from "express";
import bookRoutes from "./interfaces/http/routes/BookRoutes";

const app = express();

app.use(express.json());

app.use("/api", bookRoutes);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json(`Server is live.`);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}.`);
});
