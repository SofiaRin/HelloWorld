import readline = require("readline")

function draw(num:number) {
console.log("How many layers should be drawn?")
var i:number = num - 1
for(var a:number = 0; a < num; a++) {

    for(var b:number = 0; b < num - i -1; b++) {
        console.log(" ")
    }
    for(var c:number = 0; c < 2*i-1; c++)
        console.log("*")
        console.log("\n")

}

}
var x:number  =  

draw(x)