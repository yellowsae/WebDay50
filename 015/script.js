const counters = document.querySelectorAll('.counter');

//  三个内容
counters.forEach(counter => {
    // 初始值为0 
    counter.innerHTML = '0';

    // 更新的函数 
    const UpdateCounter = () => {
        //  data-target 的属性值  12000
        const target = +counter.getAttribute('data-target');
        // 添加文本内容  +: 将字符串转为 number 
        const c = +counter.innerText; // counter.innerHTML = 0

        // 属性值  / 200 
        const increment = target / 200;

        // c = 0 ；  target = 12000 
        if (c < target) {
            // Math.ceil() 函数返回大于或等于一个给定数字的最小整数。
            counter.innerText = `${Math.ceil(c + increment)}`;
            //  1ms 执行 Update 
            setTimeout(UpdateCounter, 1);
        } else {
            counter.innerText = target; // 最后 0-> target 
        }
    };
    // 执行函数 
    UpdateCounter();
})