const fill = document.querySelector('.fill');
const emptys = document.querySelectorAll('.empty');

//  检测到拖动 
fill.addEventListener("dragstart", dragStart);
//  检测拖动停止
fill.addEventListener("dragend", dragEnd);

for (const empty of emptys) {
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

function dragStart() {
    //  添加一个属性名 hold 是添加图片边框
    // this 表示当前的元素
    this.className += "  hold";
    setTimeout(() => this.className = "invisible", 0);
}


function dragEnd() {
    this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.className += "  hovered";
}

function dragLeave() {
    this.className += "empty";
}

function dragDrop() {
    this.className = "empty";
    this.append(fill);
}