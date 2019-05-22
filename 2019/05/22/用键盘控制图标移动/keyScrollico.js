window.onload=function(){
	var box=document.getElementById("box");
	//网页可见区域宽，兼容各种浏览器
	var MapWidth=document.body.clientWidth||document.documentElement.clientWidth;
	//网页可见区域高，兼容各种浏览器
	var MapHeight=document.body.clientHeight||document.documentElement.clientHeight;
	var timer=null;
	document.onkeydown=function(ev){
		var ev=ev||window.event;
		clearInterval(timer);
		timer=setInterval(function(){
			switch(ev.keyCode){
				case 37: 
					if(box.offsetLeft>0){
						box.style.left=box.offsetLeft-10+"px";
					}
					break;
				case 38:
					if(box.offsetTop>0){
						box.style.top=box.offsetTop-10+"px";
					}
					break;
				case 39:
					if(box.offsetLeft<MapWidth-box.offsetWidth){
						box.style.left=box.offsetLeft+10+"px";
					}
					break;
				case 40:
					if(box.offsetTop<MapHeight-box.offsetHeight){
						box.style.top=box.offsetTop+10+"px";
					}
					break;
			}
		},10);
	}
	document.onkeyup=function(){
		clearInterval(timer);
	}
}
					
