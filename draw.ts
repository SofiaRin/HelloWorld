import readline = require("readline")

function draw(num:number) {
//var i :number = num - 1
var a :number = 1;
var b :number = 1;
var c :number = 1;
console.log("How many layers should be drawn?")

for(a; a <= num; a++) {

    for( b; b <= num - a; b++) {
        console.log(" ")
    }
    for( c; c < 2*a-1; c++)
        console.log("*")
        console.log("\n")

}

}
var x:number  =  

draw(x)