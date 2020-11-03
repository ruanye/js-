//forEach 遍历数组
var ary = [1,2,3,4]
/**
 * item 表示数组的每一项
 * index 数组的索引 
 * （如果传了第三个参数） array 数组本身 
 */
ary.forEach(function(item,index){
	  if(index==1){
			return
		}
    ary[index] =  ary[index]+1
})
ary