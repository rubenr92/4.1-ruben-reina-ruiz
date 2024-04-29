const fs = require("fs");

export function createTask(req, res): void {
	const task = req.query.name;

	const list = JSON.parse(fs.readFileSync("./src/todo/lista.json"));
	if (list[task] == undefined && task != undefined) {
		list[task] = true;
		fs.writeFileSync("./src/todo/lista.json", JSON.stringify(list));
		res.writeHead(201);
		res.end("Tarea creada");
	} else {
		res.writeHead(400);
		res.end("Error al crear la tarea");
	}
}
