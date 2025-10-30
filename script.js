//Ejercicio 03
function esPar(num) {
    return num%2===0;
}
console.log("Ejercicio03")
console.log(esPar(4));
console.log(esPar(7));
console.log(esPar(0));
console.log(esPar(-2));

//Ejercicio04
function areaRectangulo(base, altura) {
    return base*altura;
}
console.log("Ejercicio04")
console.log(areaRectangulo(5, 3));
console.log(areaRectangulo(10, 2));

//Ejercicio05
function esMultiplo(a, b) {
    return a%b===0;
}
console.log("Ejercicio05")
console.log(esMultiplo(10, 5));
console.log(esMultiplo(7, 3));

//Ejercicio06
function mayorDeTres(a, b, c) {
    return Math.max(a, b, c);
}
console.log("Ejercicio06")
console.log(mayorDeTres(1, 5, 3));
console.log(mayorDeTres(10, 2, 8));

//Ejercicio07
const promedio = function(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}
console.log("Ejercicio07")
console.log(promedio(10, 20, 30).toFixed(2));
