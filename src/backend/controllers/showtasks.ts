const fs = require("fs");

export function showTasks(req, res): void {
	const list = fs.readFileSync("./src/todo/lista.json");

	res.writeHead(200, { "Content-Type": "application/json" });
	res.end(list);
}
