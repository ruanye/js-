// filter
//例子1 拿到数组里面大于3的项
var  ary = [1,2,3,4,5,6,7]
//ary.splice(2,1)
//console.log(ary)
/** 
 * item 数组的每一项
 * index 数组的索引 
*/
var newAry =  ary.filter(function(item,index){
  return  item>3 
})
console.log(newAry)
// 例子2 删除数组里面的3 

var newAry1= ary.filter(function(item,index){
    return item!=3
}) 
console.log(newAry1)
console.log(ary)
//对象的访问
 let obj = {1:1,name:'lili'}
 console.log(obj[1] ) 
 console.log(obj.name ) 

// 例子3  
var ary2 = [{s:'女',name:'lili'},{s:'女',name:'meimei'},{s:'男',name:'李雷'},{s:'女',name:'lisa'},{s:'男',name:'mike'}]
let  Nary  =ary2.filter(function(item,index){
   return item['s']=='男'
})
console.log(Nary)

