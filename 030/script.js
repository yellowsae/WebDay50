const textEl = document.getElementById("text");
const speedEl = document.getElementById('speed'); // 输入框
const text = 'We Love Programming!'

let idx = 1 ;
// 速度
let speed = 300 / speedEl.value;

writeText()

function writeText() {
    // 添加文本  slice() 字符串切片
    textEl.innerHTML = text.slice(0, idx);
    idx++;
    if (idx > text.length) {
        idx = 1;
    }
    // 调用 自己
    setTimeout(writeText, speed);
}


speedEl.addEventListener("input", (e) => speed = 300 / e.target.value);

