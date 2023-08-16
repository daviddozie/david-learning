const heading = document.querySelectorAll(".heading");
/* the querySelector can be uesd,getElementById or Byclass can be used
*/
console.dir(heading[0]);
heading[0].innerHTML = "string";
for (n in heading) {
    heading[n].style.color = "red";
}
