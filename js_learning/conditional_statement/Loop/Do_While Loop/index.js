var str = "";
    p = 0;

do {
    /*result will change and that is because incrementing
     the value of "p" by one before concercinating it:
    */ 
     p++;
    str += p;
   
}
while (p < 10);
console.log(str)