
/**
 *  执行书匈奴说明：
 *    (1) 基本执行顺序
 *      js执行是单线程的，也就是说 它执行代码的顺序只能从上到下顺序执行
 *      因为这个特性，js把不同的数据分为了不同的队列执行，比如简单任务队列，复杂任务队列,宏队列，微队列
 *      简单任务队列专门存储执行引入，赋值，函数调用等 ， 复杂任务队列专门存储 函数 ，事件函数，宏队列专门存储 定时器，微队列存储Promise
 *      简单任务队列随进随执行，复杂任务队列任务在触发时才会执行，宏队列里的任务在
 *     * */

setTimeout(()=>{console.log("我来执行 setTimeout");}) // 4
function a() {
    console.log("我是a");  //2
}
let obj = {"a":false};
console.log(obj);
setInterval(()=>{console.log("我来执行 setInterval");})  // 5
console.log("我来执行 1"); // 1
a();
console.log("我来执行 2"); // 3
