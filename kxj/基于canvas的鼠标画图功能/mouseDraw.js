window.onload=function(){
 //获取<canvas>元素
 var can=document.getElementById("can");
 //创建画布对象
 var con=can.getContext("2d");
 //获取按键元素，此处是通过标签名得到的变量，是数组变量
 var inp=document.getElementsByTagName("input");
 //清空画布.canvas每当高度或宽度被重设时，画布内容就会被清空,（此方法仅限需要清除全部内容的情况）
 inp[0].onclick=function(){
  can.width=can.width;
 }
 //当用户按下鼠标按钮执行Javascript代码
 can.onmousedown=function(ev){
  //兼容各个浏览器。
  //在FireFox浏览器中，事件绑定的函数要获取到事件本身，需要从函数中传入，而IE等浏览器则可以直接使用event或者window.event得到事件本身。
  var ev=ev||event;
  /* moveTo:定义一个起点
    client系列:可视区域
    clientX： 相对文档的水平坐标
    clientY： 相对文档的垂直坐标
    offsetLeft： 对象相对于版面或由 offsetParent 左侧位置
    offsetTop：对象相对于版面或由 offsetTop 顶端位置
  */
//document.write(ev.clientX-can.offsetLeft);
  con.moveTo(ev.clientX-can.offsetLeft,ev.clientY-can.offsetTop);
  //当鼠标指针移动到图像上时执行一段Javascript代码
  document.onmousemove=function(ev){
   var ev=ev||event;
   //lineTo() 方法添加一个新点，然后创建从该点到画布中最后指定点的线条（该方法并不会创建线条）。
   con.lineTo(ev.clientX-can.offsetLeft,ev.clientY-can.offsetTop);
   //stroke() 方法会实际地绘制出通过 moveTo() 和 lineTo() 方法定义的路径。默认颜色是黑色。
   con.stroke();
  }
  //当鼠标释放时执行一段Javascript代码
  document.onmouseup=function(){
   //鼠标释放后这些事件不再触发函数
   document.onmousedown=document.onmousemove=null;
  }
 }
}

</canvas>