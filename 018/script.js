// 定位 
const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

// 全局游标
let activeSlide = 0;

//  左边按钮 点击时 
rightBtn.addEventListener("click", () => {
    activeSlide++;
    // 当点击到最后一张图时，跳回第一张图
    if (activeSlide > slides.length - 1) {
        //  变回 0
        activeSlide = 0;
    }

    // 执行函数 
    setBgToBody();
    setActiveSlide();
})

// 左边按钮 
leftBtn.addEventListener("click", () => {
    activeSlide--;
    // 当到第一张时 
    if (activeSlide < 0) {
        activeSlide = 1;
    }
    // 执行函数 
    setBgToBody();
    setActiveSlide();
})


setBgToBody();

// 背景图片的改变 
function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
        // body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}


// 添加 active 和删除上一个 active 
function setActiveSlide() {
    slides.forEach((slide) => slide.classList.remove('active'));
    slides[activeSlide].classList.add('active');
}