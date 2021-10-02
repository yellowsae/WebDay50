const addBtn = document.getElementById('add');

const notes = JSON.parse(localStorage.getItem('notes'))

if (notes) {
    notes.forEach(note => addNewNote(note));
}


addBtn.addEventListener('click', () => addNewNote());

function addNewNote(text = "") {
    // 创建标签 
    const note = document.createElement('div');
    // 添加元素 
    note.classList.add('note');
    note.innerHTML = `
    <div class="tools">
        <button class="edit"> <i class="fas fa-edit"></i></button>
        <button class="delete"> <i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `;

    const editBtn = document.querySelector('.edit');
    const deleteBtn = document.querySelector('.delete');
    const main = document.querySelector('.main');
    const textArea = document.querySelector('textarea');

    textArea.value = text;
    //  写在 main 中 
    main.innerHTML = marked(text);

    deleteBtn.addEventListener("click", () => {
        note.remove();
        updateLS();
    });

    editBtn.addEventListener("click", () => {
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    });

    textArea.addEventListener("input", (e) => {
        const { value } = e.target;

        main.innerHTML = marked(value);

        updateLS();
    });

    document.body.appendChild(note);
}


function updateLS() {
    const notesText = document.querySelectorAll('textarea');

    const notes = [];

    notesText.forEach(note => notes.push(note.value));

    localStorage.setItem("notes", JSON.stringify(notes));
}