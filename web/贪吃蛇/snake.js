<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>//地图大小
var map={
	width:900,
	height:500
};
var box={
	width:25,
	height:25
};
//格子个数
var boxNums={
	wNums:map.width/box.width,
	hNums:map.height/box.height,
	nums:0
};
boxNums.nums=boxNums.wNums*boxNums.hNums;
//格子大小
//蛇的身体
var snake=[];
//其他部分
var other=[];
//周期
var period=200;
//蛇头朝向,默认向右
//0 L;1 U;2 R;3 D
var dir=2;
//页面加载完成后立即执行
window.onload=function(){
	mapInit();
	createFood();
}

function start(){
	//周期调用函数：每隔400ms调用一次snakeMove
	setInterval(snakeMove,period);
	//按键松开时触发事件，按照所按键改变朝向，不能向后
	document.onkeyup=function(e){
		for(var i=0;i<4;i++){ if(e.keycode="=i+37&&dir!=(i+2)%4){" dir="i;break;" } function stop(){ window.location.href="window.location.href;" 地图初始化 mapinit(){ 获取id名为“map”的块元素，并赋予样式长宽 var map_target="document.getElementById("map");" map_target.style.width="map.width+"px";" map_target.style.height="map.height+"px";" newspan="null;" for(var i="1;i<=boxNums.nums;i++){" 创造方块，并赋予样式 newspan.style.width="box.width+"px";" newspan.style.height="box.height+"px";" newspan.id="i;" appendchild():往元素中添加新元素 map_target.appendchild(newspan); 蛇的位置初始化 if(i<="5){" newspan.classname="snake" ; snake.push(newspan); else { other.push(newspan); push():往数组的最后添加元素 随机产生一个食物 createfood(){ math.floor()向下取整，math.random()取0～1之间的随机数，other.length:other数组的长度 x="Math.floor(Math.random()*other.length);" other[x].classname="food" 蛇移动 snakemove(){ 蛇头的id headid="parseInt(snake[snake.length-1].id);" 按照当前朝向向前移动一步 switch(dir){ case 0: headid--; if(headid%boxnums.wnums="=0)headId+=boxNums.wNums;" break; 1: headid-="boxNums.wNums;" if(headid<="0)headId+=boxNums.nums;" 2: headid++; 3: headid+="boxNums.wNums;" if(headid>=boxNums.nums)headId-=boxNums.nums;
			break;
		default:break;
	}
	//找到下一步元素的Id
	var newHead=document.getElementById(headId);
	//如果吃到了蛇身
	for(var i=1;i</4;i++){>