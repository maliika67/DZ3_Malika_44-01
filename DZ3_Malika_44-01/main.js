//1 задание
var qwer = (a, b) => (a > b) ? b : a
console.log(qwer( 235, 505 ))

// 2 задание
var str = (text = prompt('Введите строку')) => text.length
console.log('Длина строки' + str())

// 3 задание
var calculator  = (a, b, c,) => {
    console.log(a, b, c)
    if(b === "+") return a + c
    if(b === "-") return a - c
    if(b === "*") return a * c
    if(b === "/") {
        if(c === 0) return alert('На ноль делить нельзя!')
        return a / c
    }
}
var num1 = parseInt(prompt('Введите первую цифру.'))
var func = prompt('Введите арифметическое действие.')
var num2 = parseInt(prompt('Введите вторую цифру.'))
console.log(calculator(num1, func, num2))