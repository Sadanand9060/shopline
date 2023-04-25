import mongoose from "mongoose";

const db = () => {
  mongoose
    .connect("mongodb://127.0.0.1")
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default db;
