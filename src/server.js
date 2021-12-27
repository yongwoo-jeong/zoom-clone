import http from "http";
import WebSocket from "ws";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const handleListen = () => console.log(`Listening on http://localhost:3000`);

// 익스프레스가 아닌 http 패키지를 이용해 http 서버 구성
const server = http.createServer(app);
// 파라미터는 필수가 아님
// http와 ws 모두 이용하기 위함
const wss = new WebSocket.Server({ server });

server.listen(3000, handleListen);
