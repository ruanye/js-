// 课堂练习 计算购物车商品总价 obj.price*obj.num 
var carList= [
	{name:'苹果',price:30,num:3},
	{name:'梨',price:3.3,num:5},
	{name:'榴莲',price:3.5,num:1},
	{name:'菠萝',price:2.3,num:8}
]
//第一次的返回值  3*30+3.3*5  下次的prev 
// 106.5 prev 
var total = carList.reduce(function(prev,next){
   return prev +next.price*next.num
},0)
console.log(total)