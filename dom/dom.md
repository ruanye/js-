## dom编程 
- 查询浏览器兼容 https://www.caniuse.com/
dom的定义： Document Object Model：文档对象模型 
1. Document 当浏览器载入 HTML 文档, 它就会成为 Document 对象
Document作用:让我们访问HTML 页面中的所有元素。
2. 常用方法
- 创建一个元素对象
```js
  	//创建一个div元素
	  var div  = document.createElement('div')
		div.innerHTML = '我是一个div'
		// 把创建的div添加到body里面
		document.body.appendChild(div)
```
- 获取带id的元素对象 getElementById('id名')
```js
   var my  = document.getElementById('mydiv')
	  console.log(my)
```
- 获取带有指定标签名的对象集合（类数组/伪数组）。getElementsByTagName('标签名')
```js
var lis =  document.getElementsByTagName('li')
```
- 获取指定类名的集合  (兼容性 ie8以上)getElementsByClassName('类名') 
```js
 var divs = document.getElementsByClassName('c')
	 console.log(divs)
```
- 获取指定类名或者标签的集合 querySelectorAll('类名或者标签名')  querySelector('标签名/id/class') 用来获取单个的元素，如果有多个 只会获取到第一个(兼容性 ie8及以上)
```js 
document.querySelectorAll('.c')
	console.log(divs1)
```

