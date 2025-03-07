import express, { Request, Response } from "express";
import cors from "cors";
import bookRoutes from "./interfaces/http/routes/BookRoutes";
import categoryRoutes from "./interfaces/http/routes/CategoryRoutes";

const app = express();

app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.url}`);
  next();
});

app.use("/api", bookRoutes);
app.use("/api", categoryRoutes);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json(`Server is live.`);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}.`);
});
