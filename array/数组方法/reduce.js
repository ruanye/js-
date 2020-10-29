// reduce 讲解 购物车总价（实际应用） 
var arr = [1,2,3,4] 
// 1 2  2 3  3 4  reduce 会进行数组长度减一次循环  
// reduce 可以进行数组求和
// 每一次的返回值 会变成下一次才prev  最后一次的值会直接作为函数的结果 
// next 是把数组的第二项开始 依次进行循环  
// 第一次的prev 1 
// 第二次prev  3
// 第三次 prev 6 
// 最后一次会作为整个函数的返回值 10 
// 咖啡 ->加糖的咖啡->加糖加盐的咖啡 
var sum  = arr.reduce(function(prev,next,index,array){
	console.log(prev)
	console.log(next) // 2 3 4 
  return  prev+next
})
console.log(sum)
// 
// prev 1 next 2 
// prev 102 next 2
// prev 103 next 3  
// 最后一次的prev 100 next 4

var sum1  = arr.reduce(function(prev,next,index,array){
	console.log(prev)
	console.log(next)
   return  100+next
})
console.log(sum1)
// 第一次 1+100 
// 第二次 101+100 201
// 第三次 201 +100 301
var sum2  = arr.reduce(function(prev,next,index,array){
   console.log(prev)
   return  100+prev 
})
console.log(sum2)
// reduce的prev可以从外部传参 
var sum  = arr.reduce(function(prev,next){
	console.log(next)
   return  prev+next
},100)
//如果reduce 有传参 参数会作为第一次的prev next 从数组的第一项开始
console.log(sum)
// 
var kary = ['加糖','加盐','加牛奶']
var coffee = kary.reduce(function(prev,next){
   return  next + prev
},'咖啡')
console.log(coffee)