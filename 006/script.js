// 目的 检查浏览器的滚动条， 一边滚动一边加上 class="show" 元素

const boxes = document.querySelectorAll('.box');
// 检测浏览器的 滚动
window.addEventListener('scroll', checkBoxes);
checkBoxes();

function checkBoxes() {
    const triggerButton = window.innerHeight / 5 * 4;  // 浏览器高度
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top; // 什么代码 ？
        if (boxTop < triggerButton) {
            box.classList.add('show');
        }else {
            box.classList.remove('show');
        }
    })
}
