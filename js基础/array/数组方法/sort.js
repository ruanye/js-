// 数组排序
var a = [1,5,4,3,9,2]
a.sort() //只能排序10以下的数字 
console.log(a)
var b = [12,3,25,20,17]
// 从小到大排序 
b.sort(function(a,b){
	return a-b
})
