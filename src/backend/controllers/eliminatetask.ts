const fs = require("fs");

export function eliminateTask(req, res): void {
	const task = req.query.name;

	const list = JSON.parse(fs.readFileSync("./src/todo/lista.json"));
	if (list[task] != undefined) {
		delete list[task];
		fs.writeFileSync("./src/todo/lista.json", JSON.stringify(list));
		res.end("Tarea eliminada");
	} else {
		res.end("Tarea no encontrada");
	}
}
