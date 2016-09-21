//由于创建项目时候没通过新建项目的方法，而是用右键，新建文件改后缀的方式，使得找不到process
//我从另一个新建的文件中拷贝了头文件，经测试可以读入键盘输入的操作数
function draw(num:number) {

var a,b,c:number;
var spacestr, starstr, finalstr:string;

for(a = 0 ; a < num; a++) { //0-层数num 共num次打印 结尾换行
     spacestr = "";
     starstr = "";
     finalstr = "";//若不在循环内定义，每一行的串前会显示undefine

     for( b = 0; b < (num - a - 1); b++) { // num - a - 1 第a层对应空格数
         spacestr  = spacestr + " ";  //组合空格串
     }
     for( c = 0; c < (2*a+1); c++) {
         starstr = starstr + "*";  //组合星号串
     }
     
     finalstr = spacestr + starstr;
     console.log(finalstr);  //两串组合作为一行输出

  }
}


var x:string  = process.argv[2];  

draw(parseInt(x));