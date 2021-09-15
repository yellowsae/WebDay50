
// 接口 APT
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

// 获取初始电影 , 调用API
getMovies(API_URL);
async function getMovies(url) {
    // 请求 返回 res
    const res = await fetch(url);
    // 转为  JS关系 data
    const data = await res.json();
    // 传递参数
    showMovies(data.results);  // API返回的 results
}

/*
"results": [
        {
        "adult": false,
        "backdrop_path": "/vs63P2xYUGn3QmQ4JnkX1MY4BrO.jpg",
        "genre_ids": [
        28,
        878,
        53
        ],
        "id": 848278,
        "original_language": "en",
        "original_title": "Jurassic Hunt",
        "overview": "Female adventurer Parker joins a crew of male trophy hunters in a remote wilderness park. Their goal: slaughter genetically recreated dinosaurs for sport using rifles, arrows, and grenades. After their guide is killed by raptors, the team tries to escape the park – but the hunters quickly become the hunted. Even worse, the park’s manager suspects Parker of being a spy and sends a hit squad after her. This battle’s about to become primitive!",
        "popularity": 2799.933,
       "poster_path": "/CGJAj5kNWQZypNgUSTTQrFlnG.jpg",
        "release_date": "2021-09-01",
   标题  "title": "Jurassic Hunt",
        "video": false,
    评分  "vote_average": 4.7,
        "vote_count": 64
        },
* */

function showMovies(movies) {  // results
    // 初始化
    main.innerHTML = '';
    // 循环 api 数据
    movies.forEach((movie) => {
        // 标题   img路径    评分     简介
        const { title, poster_path, vote_average, overview} = movie;
        // 创建 div
        const movieEl = document.createElement('div');
        // 循环添加 movie 属性
        movieEl.classList.add('movie');
        // 添加内容
        movieEl.innerHTML =
            // IMG_PATH： url 路径 + JSON 返回的路径
            `
           <img src="${IMG_PATH + poster_path}" alt="${title}">
           
           <div class="movie-info">
                <h3>${title}</h3>
<!--         vote_average: 评分        -->
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
           </div>
           <div class="overview">
                <h3>Overview</h3>
<!--                简介 -->
                ${overview}
           </div>
            `
        // 在 main 添加 movieEl
        main.appendChild(movieEl);
    })
}


function getClassByRate(vote) {
    if (vote >= 8) {
        return "green";
    }else if (vote >= 5) {
        return "orange";
    }else {
        return "red";
    }
}

// 搜索
form.addEventListener('submit', (e) => {
    e.preventDefault();  // 回调
    const searchTerm = search.value;  // search 表单得到得值
    // 使用 Search 的 api + search的值
    if (searchTerm && searchTerm !== '') {
        // 调用 getMovies() ; 展示搜索出来的内容
        getMovies(SEARCH_API + searchTerm);
        // 将 search = ’‘ 制空
        search.value = '';
    }else {
        window.location.reload();
    }
})