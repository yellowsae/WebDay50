const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile-img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const  animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
    // 卡片头部
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />';
    // H3 标签
    title.innerHTML = "Lorem ipsum dolor sit amet";
    // p 标签的文本
    excerpt.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis";
    // profile-img  头像
    profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt=""/>`;
    // name
    name.innerHTML = "John Doe";
    date.innerHTML = "Oct 08, 2020";

    // 循环删除
    animated_bgs.forEach((bg) => bg.classList.remove("animated_bg"));
    animated_bg_texts.forEach((bg) => bg.classList.remove("animated_bg_text"));

}
