// JS 的目的为了 设置 文本的 百分率 和 图片模糊度
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg')

let load = 0;

let int = setInterval(blurring, 30); // setInterval() JS的什么方法

function blurring() {
    load++;
    if(load > 99) {
        clearInterval(int);  // clearInterval() 什么方法
    }
    loadText.innerHTML = `${load}%`;  // 改变文字
    // 设置由百分号，进行不透明度的动态设置
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}