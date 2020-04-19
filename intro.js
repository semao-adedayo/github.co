function myNumber(number){
    let arrayNumber = [];
    digit = "";
    for (i = 1; i <= number; i++) {
        if (i % 5 == 0 && i % 3 == 0 && i % 2 == 0) {
            digit = "yu-gi-oh"
        } else if (i % 5 == 0 && i % 3 == 0) {
            digit = "gi-oh"
        } else if (i % 5 == 0 && i % 2 == 0) {
            digit = "yu-oh"
        } else if (i % 2 == 0 && i % 3 == 0) {
            digit = "yu-gi"
        } else if (i % 2 == 0) {
            digit = "yu"
        } else if (i % 3 == 0) {
            digit = "gi"
        } else if (i % 5 == 0) {
            digit = "oh"
        } else {
            digit=i
        }
        arrayNumber.push(digit)
    }
    console.log(arrayNumber);
}
myNumber(100)