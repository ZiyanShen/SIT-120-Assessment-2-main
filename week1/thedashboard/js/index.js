window.onload=function(){
	var categories = document.getElementsByClassName('category');


	for (var i = 0; i < categories.length; i++){
	
		categories[i].addEventListener('click',function(e){
			e.target.style.color = e.target.style.color==="green"?'#658ec6':'green';
			
		})
	}
	
	
	var acv = document.getElementById('acv');
	acv.addEventListener('click',function(e){
			alert("You clicked on movie called Assassin's Creed Valhalla");
			
		});
	
	var saba = document.getElementById('saba');
	saba.addEventListener('click',function(e){
			alert("You clicked on movie called Sackboy: A Big Adventure");
			
		});
	
	
	var spiderman = document.getElementById('spiderman');
	spiderman.addEventListener('click',function(e){
			alert("You clicked on movie called Marvel's Spider-Man: Miles Morales");
			
		});
	
	
	var mainheading = document.getElementById('mainheading');
	mainheading.addEventListener('click',function(e){
			if (e.target.style.color !== "red"){
				e.target.style.color = "red";
			} else {
				e.target.style.color = "pink";
			}
			
		});

}

