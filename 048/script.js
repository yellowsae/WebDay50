const container = document.querySelector('.container');
const unsplashURL = 'https://source.unsplash.com/random/';  // 随机返回一张图片
const rows = 5;

for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img');
    img.src = `${unsplashURL}${getRandomSize()}`;  // src
    container.appendChild(img)
}
function getRandomSize() {
    return `${getRandomNr()} x ${getRandomNr()}`
}
function getRandomNr() {
    return Math.floor(Math.random() * 10 ) + 300;
}

