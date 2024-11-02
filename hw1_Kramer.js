let n1=2; // ВВодим параметры системы
let n2=3;
let n3=5;
let n4=5;
let n5=2;
let n6=9;
let det=n1*n5-n2*n4; // Считаем 3 определителя
let dx=n3*n5-n2-n6;
let dy= n1*n6-n3*n4;
let result1 = dx/det;// Записываем результат в переменные
let result2 = dy/det; 
det===0 ? console.log('Корней бесконечное множествоили нет') : console.log('x и y равны', result1, result2);
