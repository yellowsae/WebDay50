const progress = document.getElementById("progress");
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let ActiveList = 1;

next.addEventListener('click', () => {
    ActiveList++;
    if ( ActiveList > circles.length) ActiveList = circles.length;
    update();
})

prev.addEventListener('click',() => {
    ActiveList--;
    if (ActiveList < 1) ActiveList = 1;
    update();
})


function  update() {
    circles.forEach((circle, idx) => {
        if (idx < ActiveList) circle.classList.add("active");
        else circle.classList.remove('active');
    })
    const actives = document.querySelectorAll('.active');
    // 进度条移动的宽度
    progress.style.width = (actives.length -1) / (circles.length -1) * 100 + "%";

    if (ActiveList === 1) {
        // 没有样式
        prev.disabled = true;
    }else if (ActiveList === circles.length) {
        next.disabled = true;
    }else {
        prev.disabled = false;
        next.disabled = false;
    }

}
