import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import router from "./route/contactRoute.js";

const app = express();

//Creating the middleware
app.use(express.json());
app.use(cors());

app.use("/", router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  if (err) console.log("Error in server setup");
  console.log("Server starting on Port:", PORT);
});
