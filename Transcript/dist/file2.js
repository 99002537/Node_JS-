"use strict";
exports.__esModule = true;
var file1_1 = require("./file1");
console.log(file1_1.greeting);
file1_1.greet();
var prod = new file1_1.Product('Laptop', 200000);
prod.getinfo();
//import * as trial from "./file1";
//console.log(trial.greeting);
//trial.greet(); 
//var prod=new trial.Product('laptop',20000);
//prod.getinfo();
