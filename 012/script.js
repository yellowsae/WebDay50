const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    // 当点击元素时 添加  class = active  属性 
    toggle.addEventListener('click', () => {
        // parentNode 方法 ?
        toggle.parentNode.classList.toggle('active');
    });
});