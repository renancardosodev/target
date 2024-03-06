// A
const a: number[] = [1, 3, 5, 7];
const nextA: number = a[a.length - 1] + 2;
console.log(`a) Próximo número: ${nextA}`);

// B
const b: number[] = [2, 4, 8, 16, 32, 64];
const nextB: number = b[b.length - 1] * 2;
console.log(`b) Próximo número: ${nextB}`);

// C
const c: number[] = [0, 1, 4, 9, 16, 25, 36];
const nextC: number = Math.pow(c.length, 2) + 1;
console.log(`c) Próximo número: ${nextC}`);

// D
const d: number[] = [4, 16, 36, 64];
const nextD: number = Math.pow(d.length * 2, 2);
console.log(`d) Próximo número: ${nextD}`);

// E
const e: number[] = [1, 1, 2, 3, 5, 8];
const nextE: number = e[e.length - 1] + e[e.length - 2];
console.log(`e) Próximo número: ${nextE}`);

// F
const f: number[] = [2, 10, 12, 16, 17, 18, 19];
const nextF: number = f[f.length - 1] + 1;
console.log(`f) Próximo número: ${nextF}`);
