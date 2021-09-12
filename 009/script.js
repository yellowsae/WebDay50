const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    // 创建button 元素
    const btn = document.createElement('button');
    // 每一个button 元素都 创建  btn 元素
    btn.classList.add('btn');
    // 添加文本内容
    btn.innerText = sound;
    // 监听元素属性
    btn.addEventListener('click', () => {
        //
        stopSongs();
        // 查找按钮
        document.getElementById(sound).play();  // .play() 是什么？
    })
    //  插入节点 ：  父节点.appendChild("创建的节点")
    document.getElementById('buttons').appendChild(btn);
})

//
function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);  // 查找按钮
        song.pause();  // .pause() ？
        song.currentTime = 0;  // 元素停止时间
    })
}