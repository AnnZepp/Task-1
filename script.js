//1
function nums (a, b) {
    if (a === b) {
        return 'Equal';
    }else{
        return 'Is not equal';
    }
}

console.log (nums (17, 17));
console.log (nums (7, 4));



//2
function convertToC(fahrenheit) {
   if (typeof fahrenheit === "number") {
    return (fahrenheit - 32) / 1.8
   }else{
    return false;
   }
   }
   
console.log (convertToC(90));
console.log (convertToC(110));



//3
function num (a, b, operation) {
    if (operation === "+") {
        return a + b;
    }
    if (operation === "-") {
        return a - b;
    }
    if (operation === "*") {
        return a * b;
    }
    if (operation === "/") {
        return a / b;
    }
    if (typeof a != "number" || b != "number") {
        return false;
    }
}

console.log (num(15, 12, "+"));
console.log (num(15, 12, "-"));
console.log (num(15, 12, "*"));
console.log (num(15, 12, "/"));
console.log (num('Django', 12));