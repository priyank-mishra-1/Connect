import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { Server } from "socket.io";
import http from "http";
import "dotenv/config";
import { router as authRouter } from "./routes/authRoute.js";
import router from "./routes/Route.js";
import SocketHandler from "./SocketHandler.js";
import path from "path";
import { fileURLToPath } from "url";
import { createProxyMiddleware } from "http-proxy-middleware";

const PORT = process.env.PORT || 6001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/", authRouter); // auth routes
app.use("/", router); // post routes

app.get("/", (req, res) => {
  res.send("hello");
});

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

io.on("connection", (socket) => {
  console.log(" User connected");

  // send it to socket handler
  SocketHandler(socket);
});

mongoose
  .connect("mongodb://localhost:27017/connect")
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((e) => console.log("Error in db connection"));
