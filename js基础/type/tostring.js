console.log(Object.prototype.toString.call(1))  
console.log(Object.prototype.toString.call('hello')) 
console.log(Object.prototype.toString.call(true)) 
 console.log(Object.prototype.toString.call(undefined)) 
console.log(Object.prototype.toString.call(Symbol('1'))) 
console.log(Object.prototype.toString.call(function(){}))  
console.log(Object.prototype.toString.call([1,2,3,4])) 
console.log(Object.prototype.toString.call(null))   
console.log(Object.prototype.toString.call({name:'lili'}))
// 写一个函数来判断数据类型 
 function Type(obj){
	  let str =  Object.prototype.toString.call(obj)
		console.log(str)
		str  = str.slice(7,-1)
		return str
 }
 
console.log(Type(0)) //number
console.log(Type([])) //number
console.log(Type(null)) //number
var  str1 = 'helloworld'
console.log(str1.slice(4,-1)) // 