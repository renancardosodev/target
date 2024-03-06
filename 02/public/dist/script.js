function isFibonacci(numero) {
    let x = 0;
    let y = 1;
    while (y < numero) {
        let temp = y;
        y = x + y;
        x = temp;
    }
    return y === numero;
}
const numero = 25;
if (isFibonacci(numero)) {
    console.log(`O número ${numero} é da sequência de Fibonacci.`);
}
else {
    console.log(`O número ${numero} não é da sequência de Fibonacci.`);
}
