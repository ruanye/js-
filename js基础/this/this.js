// function n(){
// 	console.log(this)
// }
// n()
var  obj = {
	fn:function(){
		 console.log(this==obj)
	}
}
obj.fn()