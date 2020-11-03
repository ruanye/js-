var  arr =[60,50,30]
// 假设这是学习成绩 只要有一科满60分就算及格  
var bol = arr.some(function(item){
  return item>=60
})
console.log(bol)
// 一个班级里面人ary2  判断班级里面有没有男生
var ary2 = [{s:'女',name:'lili'},{s:'女',name:'meimei'},{s:'男',name:'李雷'},{s:'女',name:'lisa'},{s:'男',name:'mike'}]
let bol2 = ary2.some(function(item){
  return item['s'] == '男'
})
console.log(bol2)