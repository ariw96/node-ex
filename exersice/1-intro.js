const amount = 9;

if (amount < 10) {
	console.log("sm");
} else {
	console.log("ln");
}
//global no window
//__dirname - path to current di
//__filename
//process -info about env where the program is being executed
console.log(__dirname);
setInterval(() => {
	console.log("hello");
}, 1000);
