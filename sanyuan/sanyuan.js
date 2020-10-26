// 三元表达式 if else的简化版 
// 条件？条件成立的执行语句:条件不成立的执行语句 
// 定义一个年龄 大于18 显示成年 否则显示未成年 
var age = 17
// if(age>18){
// 	document.write('成年')
// }else{
// 	document.write('未成年')
// }
// age>18?document.write('成年'):document.write('未成年')
var  money = 200
 function str(){
    return money>100?'买的起':'买不起'
 }
 str()
 console.log(str())
