function inverter(palavra: string): string {
    let stringInvertida: string = "";
    
    for (let i:number = palavra.length - 1; i >= 0; i--) {
        stringInvertida += palavra[i];
    }

    return stringInvertida;
}

const stringOriginal: string = "Eu quero fazer parte da equipe Target";
const stringInvertida: string = inverter(stringOriginal);
console.log("Original:", stringOriginal);
console.log("Invertida:", stringInvertida);
