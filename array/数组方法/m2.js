var  arr = [1,2,3,4] //  0 1 2 3 
console.log(arr.slice(0,-2))
console.log(arr.slice(1,3)
)
console.log(arr.slice(-1))
console.log(arr[arr.length-1])
var ary1 = [1,2,3]
// 用splice 实现删除
ary1.splice(0,1)
console.log(ary1)
//用splice实现替换 
var ary2 = [1,2,3]
ary2.splice(1,1,5)
console.log(ary2)
//用splice实现指定位置添加元素
var ary3 = [1,4,5,6,7,5,7]
ary3.splice(1,0,2,3)
console.log(ary3)
//indexOf 
console.log(ary3.indexOf(5))
console.log(ary3.indexOf(8))
 //lastIndexOf 
console.log(ary3.lastIndexOf(5))