var str = "";
    d = 0;
for (var d = 0; d < 9; d++) {
    if (d === 5) {
        continue;
    }
    str += d;
}
console.log(str);
