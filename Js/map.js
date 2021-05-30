var map = new BMap.Map("container2");
map.centerAndZoom(new BMap.Point(113.330979,22.815475), 15);
map.enableScrollWheelZoom();//设置鼠标滚动缩放百度地图
var myP1 = new BMap.Point(104.063684,30.663607); 
//起点-成都
var myP2 = new BMap.Point(100.247688,29.989647);    
//途径-理塘
var myP3 = new BMap.Point(101.811637,30.076874);
//途径-折多山
var myP4 = new BMap.Point(99.027034,29.80322);
//途径-巴塘
var myP5 = new BMap.Point(95.072441,30.101461);
//途径-通麦大桥
var myP6 = new BMap.Point(94.456878,29.58547);
//途径-林芝
var myP7 = new BMap.Point(91.125038,29.660346);
//终点-拉萨    
window.run = function (){    
map.clearOverlays();                        
//清除地图上所有的覆盖物    
var driving = new BMap.DrivingRoute(map);           //创建驾车实例    
driving.search(myP1, myP2);                         //第一个驾车搜索    
driving.search(myP2, myP3);                         //第二个驾车搜索
driving.search(myP3, myP4);                         //第三个驾车搜索
driving.search(myP4, myP5);                         //第四个驾车搜索
driving.search(myP5, myP6);                         //第五个驾车搜索
driving.search(myP6, myP7);                         //第六个驾车搜索     
driving.setSearchCompleteCallback(function(){
    var pts = driving.getResults().getPlan(0).getRoute(0).getPath();        //通过驾车实例，获得一系列点的数组        
    var polyline = new BMap.Polyline(pts);             
    map.addOverlay(polyline);                
    var m1 = new BMap.Marker(myP1);         //创建7个marker        
    var m2 = new BMap.Marker(myP2);        
    var m3 = new BMap.Marker(myP3);
    var m4 = new BMap.Marker(myP4);
    var m5 = new BMap.Marker(myP5);
    var m6 = new BMap.Marker(myP6);
    var m7 = new BMap.Marker(myP7);         
    map.addOverlay(m1);        
    map.addOverlay(m2);        
    map.addOverlay(m3);
    map.addOverlay(m4);
    map.addOverlay(m5);
    map.addOverlay(m6);
    map.addOverlay(m7);                
    var lab1 = new BMap.Label("Chengdu,<br>Sichuan",{position:myP1});        //创建7个label        
    var lab2 = new BMap.Label("Litang",{position:myP2});
    var lab3 = new BMap.Label("Zheduo Mountain",{position:myP3});        
    var lab4 = new BMap.Label("Batang",{position:myP4});
    var lab5 = new BMap.Label("Tongmai Bridge",{position:myP5});
    var lab6 = new BMap.Label("Nyingchi",{position:myP6});
    var lab7 = new BMap.Label("Potala Palace,<br>Tibet",{position:myP7});           
    map.addOverlay(lab1);        
    map.addOverlay(lab2);        
    map.addOverlay(lab3);
    map.addOverlay(lab4);
    map.addOverlay(lab5);
    map.addOverlay(lab6);
    map.addOverlay(lab7);                 
    setTimeout(function(){            
        map.setViewport([myP1,myP2,myP3,myP4,myP5,myP6,myP7]);          //调整到最佳视野        
    },1000);            
});}