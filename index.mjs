import http from "http";
import Label from "./manager/Label.js";

const server = http.createServer((req, res) => {
	res.writeHead(200, {"Content-Type": "text/plain"});
	global.Lang = req.headers["accept-language"].slice(0, 2);
	global.LM = Label;
	res.end(`Hello ${LM.getLabel("welcome")}`);
});

server.listen(3000, "127.0.0.1");