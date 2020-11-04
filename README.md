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
// js中以分号作为语句结束 如果独占一行则可以省略分号(通常不建议省略分号)
var a = 1;
var b = 2;
var a = 1;
```

2. 变量 Variable 可变的量 存储一个值 定义变量可以用 var 如果定义变量不赋值 变量的值是 undefind

- 命名规则 必须以字母、下划线\_、美元符号(\$)开头,后面可以有数字

```js
// 定义变量
var a;
console.log(a); // 结果是undefind
// 错误示例 var 1
// 正确示例
var a = 1;
var A = 1;
var $a = 3;
var _a = 4;
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

1. 字符串类型 \*String 字符串可以是引号中的任意文本 单引号或者双引号

```js
 'hello world' "hello world"
```

2. 数字 \*Number js 只有一种数据类型 可以是整数或者小数

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
console.log(a); //undefind
```

6.  Symbol 表示独一无二的值

```js
let b = Symbol('b');
let c = Symbol('b');
console.log(b == c); //false
```

#### 引用类型

1）数组 Array 存放很多东西的集合

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

- 三元表达式 if else 的简化版
  条件？条件成立的执行语句:条件不成立的执行语句

```js
var age = 19;
age >= 18 ? document.write('成年') : document.write('未成年');
var money = 200;
// 函数里面如果有三元 return需要在语句的最前面
function str() {
  return money > 100 ? '买的起' : '买不起';
}
str();
```

7. js 中 = 和 == 的区别

```js
// 一个等号表示赋值
// 两个等号表示比较等号左右两边的值是否相等
```

8. 条件判断语句 switch case

```js
// 基本写法
switch (条件) {
  case 条件对比:
    // 如果条件成立走这里
    break;
  default:
  //如果条件全都不成立走这里
}
```

9. 函数 也是一种数据类型 引用类型  Fuction 
   在js里面函数是一等公民  
   作用：函数是由事件驱动或者主动调用时可重复执行的代码块

```js
//函数基本写法
/**
 * funtion
 * name 函数名(英文) 函数名可以省略 如果函数名省略了这个函数就叫匿名函数 
 * param 传递给函数的参数名称 最多有255个参数
 * {}  函数体 函数执行的内容
 */
function name([param[, param[, ... param]]]) { statements }

```

- 函数的参数 调用函数时你可以给函数传递值 这些值被称为参数 可以传多个 这些参数以逗号分割

```js
funname(1, 2, 3); //实参(实际传递的参数)
```

- 函数需要接受这些参数 来进行一些 js 逻辑处理 函数接受的参数和传递的参数要一一对应 (形参)

```js
funciton funname(a,b){ //形参 用来接受实际参数
}
```

- 带有返回值的函数 通过 return 就可以实现 并把返回值给到调用它的地方 函数调用 = 返回值 函数如果碰到 return 后面的语句不在执行 都是无效代码

```js
funciton a(){
   return 1
  }
a() // a执行的结果就是1
```
- 不以function 开头的函数定义 叫做函数表达式 
- 在定义函数表达式之前不能使用函数表达式
- 在定义函数之前是可以使用函数的  
- 自执行函数 IIFE 函数值执行一次可以使用IIFE 
immediately(立即) Invoked(调用的) Function(函数) Expression(表达式)
- arguments 拿到我们传递的参数的一个类数组结合 
- 函数的默认参数 只有两种情况才会使用默认值 一种是没传参 一种是传的参数是undefined
-  函数和var 定义变量会存在变量提升  
10. 作用域
    - 全局变量(班费) 都可以访问
    - 局部变量(自己的钱) 只在函数内部可以访问 在函数内部使用 var 声明的是局部变量
11. 循环
- for 循环 批量处理数据

```js
for(初始化条件;终止(退出)条件；最终条件)
++自增运算符 每次会自动加1
for(var i=0;i<10;i++){
  //执行语句
  console.log(i) //0 1
}
```

- break 直接跳出当前循环 并不在进行下次循环
- continue 直接跳出当前循环 并进行下次循环

```js
var ary1 = [1, 2, 3, 4, 5, 6, 17, 19, 30];
// 1. 计算除了17之外其他数的和
// 2. 计算 17之前所有数的和
var sum = 0;
for (var i = 0; i < ary1.length; i++) {
  if (ary1[i] == 17) {
    //continue 1
    break; //2
  }
  sum = sum + ary1[i];
}
console.log(sum);
```
- do...while 和 while 
```js
 // 基本写法  
 do {
   stament 
 } while(condition){}
 // 会创建一个指定语句进行循环，直到while里面的条件（condition）为false的时候结束 do里面的语句会最少执行一次 
 while(condition){
   stament
 }
 // 会创建一个指定语句进行循环，直到while里面的条件（condition）为false的时候结束
```
 - 注意事项 while里面的条件语句不能一直为真(true)，否则会造成死循环(无限执行) 

##  js运算符 
  % 模（取余数） 3/2 1 3/3 0
  ++  自增运算符  
  --  自减运算符 
  +=/-=  x+=2 =>x= x+2
  !=  不等于 
  ！== 不绝对等于 
  && 并且 前后表达式都成立 此表达式才成立(都为true)返回true或者右侧值  只要有一个条件不成立返回值就是false或者是右侧不成立时候的值 
  || 或者 只要有一侧条件成立 则直接返回true或者成立那一侧的值  
  ! 取反 返回的是布尔值
  === 绝对等于 值和类型都相等 

## 数据类型 以及各种数据类型常用方法

1. 字符串

- 创建

```js
var str = 'hello';
//通过构造函数创建
var str = new String('hello');
```

- 字符串的属性
  长度 length
  创建字符串的构造函数 constructor  
  指向函数的原型 prototype
- 字符串的方法 charAt()和 charCodeAt()
- charAt(数字) 表示截取字符串中的一个的哪个索引
  ```js
  var str = 'hello';
  str.charAt(0);

  str[0];
  ```
- concat 拼接 把两个字符串拼在一起

```js
var str = 'hello';
var str2 = 'world';
var str3 = str.concat(str2);
```

- slice/substr/substring 截取字符串的多个
  两个参数 第一个参数表示从哪截取 第二个参数表示截取到哪个索引 (包前不包后)
  如果只传一个参数 表示从当前索引截取到末尾

```js
var str = 'hello';
var str1 = str.slice(0, 2); //he
var str1 = str.slice(2); //llo
var str2 = str.substr(0, 2);
```

- indexOf 和 lastIndexOf 或者字符串的索引
  indexof 该字符第一次出现的索引
  lastIndexOf 该字符最后一次出现的索引
  如果检测不到索引 则返回-1 (该字符串没有此字符)
  ```js
  var str = 'hello';
  console.log(str.indexOf('l')); //2
  console.log(str.lastIndexOf('l')); //3
  var n = '李先生';
  console.log(n.indexOf('王'));
  ```
- trim() 字符串去除前后的空格

```js
var n = '李小姐 ';
var res = n.trim();
console.log(res);
```

- 字符转换大小写 toUpperCase 转大写 toLowerCase 转小写

```js
var a = 'english';
var l = a.toUpperCase(); // 'ENGLISH'
var m = l.toLowerCase(); //'english'
console.log(l, m);
```

2. 数字类型 Number 正数、负数、小数、0 无穷大 Infinity NaN

- NaN 表示不是一个有效数字,NaN 和任何值都不相等
- Number([value]) Parseint([vaule]) Parsefloat([valvue])
- Number 会把其他类型强制转化成数字类型
  1). 字符串转数字 一旦字符串中出现非有效数字则会转成 NaN,只有字符串中都是有效数字才会转成数字 空字符串转化为 0
  2). 布尔类型转数组 true -> 1 false->0

```js
console.log(Number(true)); //1
console.log(Number(false)); //0
```

3). null 转数字,结果是 0

```js
console.log(Number(null)); //0
```

4). symbol 不能转数字，否则会报错
5). 函数和 undefind 转数字，结果是 NaN
6）. 对象转数字 先把对象转成字符串(toString()内置方法)，再把字符串转成数字 - 普通对象 {name:lili} - 数组对象 [12] - 其他对象 都是 NaN

- isNaN 判断这个数字是不是非有效数字 true/false 如果是非有效数字返回 true
- parseInt(转整数)/parseFloat(转小数，只转化第一个小数点)
- 字符串 如果开头是数字 只转换有效整数部分 其他会直接忽略 如果开头不是数字 会转成 NaN
- 其他类型转换 先转成字符串 在转成数字
- fixed(n) 表示取 n 位小数，不够的话自动补 0

3. 布尔值
   只有 undefind,null,0,NaN,'' 在转化成布尔值的时候会被转化成 false
4. 数组 内置对象 存储多个不同类型的数据
   1） 使用构造函数创建数组

```js
var ary = new Array(); //空数组
var ary1 = new Array(10); //确定长度为10的数组
var ary2 = new Array(0, 'zhangsan', true);
```

2）使用字面量创建数组

```js
var arry = [];
var arry = [1, 2, 3];
```

- 数组的访问 取值和赋值(通过索引)

```js
//取值
var ary = [1, 2, 3];
console.log(ary[1]);
//赋值
ary[1] = 4;
```

- for 循环遍历数组

```js
var ary = ['张三', '李四', '王五', '王六', '王7'];
for (var i = 0; i < ary.length; i++) {
  ary[i] = '一班的' + ary[i];
}
```

- 数组的长度 length 数组长度的添加 默认值 undefind
- 数组长度的减少 会删除多余的元素
- 数组的常用方法
  1. join(符号) 数组转字符串，字符串会以 join 里面的字符串进行连接 如果不传值会以，号进行连接 不改变原数组
  2. push 把数组里面添加元素 位置是数组的后面
  3. pop() 删除数组最后一项
     shift() 删除数组的第一项
  4. unshift 往数组的最前面添加元素
  5. reverse() 数组倒序
  6. concat 合并数组 会把两个数组合并 不修改原数组
  7. slice(start,end) 截取数组 从 start 位置截取到 end 位置（不包含结束位置） 如果 start 是负数 表示从后往前截取
  8. splice(index,howmany,item1,item2...) 替换 如果不进行删除操作 howmamy 参数给 0  
     index 开始位置
     howmany 替换多少项
     item1... 替换成什么
  9. indexOf(查找第一次出现的索引) lastIndexOf(查找最后一次出现的索引) 查找元素在数组中的位置 如果数组中不存在该元素返回-1
  10. sort 排序

```js
var b = [12, 3, 25, 20, 17];
// 从小到大排序  a-b 正序  b-a 倒序
b.sort(function (a, b) {
  return a - b;
});
```
11. filter 过滤 返回一个符合条件的新数组 不改变原数组 splice作删除和filter做删除的区别是splice会改变原数组
12. map 映射 映射出一个新数组 
13. every 返回是一个布尔值，只要有一项条件不成立，就返回false 
14. some 返回也是一个布尔值 只要有一项条件成立则返回true 否则返回false 
15. reduce 收敛 reduceRight(从右侧开始)  
```js
 * prev  每一次的返回值会作为下一次的prev 
 * next 从数组的第二项开始 
 * 如果reduce 有传参 参数会作为第一次的prev next 从数组的第一项开始 相当于把参数放在数组的开头
 */
var sum  = arr.reduce(function(prev,next,index,array){
	return  prev+next
})
console.log(sum)
```
## 对象数据类型 是以大括号表示，并且拥有键值对 键值对分为key属性名 value属性值 
  - key属性是用来描述对象有某种特征的 key 一般情况都是字符串
  - value 属性值 用来描述特征的具体值 value 可以是任何值 
  - 对象的访问与赋值 对象 obj 
    obj.key  obj[key]
    obj的key 不可以重复 如果重复后面的会直接覆盖 
    obj.key 进行赋值的时候 如果有这个属性值 会直接进行修改 如果没有就是添加 
  - 删除  delete 如果被delele删除掉或者没有这个属性会返回undefined
  - 假删除 obj[key] = null
## 第一种判断数据类型的方式typeof 
```js 
// 数组和null通过typeof检测出来是对象object
console.log(typeof(1))  //number 
console.log(typeof('hello')) //string
console.log(typeof(true)) //boolean 
 console.log(typeof(undefined)) //undefined
console.log(typeof(Symbol('1'))) //symbol
console.log(typeof(function(){})) //function 
console.log(typeof([1,2,3,4]))// object 
console.log(typeof(null))    //object
console.log(typeof({name:'lili'})) //Object
```
## 第二种判断数据类型的方式  Object.prototype.toString.call 返回值是个字符串 '[Object 数据类型]'
## this  
- this表示函数执行上下文 
- this 和在哪里定义无关只和执行有关 
- 直接定义的函数 this->window (浏览器环境)
- 判断函数前面有没有 . 如果有. this就是方法前面的对象 
  
## 闭包
## 作用域链
## 原型和原型链 




 
  