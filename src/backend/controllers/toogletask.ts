const fs = require("fs");

export function toogleTask(req, res): void {
	const task = req.query.name;

	const list = JSON.parse(fs.readFileSync("./src/todo/lista.json"));
	const toogle = list[task];
	if (toogle != undefined) {
		list[task] = !toogle;
		fs.writeFileSync("./src/todo/lista.json", JSON.stringify(list));
		res.end("Lista actualizada");
	} else {
		res.end("La tarea no existe");
	}
}
