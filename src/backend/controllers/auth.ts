const users = { Ruben: "123" };

export function authenticate(req, res, next) {
	const username = req.query.username;
	const pass = req.query.pass;

	if (users[username] == pass && pass != undefined) {
		next();
	} else {
		res.writeHead(401);
		res.end();
	}
}
