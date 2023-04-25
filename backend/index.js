import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./db/db.js";
import router from "./routes/routes.js";
dotenv.config();
const app = express();
db();
app.use(express.json());
app.use(cors());
app.use("/", router);
const PORT = process.env.PORT || PORT;
app.listen(PORT, () => {
  console.log(`Server is listening at PORT ${PORT}`);
});
