//This is main application Or Entry application


//load express package ! to express variation.
var express = require('express');
var fs = require("fs");
//return application using call 'express' method
var app = express();




//Load File Part
//Add this sentence 'use method'
app.use(express.static('public'));

fs.exists('./public/GoogleMapAPI.html',function(exists){
    console.log(exists? 'Yes':'no');
});

//Router Part
//If user connect home, run function(req,res)...
app.get('/',function(req,res){

    res.send('hello home page');
});
//static version
app.get('/map',function(req,res){

    fs.readFile('./public/GoogleMapAPI.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data);
    })
    //res.send('hello home page');
});
//dynamic version
app.get('/map_dynamic',function(req,res){

    var output = `
    <!DOCTYPE html>
<html>
	<head>
		<!-- GoogleMapAPI is JavaScript Library 
		So, It is able to add to webpage using <script>Tag -->
		<script src="http://maps.googleapis.com/maps/api/js"></script>
		<script>

			//var loc1 = readFile('kyung');
			//var loc2 = readFile('./wi.txt');

            //var loc2 = readFile('./wi.txt');

			//var kuyng = loc1;
			//document.write(loc1[0]);

            //Set function for initialize map
			function initialize(){
				//Creating mapProp object for defining map attribute.
				var mapProp = {
					//Set center position of map
					center:new google.maps.LatLng(37.250943,127.028344),
					//zoom level
					zoom:8,
					//화면에 표시될 맵타입을 정의한다. (ROADMAP, SATELLITE, HYBRID...)
					mapTypeId:google.maps.MapTypeId.ROADMAP
				};
				//파라미터 mapProp을 이용하여 id가 googlemap인 map을 div태그안에 만드는 코드.
				var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);


				for(var i=0; i<1; i++)
				{
                    //Set Marker Location variable
                    var myCenter = new google.maps.LatLng(37,127);
					//MarkerTest
					var marker = new google.maps.Marker({
						position:myCenter,
						/*Encluded from the this code
						animation:google.maps.Animation.BOUNCE*/
						/*MarkerDraggable , but No.
						draggable:true*/
					});
					marker.setMap(map);


					google.maps.event.addListener(marker,'click',function(){
						var infowindow = new google.maps.InfoWindow({content:"HI?",size:new google.maps.Size(200,100)});

						infowindow.open(map,marker);

					})
                }

				
			}


			//DOM리스너를 추가하여 페이지가 로드될 때 initialize()함수가 실행되게 함.
			google.maps.event.addDomListener(window,'load',initialize);
		</script>
	</head>
	<body>
		<!-- 맵을 담기위한 div Tag Creating, CSS를 이용하여 사이즈를 설정-->
		<div id="googleMap" style="width:800px; height:800px;"></div>
	</body>

</html>`;
    res.send(output);
});



app.get('/login',function(req,res){
    res.send('Login please');
});

//Listening Part
//listen 3000port & if connected, print 'Connected 3000 port'
app.listen(3000,function (){
    console.log("Connected 3000 port");
});

