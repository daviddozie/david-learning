let hour = new Date().getHours();
console.log(hour);
if (hour < 10 ) {
    console.log("Good morning");
} else if (hour < 14
     ) {
    console.log("Good afternoon");
} else if (hour < 10 ) {
    console.log("Good evenning");
} else {
    console.log("Good night");
}