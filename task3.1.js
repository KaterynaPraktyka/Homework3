
// 1 //
let student = {
    "name": "ivan",
    "surname": "petrenko",
    "rate": "good"
}

console.log(student.name);

let string = JSON.stringify(student);
student.rate = "ok";
console.log(student.rate);


// 2 //
let randomstring = require("randomstring");
randomstring.generate(20);

let randomstring = require("randomstring");
Math.random();

//3//

let fs = require('fs');
let fileName = 'open.txt';
fs.open(fileName, 'w', function (err, file) {
    if (err) throw err;
    fs.appendFile(fileName, 'hello world', function () {
        fs.writeFile(fileName, 'hello world2', function () {
            fs.readFile(fileName, function (err, buf) {
                console.log(buf.toString());
            });
        });
    })
});