import http from "http";
import Label from "./index.js";

const server = http.createServer((req, res) => {
	res.writeHead(200, {"Content-Type": "text/plain"});
    global.LM = Label(req);
    LM.addLabels({
        "it": {},
        "en": {}
    });
    LM.addLanguages("es", "jp", "cn");
	res.end(`Hello ${LM.renderLabel("welcome")}`);
});

server.listen(3000, "127.0.0.1");