const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);  // 当点击， 执行 generateJoke函数

generateJoke();  // 执行函数

function generateJoke() {
      const config = {
        headers: {
          Accept: 'application/json',
        },
      }
        // 发送请求
      fetch('https://icanhazdadjoke.com', config)
        .then((res) => res.json())
        .then((data) => {
          jokeEl.innerHTML = data.joke
        })
}




