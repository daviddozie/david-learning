var n = 1;
var str = "";
while ( n < 115) {
    if(n % 3 == 0 && n % 5 == 0) {
        console.log('software developer')
    } else if(n % 3 == 0) {
        //print
    } else if(n % 5 == 0) {
        // print
    } else {
        document.write('nothing')
    }
    document.write(n)
    n++
}
console.log(str);