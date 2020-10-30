// 课堂练习 计算购物车商品总价 obj.price*obj.num 
var carList= [
	{name:'苹果',price:30,num:3},
	{name:'梨',price:3.3,num:5},
	{name:'榴莲',price:3.5,num:1},
	{name:'菠萝',price:2.3,num:8}
]
console.log(carList[0])
console.log(carList[1])
console.log(carList[2])
console.log(carList[3])
var sum = 0 
for(var i =0;i<carList.length;i++){
	 sum = sum+ carList[i].price*carList[i].num 
}
console.log(sum)