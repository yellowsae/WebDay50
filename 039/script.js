
const password = document.getElementById('password');
const background = document.getElementById('background');

password.addEventListener('input', (e) => {
    const input = e.target.value;  // 输入的值
    const length = input.length;
    const blurValue = 20 - length * 2;
    background.style.filter = `blue(${blurValue}px)`;
})