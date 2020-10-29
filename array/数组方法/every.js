// every 应用场景 全选和单选 
var arr = [1,2,3]
var bo = arr.every(function(item){
  return item>0 
})
console.log(bo) //true 
var bo1 = arr.every(function(item){
  return item>2
})
console.log(bo1) //fasle
