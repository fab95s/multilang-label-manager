import http from "http";
import Label from "./manager/Label.js";

const server = http.createServer((req, res) => {
	res.writeHead(200, {"Content-Type": "text/plain"});
	global.LM = Label(req);
	res.end(`Hello ${LM.getLabel("welcome")}`);
});

server.listen(3000, "127.0.0.1");