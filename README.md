## js基础
1. js 使用  
- 内联  两个body中间靠下 
<script>
 //js语言 
</script>
- js外链引入   src 对应的是外部引入地址 外链的文件名叫js  外链的js script标签中间不要写东西
<script src="./index.js"></script> 

```js 
//index.js
document.write('hello world')
```
2. 定义变量 var 通过一个等号把等号右边的值赋值给等号左边 为了标记一个值  js的执行顺序从上往下 后定义变量会覆盖前面的  js严格区分大小写
```js
   var a  = 1
   var A =  1 
   var hu = 'aaaaaaa'
```
```js
   var a  = 1
   var a  = 2 
   //a => 2 
```
3. js 输出
- document.write  文档写入
  document 文档
  write 写入 

- console.log 控制台输出
```js
 console.log('hello world')
 ```
- alert 弹窗输出内容  
```js
  alert('hello world')
```
4. js注释  为了让大家更好的理解代码(不影响代码 又可以注明代码的用途)
```js
   // 单行注释
   /**
    *
    * 这里是多行注释
    */
```
5. JavaScript 数据类型
- 值类型(基本类型)：字符串（String）、数字(Number)、布尔(Boolean)、空（Null）、未定义（Undefined）、Symbol。
- 引用数据类型：对象(Object)、数组(Array)、函数(Function)。
1) 字符串类型 *String  字符串可以是引号中的任意文本 单引号或者双引号
```js
 'hello world' "hello world"
```
2) 数字 *Number js只有一种数据类型  可以是整数或者小数
```js 
 1  2  2.2 
```
3）布尔类型  Boolean 只有两个值 true false 
```js
  true  false 
```
 

