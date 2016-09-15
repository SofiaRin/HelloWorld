import readline = require("readline")

function draw(num:number) {
//var i :number = num - 1
var a,b,c:number
for(a = 0 ; a < num; a++) { //0-层数num 共num次打印 结尾换行

     for( b = 0; b < num - a - 1; b++) { // num - a - 1 第a层对应空格数
         console.log(" ")
     }
     for( c = 0; c < 2*a+1; c++) {
         console.log("*")
         console.log("\n")
     }
  }
}
console.log("How many layers should be drawn?")
var x:number  =  

draw(x)