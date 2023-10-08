const productList  = [
    {
        name: "cup",
        image: "https://www.pexels.com/photo/close-up-photo-of-white-teacup-1566308/",
        price: '$4000',
    
    },

    {
        name: "shirt",
        image: "https://www.dreamstime.com/stock-photo-background-shirts-hanging-hanger-image75786784",
        price: '$5000',
    },

    {
        name: "watch",
        image: "https://watchlocker.ng/wp-content/uploads/2022/09/MTP-VD200GL-1BUDF.jpg",
        price: '$7000', 
    }
]

var arr = [0, 1, 2, 3];

// Loop through this array and multiply with value or element
// within this array by 2 and write the result into the document
arr.forEach(function(number) {
    var x = 2;
    document.write(number = number * x + "<br><br>");
});


//forEach loop
productList.forEach(product => {
    document.write(product.name + " with " + product.image + " is sold for " + product.price + "<br><br>")
})

//for loop:
for(let i = 0; i < productList.length; i++) {
    document.write(productList[i].name + " with " + productList[i].image + " is sold for " + productList[i].price
     + "<br><br>");
};
    
//forIn loop:
for (i in productList) {
    document.write(productList[i].name + " with " + productList[i].image + " is sold for " + productList[i].price
    + "<br><br>")
}

//doWhile loop:
var n = 0;
do {
    n++
}
while (n < productList);
document.write(productList[n].name + " with " + productList[n].image + " is sold for " + productList[n].price
+ "<br><br>")

//while loop:
var p = 0;
while (p < productList)
p++
document.write(productList[p].name + " with " + productList[p].image + " is sold for " + productList[p].price);

