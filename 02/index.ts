function isFibonacci(numero: number): boolean {
    let x: number = 0
    let y: number = 1

    while (y < numero) {
        let temp: number = y
        y = x + y
        x = temp
    }
    return y === numero
}


const numero: number = 25

if (isFibonacci(numero)) {
    console.log(`O número ${numero} é da sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não é da sequência de Fibonacci.`);
}
