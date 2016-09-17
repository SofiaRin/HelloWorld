function draw(num) {
    //var i :number = num - 1
    var a, b, c;
    var spacestr, starstr, finalstr;
    for (a = 0; a < num; a++) {
        spacestr = "";
        starstr = "";
        finalstr = "";
        for (b = 0; b < (num - a - 1); b++) {
            spacestr = spacestr + " "; //组合空格串
        }
        for (c = 0; c < (2 * a + 1); c++) {
            starstr = starstr + "*"; //组合星号串
        }
        finalstr = spacestr + starstr;
        console.log(finalstr); //两串组合作为一行输出
    }
}
//console.log("How many layers should be drawn?")
var x = process.argv[2];
draw(+x);
