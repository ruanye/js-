// 这里讲解prompt
// 用一个变量来存放我输入的内容 
var name  =  prompt('请输入姓名')
if(name ==10){
   alert('输入正确1')
}else{
	alert('输入错误1')
}
if(name>=10){
	alert('输入正确2')
}else{
	alert('输入错误3')
}
if(name == 'lilei'){
   alert('输入正确3')
}else{
	 console.log('输入错误3，请重新输入')
}
// 如果输入的值 大于等于10显示输入正确  
// 如果输入的值等于10 显示输入正确  

// if(prompt('请输入姓名')){
//   console.log(true)
// }else{
//  console.log(false)
// }