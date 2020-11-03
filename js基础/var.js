// // 局部变量和全局变量
// var  c = 1  //全部变量 
// function a(){
// 	var money = 100  //局部变量  外部无法访问  
// 	console.log(money,'局部变量')
// 	dd = 1 // 全局变量  
// }
// a()
// console.log('变量',c,dd)
function Foo(){
	 var i= 0
	 debugger
	 return function(){
		 console.log(i++)
	 }
}
var  fn1 = Foo(),fn2= Foo()
fn1()
fn1()
fn2()
var x = 0 
switch(++x){
	  case 0:++x;
		case 1:++x;
		case 2:++x
}
console.log(x)
var a = 1
b = ++a 
console.log(b)
