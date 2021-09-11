const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    // 修改 html
    label.innerHTML = label.innerText
        // 字符串分割
        .split('')
        // 添加span 元素， 和 transition-delay 动画时间
        .map( (letter, index) => `<span style="transition-delay: ${index * 50}ms"> ${letter}</span>`)
        // 将分割字符串的数组 合并
        .join('');
})