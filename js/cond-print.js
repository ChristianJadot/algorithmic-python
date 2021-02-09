nbOfCopies = 35;
finalPrice = 0;

for (var count = 1; count <= nbOfCopies; count++ ){
    if (count <= 10){
        finalPrice = finalPrice + 0.12;
    } else if (count <= 30) {
        finalPrice = finalPrice + 0.11;
    } else {
        finalPrice += 0.10;
    }
}
console.log(finalPrice);
