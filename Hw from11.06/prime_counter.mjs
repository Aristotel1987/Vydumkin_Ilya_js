function isPrime(x) {
    if (x < 2) return 0;  //Числа меньше 2 не являются простыми
    if (x === 2) return 1;//  2 является простым числом
    if (x % 2 === 0) return 0;//  Четные числа больше 2 не являются простыми

    for (let i = 3; i * i<= x; i += 2) {//  Проверяем только нечетные делители
        if (x % i === 0) return 0;//  Найден делитель, значит число не простое
    }
    
    return 1; 
}
//console.log(isPrime(process.argv[2])); //  

const n = parseInt(process.argv[2]);//  Преобразуем ввод в целое число

 //Проверка на корректный ввод
if (isNaN(n) || n  <2) { // Используем isNaN для проверки
    console.log('Некорректный ввод!!!');
} else {
    let counter = 0;//  Введем счетчик простых чисел
for (let i = 2; i <= n; i++) {
        counter += isPrime(i);//  Добавляем к счетчику 1, если число простое
    }
    
    console.log(counter);//  Выводим число простых чисел
}