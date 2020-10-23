## js 基础

1. js 使用

- 内联 两个 body 中间靠下
<script>
 //js语言 
</script>
- js 外链引入 src 对应的是外部引入地址 外链的文件名叫 js 外链的 js script 标签中间不要写东西
<script src="./index.js"></script>

```js
//index.js
document.write('hello world');
```

2. 定义变量 var 通过一个等号把等号右边的值赋值给等号左边 为了标记一个值 js 的执行顺序从上往下 后定义变量会覆盖前面的 js 严格区分大小写

```js
var a = 1;
var A = 1;
var hu = 'aaaaaaa';
```

```js
var a = 1;
var a = 2;
//a => 2
```

3. js 输出

- document.write 文档写入
  document 文档
  write 写入

- console.log 控制台输出

```js
console.log('hello world');
```

- alert 弹窗输出内容 有一个确定按钮

```js
alert('hello world');
```

- confirm(不常用) 确认弹窗 有确认和取消按钮 点击确认按钮会返回 true 点击取消按钮会返回 fasle

```js
if (confirm('我是好人')) {
  alert('是的 你是个好人');
} else {
  alert('不是 你不是好人');
}
```

- prompt(不常用) 显示可提示用户进行输入的对话框 

```js
var name = prompt('请输入姓名');
if (name == 'lilei') {
  alert('输入正确');
} else {
  console.log('输入错误，请重新输入');
}
```

4. js 注释 为了让大家更好的理解代码(不影响代码 又可以注明代码的用途)

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
#### 值类型
1) 字符串类型 \*String 字符串可以是引号中的任意文本 单引号或者双引号

```js
 'hello world' "hello world"
```

2) 数字 \*Number js 只有一种数据类型 可以是整数或者小数

```js
 1  2  2.2
```
3）布尔类型 Boolean 只有两个值 true false

```js
  true  false
```
4） null 空值 
5） undefined 未定义
```js
     var a;
		 console.log(a) //undefind
```
6)  Symbol 表示独一无二的值 
```js
    let b = Symbol('b')
	  let c = Symbol('b')
		console.log(b==c) //false
```
####  引用类型
 1）数组Array  存放很多东西的集合
  - 数组的定义 中括号表示数组，每一项以逗号分割  
  ```js
   // 字面量定义
   [] 空数组 
   var students = ['学生1','学生2','学生3' ]
    var goods =['牙膏'，'牙刷'，'苹果','洗衣机']
   ```
   ```js 
    //数组[数字] 表示数组的第几项  js的计数是从0开始算的
     var students = new Array()
     students[0] ='学生1'
     students[1] ='学生2'
    ```
  2）对象  是以大括号{}表示 对象里面放的是键值对（key:value ）每一项还是以逗号分割 key(键名)和value(键值)以：分割
  3）函数 Function 
 
6. 条件语句 if else if 后面括号跟的值返回的是一定是 true 或者 false if 可以独立使用 if else if 只要有一个条件成立就不在继续往下走了


```js
if (条件js) {
  //条件成立
}
if (条件js) {
  //条件成立
} else {
  // 条件不成立
}
// if else if else 只要有一个条件成立就不在继续执行
var c = 9;
if (c > 9) {
  alert('第一个条件');
} else if (c > 7) {
  alert('第二个条件');
} else if (c > 8) {
  alert('第三个条件');
} else {
  alert('第四个条件');
}
```

7. js 中 = 和 == 的区别

```js
// 一个等号表示赋值
// 两个等号表示比较等号左右两边的值是否相等
```
