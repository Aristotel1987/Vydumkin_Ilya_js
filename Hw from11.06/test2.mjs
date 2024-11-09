    import { execSync } from 'node:child_process';
let answer=[5, 5, 6, 6, 6, 6, 7, 7, 8, 8]; // ВВодим вектор ответов от 11 до 20
for (let i=11; i<=20; i++){
    let result = String(execSync('node prime_counter.mjs '+String(i))).trim().replace('\n', ' ') ;//ВВодим цикл для запроса результат от 11 до 20
console.assert(result == answer[i-11], 'НЕУДАЧА!'); // сравниваем значение с ответом
}