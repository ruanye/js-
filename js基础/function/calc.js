// js计算器函数
function calc(a,b,c){
	if(c =="+"){ //如果是加号
		return a+b
	}else if(c=='-'){
		return a - b 
	}else if(c=='*'){
    return a*b
	}else{
		return a/b
	}
}
var res =  calc(1,2,'/')
document.write('计算结果是'+res)