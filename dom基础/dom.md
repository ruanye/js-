## dom 编程
- 查询浏览器兼容 https://www.caniuse.com/
  dom 的定义： Document Object Model：文档对象模型

1. Document 当浏览器载入 HTML 文档, 它就会成为 Document 对象
   Document 作用:让我们访问 HTML 页面中的所有元素。
- document.body  获取body元素
- document.cookie 获取cookie
- document.documentElement 获取html元素
- document.title 获取文档的标题title
2. 常用方法

- 创建一个元素对象

```js
//创建一个div元素
var div = document.createElement('div');
div.innerHTML = '我是一个div';
// 把创建的div添加到body里面
document.body.appendChild(div);
```

- 获取带 id 的元素对象 getElementById('id 名')

```js
var my = document.getElementById('mydiv');
console.log(my);
```

- 获取带有指定标签名的对象集合（类数组/伪数组）。getElementsByTagName('标签名')

```js
var lis = document.getElementsByTagName('li');
```

- 获取指定类名的集合 (兼容性 ie8 以上)getElementsByClassName('类名')

```js
var divs = document.getElementsByClassName('c');
console.log(divs);
```

- 获取指定类名或者标签的集合 querySelectorAll('类名或者标签名') querySelector('标签名/id/class') 用来获取单个的元素，如果有多个 只会获取到第一个(兼容性 ie8 及以上)

```js
document.querySelectorAll('.c');
console.log(divs1);
```

- 给元素添加一个子元素 appendChild(元素对象) 默认是添加到最后

```js
var p = document.createElement('p');
p.innerHTML = 'p标签';
var my = document.getElementById('mydiv');
my.appendChild(p);
```
- insertBefore(新的dom,已有dom) 在您指定的已有子节点之前插入新的子节点。
```js
// 在ul之前插入p
my.insertBefore(p,ul)
```
- removeChild(元素对象) 删除一个子元素 
## dom对象的属性
```js
var element  = document.getElementById('mydiv')
```
element.id  返回元素的id
element.classname  返回元素的类名class
element.innerHTML  设置或者返回元素的内容(标签闭合之中的所有内容)
element.parentNode 返回元素的父节点
element.getAttribute 获取元素属性
```js
element.getAttribute('属性名')
```
element.setAttribute() 设置/改变元素的属性并指定值 
```js
element.setAttribute('属性值','属性名')
```
## 文本节点 
标签中的文字叫做文本节点  
创建文本节点 document.createTextNode(文字)
## 事件 
1. 鼠标事件 
鼠标点击  onclick
```js
// 点击隐藏/显示
```
鼠标双击 ondblclick  db=>double的缩写
鼠标移到某元素之上  onmouseover
鼠标指针移动到元素之上 onmouseenter 
鼠标指针离开元素 onmouseleave 
鼠标按钮被按下  onmousedown  
鼠标按钮被抬起  onmouseup  
2. 键盘事件  键盘的每一个按键都有自己的keycode
onkeydown 键盘被按下 
onkeyup   键盘被抬起
onkeypress 键盘被按下并且抬起
3.  
## 事件案例 
          

