const fill = document.querySelector('.fill');
const emptys = document.querySelectorAll('.empty');

//  检测到拖动 
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const empty of emptys) {
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

function dragStart() {
    //  添加一个属性名 
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