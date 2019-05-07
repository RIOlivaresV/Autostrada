var scrollGeneral;
$(window).scroll(function(){
		 console.log($(this).scrollLeft());
		 scrollGeneral = $(this).scrollLeft();
		 if (scrollGeneral<4000) {
		 	document.body.style = "overflow-y: hidden;";
		 	window.scrollBy(0,-300);
		 }
		 else{
		 	document.body.style = "overflow-y: visible;"
		 }
		iconMove(scrollGeneral);
		menuMove(scrollGeneral);
		aboutUsMove(scrollGeneral);
		teamMove(scrollGeneral);
		review1(scrollGeneral);
		review2(scrollGeneral);
		review3(scrollGeneral);
		opacityMap(scrollGeneral);
		});
$(function() {
		    // $("html, body, *").mousewheel(function(event, delta) {
		    // 	// if (scrollGeneral<4070) {
		    // 		// console.log($(this).scrollTop(10));
			   //      this.scrollLeft -= (delta * 3	);
			   //      event.preventDefault();
			   //  	// }
		    // });
});

	function year(){
		document.getElementById("year").innerHTML= new Date().getFullYear();
	}

	// mouse Over
		function facebookOver(){
			document.getElementById("facebookImg").src="DESIGN/TOOLKIT/Facebook_Hover@2x.png";
		}
		function facebookOut(){
			document.getElementById("facebookImg").src="DESIGN/TOOLKIT/Facebook_Active@2x.png";
		}
		function twitterOver(){
			document.getElementById("twitterImg").src="DESIGN/TOOLKIT/Twitter_Hover@2x.png";
		}
		function twitterOut(){
			document.getElementById("twitterImg").src="DESIGN/TOOLKIT/Twitter_Active@2x.png";
		}
		function instagramOver(){
			document.getElementById("instagramImg").src="DESIGN/TOOLKIT/Instagram_Hover@2x.png";
		}
		function instagramOut(){
			document.getElementById("instagramImg").src="DESIGN/TOOLKIT/Instagram_Active@2x.png";
		}


		

	function iconMove(scrollValue){
		
		var x= 1-((scrollValue*.88)/1320);
		if (scrollValue<1320) {
			// 		
			document.getElementById("logo").style="transform :translate(-"+(scrollValue*41)/1320+"%,-"+(scrollValue*24)/1320+"%) scale("+x+")";
			// $("#logo").css("transform", 'scale('+x+')');
		}
		else{
			document.getElementById("logo").style="transform :translate(-41%,-24%) scale(0.12)";
		}
		
	}

	function menuMove(scrollValue){
		if (scrollValue < 1320) {
			document.getElementById("horizontalNavigation").style="transform :translate(-"+((scrollValue-120)*100)/1200+"%";
		}
		else{
			document.getElementById("horizontalNavigation").style="transform :translate(-100%)";
		}
	}

	function aboutUsMove(scrollValue){
		if (scrollValue < 1320) {
			var x= 100-((scrollValue*100)/1320);
			var y= 105-((scrollValue*105)/1320);
			document.getElementById("aboutUs").style="transform :translate(-"+x+"%,"+y+"%)";
		}
		else{
			document.getElementById("aboutUs").style="transform :translate(0%,0%)";
		}
	}

	function teamMove(scrollValue){
		if (scrollValue < 1320) {
			var x= 150-((scrollValue*(150))/1320);
			var y= 220-((scrollValue*(220))/1320);
			document.getElementById("team").style="transform :translate(-"+y+"%,-"+x+"%)";
		}
		else{
			document.getElementById("team").style="transform :translate(0%,0%)";
		}
	}

	function review1(scrollValue){
		if (scrollValue < 2650) {
			var y= 300-((scrollValue*(300))/2650);
			document.getElementById("reviewsDown").style="transform :translate(0%,"+y+"%)";
		}
		else{
			document.getElementById("reviewsDown").style="transform :translate(0%,0%)";
		}
	}

	function review2(scrollValue){
		if (scrollValue < 2650) {
			var y= 400-((scrollValue*(400))/2650);
			document.getElementById("reviewsMeddle").style="transform :translate(0%,"+y+"%)";
		}
		else{
			document.getElementById("reviewsMeddle").style="transform :translate(0%,0%)";
		}
	}

	function review3(scrollValue){
		if (scrollValue < 2650) {
			var y= 500-((scrollValue*(500))/2650);
			document.getElementById("reviewsUp").style="transform :translate(0%,"+y+"%)";
		}
		else{
			document.getElementById("reviewsUp").style="transform :translate(0%,0%)";
		}
	}

	function opacityMap(scrollValue){
		if (scrollValue < 2700) {
			document.getElementById("maps").style="opacity: 0;";
		}
		else if (scrollValue > 2700 && scrollValue < 4070) {
			var y= (((scrollValue-2700)*(0.5))/1100);
			document.getElementById("maps").style="opacity: "+y+";";
		}
		else if (scrollValue > 4070) {
			document.getElementById("maps").style="opacity: 0.5;";
		}

	}


	function OpenMap(location){
		switch(location){
			case "Main":
				document.getElementById("main").style= "opacity:0.3";
		    	var center= { lat: 49.241718, lng:-123.101852};
	    		var map = new google.maps.Map(document.getElementById('map'),{zoom: 15, center: center});
	            var marker = new google.maps.Marker({position: center, map: map});
				break;
			case "Downtown":
				document.getElementById("main").style= "opacity:0.3";
				var center= { lat: 49.282596, lng:-123.111950};
	    		var map = new google.maps.Map(document.getElementById('map'),{zoom: 15, center: center});
	            var marker = new google.maps.Marker({position: center, map: map});
				break;
			case "Granville":
				document.getElementById("main").style= "opacity:0.3";
				var center= { lat: 49.271867, lng:-123.134939};
	    		var map = new google.maps.Map(document.getElementById('map'),{zoom: 15, center: center});
	            var marker = new google.maps.Marker({position: center, map: map});
				break;
		}
		document.getElementById("MapConteiner").style= "z-index: 1	";
	}

	function hideMap(){
		document.getElementById('map').innerHTML="";
		document.getElementById("main").style= "opacity:1";
		document.getElementById("MapConteiner").style= "z-index: -1	";
	}