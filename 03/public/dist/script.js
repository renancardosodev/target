// A
const a = [1, 3, 5, 7];
const nextA = a[a.length - 1] + 2;
console.log(`a) Próximo número: ${nextA}`);
// B
const b = [2, 4, 8, 16, 32, 64];
const nextB = b[b.length - 1] * 2;
console.log(`b) Próximo número: ${nextB}`);
// C
const c = [0, 1, 4, 9, 16, 25, 36];
const nextC = Math.pow(c.length, 2) + 1;
console.log(`c) Próximo número: ${nextC}`);
// D
const d = [4, 16, 36, 64];
const nextD = Math.pow(d.length * 2, 2);
console.log(`d) Próximo número: ${nextD}`);
// E
const e = [1, 1, 2, 3, 5, 8];
const nextE = e[e.length - 1] + e[e.length - 2];
console.log(`e) Próximo número: ${nextE}`);
// F
const f = [2, 10, 12, 16, 17, 18, 19];
const nextF = f[f.length - 1] + 1;
console.log(`f) Próximo número: ${nextF}`);
