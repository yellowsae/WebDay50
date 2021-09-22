const toasts = document.getElementById('toasts');
const button = document.getElementById('button');


// 文本内容
const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

// 添加的元素
const types = ['info', 'success', 'error']

button.addEventListener("click", () => createNotification());

function createNotification(message = null , type = null ) {
    // 创建 div
    const notif = document.createElement("div");
    // 添加类名
    notif.classList.add("toast");
    // 添加 types 中 加到 类名
    notif.classList.add(type ? type : getRandomType());
    // 返回 messages中的文本内容
    notif.innerText = message ? message : getRandomMessage();

    // 添加元素
    toasts.appendChild(notif);

    // 三秒后移除元素
    setTimeout(() => {
        notif.remove();
    }, 3000)
}


function getRandomType() {
    // 随机返回
    return types[Math.floor(Math.random() * types.length)]
}

// 随机返回的数字
function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]

}