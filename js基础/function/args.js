// 函数的默认参数用法
/**
 * @param {*} name
 * @param {string} [s='男'] 形参的默认值 
 * @returns
 */
function createS(name,s='男'){
	 return  {name:name,s:s}
}
let  lilei  = createS('lilei',null)
console.log(lilei)
