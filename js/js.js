

//? 切换网页， 延时 改变标题
document.addEventListener("visibilitychange", function(){
    // document.title = document.hidden ? "(oﾟvﾟ)ノHi-monika" : "♪(′∇`*)-欢迎回来";
    if (!document.hidden && document.title != 'just Asuka') {
        document.title =  "♪(′∇`*)-欢迎回来"
        setTimeout(function(){
            document.title = 'just Monika.'
        },2000)
    }
    else {
        // document.title = "♪(′∇`*)-欢迎回来"
        setTimeout(function(){
            document.title = "(oﾟvﾟ)ノHi-monika"
        },2000)
    }
});


// console.log(document.body.clientHeight)


//? 获取&&设置-页面垂直滚动值

function __getPageScrollY() {

    // if (top || Number(top) == 0) { //设置垂直滚动值
    //     if (self.pageYOffset) {
    //         self.pageYOffset = Number(top);
    //     }
    //     if (document.body) {
    //         document.body.scrollTop = Number(top);
    //     }
    //     return true;
    // }
    //  else { //获取垂直滚动值
    //     var yScroll = 0;
    //     if (self.pageYOffset) {
    //         yScroll = self.pageYOffset;
    //     } else if (document.body) {// all other Explorers
    //         yScroll = document.body.scrollTop;
    //     }
    //     return yScroll;
    // }
    var yScroll = 0;
    if (self.pageYOffset) {
        yScroll = self.pageYOffset;
    } else if (document.body) {
        yScroll = document.body.scrollTop;
    }
    return yScroll;
};



//? 滚动函数
const scrollFunc = function (ev) {  
    ev = ev || window.event;  
          
    if (ev.wheelDelta > 0) { //当滑轮向上滚动时  
        // alert('上滚')
        // let ts = __getPageScrollY()

        // console.log(ts);
        // console.log(window_height);
        
        // let loading_progress = Math.floor((ts/window_height) * 100)
        // console.log(loading_progress);

        let sc_top = __getPageScrollY()
        let sc_height = window.innerHeight
        // console.log(c);
        // console.log(ts);
        let loading_progress = Math.floor((sc_top/(window_height - sc_height)) * 100)
        
        // progress_bar.style.width = loading_progress + '%'
        progress_bar.style.width = `${loading_progress}%`
        
    }  
    if (ev.wheelDelta < 0) { //当滑轮向下滚动时  
        // alert('下滚')
        let sc_top = __getPageScrollY()
        let sc_height = window.innerHeight
        // console.log(c);
        // console.log(ts);
        let loading_progress = Math.floor((sc_top/(window_height - sc_height)) * 100)
        
        // progress_bar.style.width = loading_progress + '%'
        progress_bar.style.width = `${loading_progress}%`

        // console.log(loading_progress);
        // console.log(ts);
        // console.log(window_height-c);

    }  
    
} 
//? 注册事件
const window_height = document.body.clientHeight
let progress_bar = document.querySelector('#loading')
window.onmousewheel = document.onmousewheel = scrollFunc; 

