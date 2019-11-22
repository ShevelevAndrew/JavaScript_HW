// 1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту. 
// Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию
function toCelsius(tc) {
    var tc = prompt('Задайте температуру в градусах по Цельсию', 20);
    let tf = (9 / 5) * tc + 32
    alert('по Цельсию:' + tc + '\nпо Фаренгейту: ' + tf)
    console.log('по Цельсию:' + tc + '\nпо Фаренгейту: ' + tf)
}
toCelsius(15)

// 2. Работа с переменными.
// a) Объявить две переменные: admin и name. 
// Записать в name строку «Василий»; Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»).
function copyValue() {
    let name = 'Василий'
    let admin = name
    console.log(admin)
}
copyValue()

// b)* Есть две переменнные A = 20 и B = 30. Нужно поменять их значения, не используя третью переменную
function copyValue_A_B() {
    let a = 20
    let b = 30
    console.log('initial values\nA = ' + a + '\nB = ' + b)
    b = a + b
    a = b - a
    b = b - a
    console.log('inverted values\nA = ' + a + '\nB = ' + b)
}
copyValue_A_B()
    // 4. *Чему будет равно JS-выражение 1000 + "108"?
function expressionJS() {
    console.log('expression 1000 + "108"\n' + 1000 + '108')
}
expressionJS()