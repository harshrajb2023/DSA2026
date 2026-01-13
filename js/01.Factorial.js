const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/);

const n = Number(input[0]);

let fact = 1;
for (let i = 1; i <= n; i++) {
  fact = fact * i;
}

console.log(fact);

//enter no. from key board : 6 
// enter key press
// ctrl+z
//enter
// then output: 720