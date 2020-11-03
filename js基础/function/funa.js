// 函数提升 
xx()
function xx(){
	console.log(1)
}

var  a = function(){
  console.log(2)
}
a()
