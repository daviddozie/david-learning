let x = 7;
    y = 123;
let equation = y - x;
document.write(equation)
var z = 1
var str = "";
while (z <= equation) {
    if (z % 3 == 1 && z % 5 == 1) {
        document.write("Software Developer" + "<br>" );
    } else if (z % 3 == 1) {
        document.write("Software"  + "<br>");
    } else if (z % 5 == 1) {
        document.write("Developer"  + "<br>");
    } else {
        document.write("Notthing"  + "<br>");
    }
    document.write(z)
    z++
}