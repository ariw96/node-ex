const fs = require("fs");
const path = require("path");

fs.readFile("start.txt", (err) => {
	if (err) throw err;
	console.log(data.toString());
});
fs.writeFile(path.join(__dirname, "reply.txt"), "nice to meet you", (err) => {
	if (err) throw err;
	console.log("write");
});
process.on("uncaughtException", (err) => {
	console.error(err);
	process.exit(1);
});
