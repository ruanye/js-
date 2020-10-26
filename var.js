// 局部变量和全局变量
var  c = 1  //全部变量 
function a(){
	var money = 100  //局部变量  外部无法访问  
	console.log(money,'局部变量')
	dd = 1 // 全局变量  
}
a()
console.log('变量',c,dd)