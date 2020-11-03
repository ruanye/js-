/**
 * a函数名  使用英文
 * () 用来放形参 用来接受外部传过来的参数 
 * {} 函数执行语句 
 * return 返回值会等于当前函数调用
 */
//拼接字符串的函数 拼接姓名
function cs(firstName,middleName,lastName){
	return firstName+ middleName+lastName
}
var personName = cs('tom','yuehan','shimisi')
console.log(personName)
function a(){
	return 'lilei'
}
console.log(a()=='lilei')