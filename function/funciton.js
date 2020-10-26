/** 讲解函数 
 *  d 函数名 
 *  {} 函数作用域 表示函数要执行的内容
 *  函数执行 函数名()
 */
function d (){
   console.log(1)
   console.log(2)
   console.log(3)
}
// d()
// d()
// d()
// 求和的函数
function sum (a,b){
  console.log(a+b)
}
sum(1,2)
sum(10,2)
function x(){
	return 2;
	console.log('iiiiiii') 
}
var a = x() //2 
console.log(a,'a的值')

function sum1 (a,b){
    return a+b
}
var b =  sum1(3,2)
document.write(b)
// 函数有两个参数 实参 第一个参数是姓 第二个参数是名字  函数执行 显示完整姓名 
function N(a,b){
    return a+b
}
N('阮','野')
document.write(N('阮','野'))
// function + if 判断  
// 写一个函数计算器 calc  实参可传 三个  前两个是数字 calc(1,2,"+") 第三个参数是 加 减 乘 除 符号 根据加减程序符号计算我们的寄过  if(第三个参数=='+')
