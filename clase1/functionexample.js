function sumaValores(numberoA, numberoB) { // function
  return numberoA + numberoB;
}

const otroSumador = sumaValores;

const suma = sumaValores(2, 2);
console.log(suma); // 4 number
const suma2 = sumaValores(3, 2);
console.log(suma2); // 5 number

const suma3 = otroSumador(30, 2);
console.log(suma3); // 32 number

