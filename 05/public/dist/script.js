function inverter(palavra) {
    let stringInvertida = "";
    for (let i = palavra.length - 1; i >= 0; i--) {
        stringInvertida += palavra[i];
    }
    return stringInvertida;
}
const stringOriginal = "Eu quero fazer parte da equipe Target";
const stringInvertida = inverter(stringOriginal);
console.log("Original:", stringOriginal);
console.log("Invertida:", stringInvertida);
