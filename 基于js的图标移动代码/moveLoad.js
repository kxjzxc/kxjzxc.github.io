window.onload=function(){
	//图标
	var oDiv=document.getElementsByTagName("div")[0];
	var aInput=document.getElementsByTagName("input");
	var oP=document.getElementsByTagName("p")[0];
	//移动到鼠标点击的位置
	aInput[0].onclick=function(event){
		//清空事件
		clearEvent();
		this.value +="(已激活)";
		oP.innerHTML="鼠标点击页面，图标将移动至鼠标位置！"
		//鼠标点击
		document.onclick=function(event){
			var event=event||window.event;
			//开始移动
			clearInterval(oDiv.timer);
			oDiv.timer=setInterval(function (){
                		var X=(event.clientX-oDiv.offsetLeft)/5;
                		var Y=(event.clientY-oDiv.offsetTop)/5;
                		//ceil()向上取整，floor()向下取整
                		X=X>0?Math.ceil(X):Math.floor(X);
                		Y=Y>0?Math.ceil(Y):Math.floor(Y);
               			if(event.clientX==oDiv.offsetLeft&&event.clientY==oDiv.offsetTop){
                        		clearInterval(oDiv.timer);
               	 		}
                		else {
                        		oDiv.style.left=oDiv.offsetLeft+X+"px";
                        		oDiv.style.top=oDiv.offsetTop+Y+"px";
                		}
        		},30);
			return false;
		}
	};
        //图标跟随鼠标移动轨迹移动
	aInput[1].onclick=function(event){
		clearEvent();
		this.value+="(已激活)";
		oP.innerHTML = "按住鼠标左键，在页面划动，图标将按照鼠标轨迹移动。"
	 	//鼠标的位置
		var aPos=[{x:oDiv.offsetLeft,y:oDiv.offsetTop}];
		//鼠标按下
		document.onmousedown=function(event){
			var event=event||window.event;
			//记录当前图标的位置
			aPos.push({x:event.clientX,y:event.clientY});
			document.onmousemove=function(event){
				var event=event||window.event;
				//记录路上鼠标的位置
				aPos.push({x:event.clientX,y:event.clientY});
				return false;
			}
			return false;
		}
		document.onmouseup=function(event){
			//初始化鼠标移动的事件
			document.onmousemove=null;
			//setInterval(code,time)可按照指定的周期（以毫秒计）来调用函数或计算表达式。
			var timer=setInterval(
				function(){
					//如果没有坐标需要移动了，停止周期函数
					if(aPos.length==0){
						clearInterval(timer);
						return;
					}
					//设置图标位置
					oDiv.style.left=aPos[0].x+"px";
					oDiv.style.top=aPos[0].y+"px";
					//弹出数组中的元素
					aPos.shift();
				},30);
		}
	}
	//清空事件
	function clearEvent(){
		document.onclick=null;
		document.onmousedown=null;
		document.onmousemove=null;
		document.onmouseup=null;
		for(var i=0;i<aInput.length;i++){
			aInput[i].value=aInput[i].value.replace("(已激活)","");
		}
	}

}
