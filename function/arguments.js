// arguments  的作用  
function sum(){
	 console.log(arguments)
   return arguments[arguments.length-1]
}
console.log(sum(1,2,3,4))