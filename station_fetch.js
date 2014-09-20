$(document).ready(function() {
		var test_links=["http://s22.postimg.org/q9hqapkkh/image.jpg",
					"http://s12.postimg.org/kip14jlfh/image.jpg",
					"http://s30.postimg.org/b7badhiip/image.jpg",
					"http://s30.postimg.org/mhhsdnrpd/image.jpg"];
		var fnl_links=["http://s29.postimg.org/z86549pp3/image.jpg",
				"http://s28.postimg.org/xas06y2zh/image.jpg",
				"http://s30.postimg.org/hqr0c543l/image.jpg",
				"http://s11.postimg.org/gb7h6b2pf/image.jpg",
				"http://s14.postimg.org/epgcvxy1t/image.jpg",
				"http://s4.postimg.org/o4f1kd3l9/image.jpg",
				"http://s21.postimg.org/bcb3fbdef/image.jpg",
				"http://s21.postimg.org/mqzt242af/image.jpg",
				"http://s8.postimg.org/xa8fu3a9h/image.jpg",
				"http://s27.postimg.org/z833yu3dv/image.jpg",
				"http://s27.postimg.org/kmuxcxh2b/image.jpg",
				"http://s4.postimg.org/qy3zwqx65/image.jpg"	
				];
		var rand = Math.floor(Math.random()*12);
		$('.ui-page').css('background-image', 'url('+fnl_links[rand]+')', 'no-repeat');
		if(screen.width>=480)
			$('.ui-page').css('background-size','cover');

							});

	
	function stop(){
		var mediaElement = document.getElementById("myMediaElementID");
		mediaElement.pause();
		mediaElement.src = "";}
	function playtufan(){
		var mediaElement = document.getElementById("myMediaElementID");
		mediaElement.src = "http://107.178.110.114:7600/;";
		mediaElement.play();
		}
	function playgungun(){
		var mediaElement = document.getElementById("myMediaElementID");
		mediaElement.src = "http://184.107.144.218:8040/;"
		mediaElement.play();
		}
	function playlemon(){
		var mediaElement = document.getElementById("myMediaElementID");
		mediaElement.src = "http://office.mcc.com.bd:8000/;"
		mediaElement.play();
		}
	function playsodes(){
		var mediaElement = document.getElementById("myMediaElementID");
		mediaElement.src = "http://radioswadesh.com:8002/;"
		mediaElement.play();
		}
	function playektara(){
		var mediaElement = document.getElementById("myMediaElementID");
		mediaElement.src = "http://50.7.98.106:8520/;"
		mediaElement.play();
		}
	function playtolpar(){
		var mediaElement = document.getElementById("myMediaElementID");
		mediaElement.src = "http://neon.wavestreamer.com:6129/;"
		mediaElement.play();
		}
	function playhoicoi(){
		var mediaElement = document.getElementById("myMediaElementID");
		mediaElement.src = "http://66.85.136.195:7019/;"
		mediaElement.play();
		}
	function playoniom(){
		var mediaElement = document.getElementById("myMediaElementID");
		mediaElement.src = "http://98.238.36.218:8000/;"
		mediaElement.play();
		}
	function playabc(){
		var mediaElement = document.getElementById("myMediaElementID");
		mediaElement.src = "http://live.abcradiobd.fm:8282/;"
		mediaElement.play();
		}
	function playtoday(){
		var mediaElement = document.getElementById("myMediaElementID");
		mediaElement.src = "http://220.247.162.146:7170/;"
		mediaElement.play();
		}
	function playdhaka(){
		var mediaElement = document.getElementById("myMediaElementID");
		mediaElement.src = "http://118.179.219.244:8000/;"
		mediaElement.play();
		}
	function playsadhin(){
		var mediaElement = document.getElementById("myMediaElementID");
		mediaElement.src = "http://184.107.144.218:8240/;"
		mediaElement.play();
		}
	function playmoyna(){
		var mediaElement = document.getElementById("myMediaElementID");
		mediaElement.src = "http://66.85.136.195:7011/;"
		mediaElement.play();
		}
	function playsongi(){
		var mediaElement = document.getElementById("myMediaElementID");
		mediaElement.src = "http://66.85.136.195:7031/;"
		mediaElement.play();
		}
	