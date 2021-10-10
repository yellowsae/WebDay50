
const contents =  document.querySelectorAll('.content');
const listItems = document.querySelectorAll('nav ul li');

listItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        hideAllContents()
        hideAllItems()

        // 点到那个 就加上  active
        item.classList.add('active');
        // 图片加上 show 标签
        contents[index].classList.add('show');
    })
})

// 移除之前的 show 标签
function hideAllContents() {
    contents.forEach(content => content.classList.remove('show'));
}

function hideAllItems() {
    contents.forEach(item => item.classList.remove('active'));

}