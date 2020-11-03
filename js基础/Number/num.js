// 数字类型转化  从前往后解析字符串 只要碰到非有效数字 直接转成NaN
console.log(Number('11')) //11
console.log(Number('11.5')) //11.5
console.log(Number('11.5.5')) //NaN
console.log(Number('11px')) // NaN
console.log(Number('a1')) // NaN
console.log(NaN == NaN) // false
console.log(Number('')) //0 
//布尔转数字
console.log(Number(true)) //1
console.log(Number(false)) //0 
// null转数字
console.log(Number(null)) //0 
// symbol赚数字 直接报错 
// var a  =Symbol()
// console.log(Number(a))
// 函数和undefined转数字 
console.log(Number(undefined)) //NaN
console.log(Number(function a(){}))//aN
// 对象转数字 
var obj = {name:1}
// 1 obj 转字符串 obj.toString()  "[object Object]"
console.log(Number(obj)) //NaN
var ary =[12] // =>'12'
var ary1 = [12,13] //=>'12,13'
console.log(Number(ary)) //12
console.log(Number(ary1)) //NaN

