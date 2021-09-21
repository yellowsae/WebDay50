const APIURL = 'https://api.github.com/users/';
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');


form.addEventListener("submit", (e) => {
    // ？ e.preventDefault()
    e.preventDefault();

    const user = search.value;
    if (user) {
        getUser(user);
        // 置空
        search.value = "";
    }
})

// 获取到name
async function getUser(username) {
    try {
        const {data} = await axios(APIURL + username);
        // 创建用户信息
        createUserCard(data);
        getRepos(username);
    }catch(err) {
        if(err.response.status === 404) {
            createErrorCard('No profile with this username');
        }
    }
}

// 仓库
async function getRepos(username) {
    try {
        const {data} = await axios(APIURL + username + "/repos?sort=created");
        // 添加仓库
        addReposToCard(data);
    }catch(err) {
        createErrorCard("Problem fetching repos");
    }
}

// 创建用户信息

function createUserCard(user) {
    // 创建 文档
    const cardHtml = `
    <div class="card">
        <div>
            <img src="${user.avatar_url}" alt="${user.name}" class="avatar" />
        </div>
        <div class="user-info">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>
            <ul>
                <li>${user.followers}<strong>Followers</strong></li>
                <li>${user.following}<strong>Following</strong></li>
                <li>${user.public_repos}<strong>Repos</strong></li>
            </ul>
            <div id="repos"></div>
        </div>
    </div>
    `
    main.innerHTML = cardHtml;
}


// 报错
function createErrorCard(msg) {
    const cardHTML  = `
        <div class="card">
        <h1>${msg}</h1>
</div>
    `
    main.innerHTML = cardHTML;
}

// 仓库添加到内容
function addReposToCard(repos) {
    // 函数创建的 repos
    const reposEl = document.getElementById('repos');
    // JSON仓库对象，
    repos
        .slice(0, 5) // 获取5个
        .forEach(repo => {  // 进入单个仓库
            // 创建标签
            const repoEl = document.createElement('a');
            repoEl.classList.add('repo'); // 添加属性
            repoEl.href = repo.html_url;  // 仓库地址
            repoEl.target = "_blank";  // 点击 会打开另一个窗口转到仓库地址
            repoEl.innerHTML = repo.name;  // 仓库名

            // 添加到文档
            reposEl.appendChild(repoEl);
        })
}

