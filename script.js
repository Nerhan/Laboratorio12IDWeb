// Ejercicio03
function ejercicio03 () {
    let num = parseInt(prompt("Ingresa un numero: "));

    function esPar(num) {
        return num%2===0;
    }
    alert(`El número ${num} es par: ${esPar(num)}`);
}
ejercicio03();

// Ejercicio 04
function ejercicio04() {
    let base = parseInt(prompt("Base del rectangulo: "));
    let altura = parseInt(prompt("Altura del rectangulo: "));

    function areaRectangulo(b, h) {
        return b*h;
    }
    alert(`Área del rectángulo: ${areaRectangulo(base, altura)}`);
}
ejercicio04();

// Ejercicio 05
function ejercicio05() {
    let a = parseInt(prompt("Numero a: "));
    let b = parseInt(prompt("Numero b: "));

    function esMultiplo(x, y) {
        return y!==0 && x%y===0;
    }
    alert(`${a} es multiplo de ${b}: ${esMultiplo(a, b)}`);
}
ejercicio05();

// Ejercicio 06
function ejercicio06() {
    let n1 = parseInt(prompt("Numero 1: "));
    let n2 = parseInt(prompt("Numero 2: "));
    let n3 = parseInt(prompt("Numero 3: "));

    function mayorDeTres(a, b, c) {
        return Math.max(a, b, c);
    }
    alert(`El mayor es: ${mayorDeTres(n1, n2, n3)}`);
}
ejercicio06();

// Ejercicio 07
function ejercicio07() {
    let n1 = parseFloat(prompt("Nota 1: "));
    let n2 = parseFloat(prompt("Nota 2: "));
    let n3 = parseFloat(prompt("Nota 3: "));

    const promedio = function(a, b, c) {
        return (a+b+c)/3;
    };
    alert(`Promedio: ${promedio(n1, n2, n3).toFixed(2)}`);
}
ejercicio07();

// Ejercicio 08
function ejercicio08() {
    let texto = prompt("Texto a convertir a mayúsculas: ");

    const convertirAMayusculas = function(texto) {
        return texto.toUpperCase();
    };
    alert(`Texto en mayúsculas: ${convertirAMayusculas(texto)}`);
}
ejercicio08();

// Ejercicio 09
function ejercicio09() {
    let precio = parseFloat(prompt("Precio: "));
    let porcentaje = parseFloat(prompt("Porcentaje de descuento: "));

    const calcularDescuento = function(prec, desc) {
        return prec-(prec*desc/100);
    };
    alert(`Precio final: ${calcularDescuento(precio, porcentaje).toFixed(2)}`);
}
ejercicio09();

// Ejercicio 10
function ejercicio10() {
    let nombre = prompt("Ingresa tu nombre: ");

    const saludo = nombre => `Hola, ${nombre}!`;
    alert(saludo(nombre));
}
ejercicio10();

// Ejercicio 11
function ejercicio11() {
    let num = parseInt(prompt("Numero para verificar si es positivo: "));

    const esPositivo = (n) => n>0;
    alert(`${num} es positivo?: ${esPositivo(num)}`);
}
ejercicio11();

// Ejercicio 12
function ejercicio12() {
    let texto = prompt("Texto a transformar: ");

    const mayusculas = (text) => text.toUpperCase();
    const agregarSigno = (text) => text + "!";
    const componerTransformaciones = (f1, f2) => (text) => f2(f1(text));
    const transformar = componerTransformaciones(mayusculas, agregarSigno);
    alert(transformar(texto));
}
ejercicio12();

// Ejercicio 13
// no me salio

// Ejercicio 14
function ejercicio14() {
    let x = parseInt(prompt("Ingresa un numero: "));
    let y = parseInt(prompt("Ingresa un numero: "));

    function operacionesMatematicas() {
        const sumar = (a, b) => a + b;
        const restar = (a, b) => a - b;
        const multiplicar = (a, b) => a * b;
        const dividir = (a, b) => b!==0 ? a/b : "Error";
        return { sumar, restar, multiplicar, dividir };
    }
    const ops = operacionesMatematicas();
    alert("Sumar: "+ops.sumar(x, y)+" Restar: "+ops.restar(x,y)+" Multiplicar: "+ops.multiplicar(x, y)+" Dividir: "+ops.dividir(x, y));
}
ejercicio14();

// Ejercicio 15
function ejercicio15() {
    let inicio = parseInt(prompt("Valor inicial del contador:")) || 0;
    function crearContador(inicial) {
        let valor = inicial;
        return {
            incrementar: () => ++valor,
            resetear: () => valor = inicial
        };
    }
    const cont = crearContador(inicio);
    cont.incrementar();
    alert(`Después de incrementar: ${cont.incrementar()}`);
    cont.resetear();
    alert(`Después de reset: ${cont.incrementar()}`);
}
ejercicio15();

// Ejercicio 16
function ejercicio16() {
    let inicial = parseInt(prompt("Valor inicial del acumulador:")) || 0;
    function acumulador(inicial) {
        let total = inicial;
        return valor => total += valor;
    }
    const acum = acumulador(inicial);
    alert(`+10 → ${acum(10)}`);
    alert(`+5 → ${acum(5)}`);
}
ejercicio16();

// Ejercicio 17
function ejercicio17() {
    let nombre = prompt("Nombre (deja vacío para 'Amigo'):");
    function saludo(n = "Amigo") {
        return `Hola, ${n}!`;
    }
    alert(saludo(nombre || undefined));
}
ejercicio17();

// Ejercicio 18
function ejercicio18() {
    let entrada = prompt("Números separados por coma (ej: 10,20,30):");
    let numeros = entrada.split(',').map(n => parseFloat(n.trim()));
    function media(...nums) {
        if (nums.length === 0) return 0;
        return nums.reduce((a, b) => a + b, 0) / nums.length;
    }
    alert(`Media: ${media(...numeros).toFixed(2)}`);
}
ejercicio18();

// Ejercicio 19
function ejercicio19() {
    let nombre = prompt("Nombre:");
    let edad = prompt("Edad:");
    let hobbies = prompt("Hobbies (separados por coma):");
    function mostrarDatos(n, e, ...h) {
        let res = `Nombre: ${n}, Edad: ${e}`;
        if (h.length > 0) res += `\nHobbies: ${h.join(', ')}`;
        return res;
    }
    alert(mostrarDatos(nombre, edad, ...hobbies.split(',').map(h => h.trim())));
}
ejercicio19();

// Ejercicio 20
function ejercicio20() {
    let x = parseInt(prompt("Número x:"));
    let y = parseInt(prompt("Número y:"));
    function ejecutarOperacion(fn, a, b) {
        return fn(a, b);
    }
    const suma = (a, b) => a + b;
    alert(`Suma: ${ejecutarOperacion(suma, x, y)}`);
}
ejercicio20();

// Ejercicio 21
function ejercicio21() {
    let entrada = prompt("Números separados por coma:");
    let arr = entrada.split(',').map(n => parseInt(n.trim()));
    function filtrarArreglo(array, cb) {
        return array.filter(cb);
    }
    let pares = filtrarArreglo(arr, n => n % 2 === 0);
    alert(`Pares: [${pares.join(', ')}]`);
}
ejercicio21();

// Ejercicio 22
function ejercicio22() {
    let url = prompt("URL del archivo:");
    function descargarArchivo(u, cb) {
        alert("Descargando");
        setTimeout(() => cb(u), 1000);
    }
    descargarArchivo(url, u => {
        alert(`Descarga completa de ${u}`);
    });
}
ejercicio22();

// Ejercicio 23
function ejercicio23() {
    let base = parseInt(prompt("Base:"));
    let exp = parseInt(prompt("Exponente:"));
    function potencia(b, e) {
        if (e === 0) return 1;
        if (e < 0) return 1 / potencia(b, -e);
        return b * potencia(b, e - 1);
    }
    alert(`${base}^${exp} = ${potencia(base, exp)}`);
}
ejercicio23();

// Ejercicio 24
function ejercicio24() {
    let inicio = parseInt(prompt("Valor inicial:"));
    let paso = parseInt(prompt("Paso:"));
    function crearSecuencia(start, step) {
        let actual = start - step;
        return () => actual += step;
    }
    const sec = crearSecuencia(inicio, paso);
    alert(`${sec()}\n${sec()}\n${sec()}`);
}
ejercicio24();