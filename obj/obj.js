let  car = {
	color:'红色',
	color:'蓝色',
	dirve:function(){
	   console.log('开汽车')
	}
}
car.color ='黑色'
car.weight  =  '550kg'
console.log(car.color)
console.log(car['color'])
console.log(car.weight)
delete car.color
console.log(car)
console.log(car)
var person  = {name:'lili',age:18}
person.name = null
console.log(person)