const page = await fetch('https://www.worldtimeserver.com/current_time_in_RU-SPE.aspx?city=Saint_Petersburg');
let content = await page.text();// Переводим содержимое полученной страницы в текст
const regexp_time = /(\d{1,2}):(\d{2}):(\d{2})/;// Регулярное выражение для формата времени
let current_time = content.match(regexp_time);//Выбираем из текста страницы время, соответствующее регулярному выражению
if (current_time === null) {//Проверяем полученный список на пустоту, правильно ли страница вернула нам время
    console.log('Время не найдено на странице.');
}
current_time =current_time[0]// если список не пустой, берем его первый элемент  
if (current_time[1] === ':') {// Проверяем формат, чтобы вывести 8 цифр, меньше ли сейчас 10 часов
    console.log('0'+current_time); 
}
else console.log(current_time);