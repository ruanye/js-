//for 循环遍历数组
var ary = ['张三','李四','王五','王六','王7']
for(var i=0;i<ary.length;i++){
	 	
	 if(ary[i]=='王五'){
		  //break;
			continue
		}
		ary[i] = '一班的'+ary[i]
}
console.log(ary)
// break 直接跳出当前循环 并不在进行下次循环   //continue 直接跳出当前循环 并进行下次循环
var ary1 = [1,2,3,4,5,6,17,19,30]
// 1. 计算除了17之外其他数的和 
// 2. 计算 17之前所有数的和 
var sum= 0;
for(var i=0;i<ary1.length;i++){
  if(ary1[i]==17){
		//continue
		break
	}
	sum =sum+ary1[i]
}
console.log(sum)