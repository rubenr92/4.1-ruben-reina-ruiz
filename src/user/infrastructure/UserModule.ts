import User from "../domain/entities/User";

const user = new User("Ruben");
const username = user.toPrimitive();

const usuarios = { username: "123" };

export default usuarios;
