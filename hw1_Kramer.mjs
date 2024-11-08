const [, , n1, n2, n3, n4, n5, n6] = process.argv; // ВВодим параметры системы
let det=n1*n5-n2*n4; // Считаем 3 определителя
let dx=n3*n5-n2*n6;
let dy= n1*n6-n3*n4;
let result1 = dx/det;// Записываем результат в переменные
let result2 = dy/det; 
det==0 ? console.log('Корней бесконечное множествоили нет') : console.log(`${result1} ${result2}`);
