const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

// mouseenter 监听鼠标， 移动到 left 就在 container 添加 hover-left 元素
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
// mouseleave 监听鼠标是否离开
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));

// 监听鼠标， 移动到 right 就在 container 添加 hover-right 元素

right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));


