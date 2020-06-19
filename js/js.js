
//? 切换网页， 延时 改变标题
document.addEventListener("visibilitychange", function(){
    // document.title = document.hidden ? "(oﾟvﾟ)ノHi-monika" : "♪(′∇`*)-欢迎回来";
    if (document.hidden ) {
        setTimeout(function(){
            document.title = "(oﾟvﾟ)ノHi-~~~~~~~~~~~~~~~~~"
        },2000)
    }
    else {
        document.title =  "♪(′∇`*)-欢迎回来"
        setTimeout(function(){
            document.title = 'just Monika'

        },2000)
    }
});


// console.log(document.body.clientHeight)


//? 获取&&设置-页面垂直滚动值

function __getPageScrollY(top) {

    if (top || Number(top) == 0) { //设置垂直滚动值
        if (self.pageYOffset) {
            self.pageYOffset = Number(top);
        }
        if (document.body) {
            document.body.scrollTop = Number(top);
        }
        return true;
    }
     else { //获取垂直滚动值
        var yScroll = 0;
        if (self.pageYOffset) {
            yScroll = self.pageYOffset;
        } else if (document.body) {
            yScroll = document.body.scrollTop;
        }
        return yScroll;
    }
};



//? 滚动函数
const scrollFunc = function (ev) {  
    ev = ev || window.event;  
          
    if (ev.wheelDelta > 0) { 

        let sc_top = __getPageScrollY()
        let sc_height = window.innerHeight
        let loading_progress = Math.floor((sc_top/(window_height - sc_height)) * 100)    
        // progress_bar.style.width = loading_progress + '%'
        progress_bar.style.width = `${loading_progress}%`
        
    }  
    if (ev.wheelDelta < 0) { //当滑轮向下滚动时  
        let sc_top = __getPageScrollY()
        let sc_height = window.innerHeight
        let loading_progress = Math.floor((sc_top/(window_height - sc_height)) * 100)
        progress_bar.style.width = `${loading_progress}%`

    }  
    
} 
//? 注册事件
const window_height = document.body.clientHeight
let progress_bar = document.querySelector('#loading')
window.onmousewheel = document.onmousewheel = scrollFunc; 

var app = new Vue({
    el:'#app',
　　data() {
　　　　return {
　　　　　　countDownList: '00天00时00分00秒',
　　　　　　actEndTime: '2018-11-19 18:50:00'
　　　　};
　　},
　　created() {
　　　　this.countDown();

　　},

　　methods: {
　　　　timeFormat(param) {
　　　　　　return param < 10 ? '0' + param : param;
　　　　},
　　　　countDown(it) {
　　　　　　var interval = setInterval(() => {
　　　　　　　　// 获取当前时间，同时得到活动结束时间数组
　　　　　　　　let newTime = new Date().getTime();
　　　　　　　　// 对结束时间进行处理渲染到页面
　　　　　　　　let endTime = new Date(this.actEndTime).getTime();
　　　　　　　　let obj = null;
　　　　　　　　// 如果活动未结束，对时间进行处理
　　　　　　　　if (endTime - newTime > 0) {
　　　　　　　　　　let time = (endTime - newTime) / 1000;
　　　　　　　　　　// 获取天、时、分、秒
　　　　　　　　　　let day = parseInt(time / (60 * 60 * 24));
　　　　　　　　　　let hou = parseInt(time % (60 * 60 * 24) / 3600);
　　　　　　　　　　let min = parseInt(time % (60 * 60 * 24) % 3600 / 60);
　　　　　　　　　　let sec = parseInt(time % (60 * 60 * 24) % 3600 % 60);
　　　　　　　　　　obj = {
　　　　　　　　　　　　day: this.timeFormat(day),
　　　　　　　　　　　　hou: this.timeFormat(hou),
　　　　　　　　　　　　min: this.timeFormat(min),
　　　　　　　　　　　　sec: this.timeFormat(sec)
　　　　　　　　　　};
　　　　　　　　} else { // 活动已结束，全部设置为'00'
　　　　　　　　　　obj = {
　　　　　　　　　　　　day: '00',
　　　　　　　　　　　　hou: '00',
　　　　　　　　　　　　min: '00',
　　　　　　　　　　　　sec: '00'
　　　　　　　　　　};
　　　　　　　　　　clearInterval(interval);
　　　　　　　　}
　　　　　　　　this.countDownList = obj.day + '天' + obj.hou + '时' + obj.min + '分' + obj.sec + '秒';
　　　　　　}, 1000);
　　　　}
　　}
        
        

})
