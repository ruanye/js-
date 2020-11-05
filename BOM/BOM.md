## bom
bom 的定义： brower Object Model：浏览器对象模型
window 对象  表示浏览器打开的窗口
1. window的属性 
innerHeight 返回窗口的文档显示区的高度
innerWidth  返回窗口的文档显示区的宽度
location   用于窗口或框架的 Location 对象
 - Location.href 包含整个url
 - Location.host 包含域名 后面可以：跟上端口号  
 - Location.hostname 包含域名
 - Location.port 端口号
 - Location.pathname url的路径部分
 - Location.search url ? 后面的参数
 - Location.hash  带#的值 哈希值
name  窗口名称 
navigator 浏览器对象相关信息 
2.window 对象和方法 定时器  
setTimeout  一定时间后执行一次
setinterval  间隔一段时间执行一次 
```js
//基本写法
// setTimeout(fn,time)
//fn 需要执行的函数 time 执行间隔时间 
// setinterval(fn,time)  time 每隔多少时间执行一次
```
clearInterval/clearTimeout 清除定时器 


