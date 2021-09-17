const buttons = document.querySelectorAll('.ripple');


//  获取点击按钮的位置， 从点击按钮位置渲染样式 

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        //  e.clientX  ? 
        const x = e.clientX;
        const y = e.clientY;

        //  ? 
        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        // 
        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        //
        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + "px";
        circle.style.left = xInside + "px";

        this.appendChild(circle);

        setTimeout(() => circle.remove(), 500);
    })
})