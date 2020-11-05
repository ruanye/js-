// Math讲解  
//Math.abs()  绝对值 
console.log(Math.abs(-3))
console.log(Math.abs(3))
// Math.ceil() 向上取整  天花板值 
console.log(Math.ceil(3.2)) 
console.log(Math.ceil(-3.2)) 
// Math.floor() 向下取整  地板值 
console.log(Math.floor(3.2)) 
console.log(Math.floor(-3.2))
// Math.round()  四舍五入 
console.log(Math.round(1.3))
console.log(Math.round(1.5))
console.log(Math.round(-1.5))
// Math.max() 取参数中的最大值 
console.log(Math.max(1,2,3,4,5,-3)) 
//Math.min() 取参数中的最小值  
console.log(Math.min(1,2,3,4,5,-3)) 
// 了解 Math.pow() 计算平方 
console.log(Math.pow(2,3))
//  Math.random()  返回0-1之间的随机数 但是肯定小于1
// 获取 1-10 之间的随机整数
0-0.99
let n = Math.floor(Math.random()*10)+1
// 获取任意范围的随机整数
function random(min,max){  
   return Math.floor(Math.random()*(max-min+1))+min
}
console.log(random(20,30))