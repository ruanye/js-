// 讲解parseInt 只解析整数部分 无效字符串会直接忽略 开头是无效字符串则会变成NaN
console.log(parseInt('12'))
console.log(parseInt('12.5'))
console.log(parseInt('12.5.5'))
console.log(parseInt('12.5px'))
console.log(parseInt('a12'))
console.log(parseInt(true))
// true ->'true'
console.log(parseInt(false))
console.log(parseInt([12,13]))
console.log(parseFloat(null))
// parseFloat

console.log(parseFloat('12'))
console.log(parseFloat('12.5'))
console.log(parseFloat('12.5.5'))
console.log(parseFloat('12.5px'))
console.log(parseFloat(''))
var  n = 12
console.log(n.valueOf())