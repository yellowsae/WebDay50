// JS 代码中来点击移动元素
const panel =  document.querySelectorAll(".panel")

console.log(Math.E);
function test(test) {
    if ( test > 1 ) {
        return test;
    }else {
        return console.log("test");
    }
}

panel.forEach(panel => {  // forEach() 方法对数组的每个元素执行一次给定的函数。
    // addEventListener() 方法 监听元素，当该对象触发指定的事件时，指定的回调函数就会被执行。
    panel.addEventListener("click", () =>{
        // 点击这个元素执行下边函数
        removeActiveClass()
        // 并且 class 添加 active 元素
        panel.classList.add("active")
    })
})

function removeActiveClass() {
    panel.forEach(panel => {
        // 删除 active 元素
        panel.classList.remove("active")
    })
}
console.log("test");