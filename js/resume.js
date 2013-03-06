/* Resume javascript by Joe Conradt */

// Raphael script
window.onload = function() 
{
	var originX = 400;
	var originY = 400;
	var distance = 200;
	var radius = 50;

	var paper = Raphael(document.getElementById("raphael"),700,700);
	var set = paper.set();

	var div = paper.image("images/devider.jpg",675,120,1,600);

	var lines = [ 
		paper.path("M 400 200 l 0 400"),
		paper.path("M 600 400 l -400 0"),
		paper.path("M 257 257 l 286 286"),
		paper.path("M 543 257 l -286 286")
	];

	for(var i = 0; i < lines.length; i++)
	{
		lines[i].attr("stroke","#ccc");
		set.push(lines[i]);
	}

	// I decided to use images instead of text, since they render smoother and don't "jiggle"
	var items = [
		[paper.circle(400, 200, 50),paper.image("images/experience.png", 393, 150, 15, 100),90,"#experience"],
		[paper.circle(600, 400, 50),paper.image("images/welcome.png", 550, 393, 100, 14),0,"#welcome"],
		[paper.circle(400, 600, 50),paper.image("images/education.png", 510, 226, 65, 63),270,"#welcome"],
		[paper.circle(200, 400, 50),paper.image("images/experience.png", 393, 1500, 15, 100),180,"#experience"],
		[paper.circle(257, 257, 50),paper.image("images/skills.png", 227, 227, 61, 61),135,"#skills"],
		[paper.circle(543, 257, 50),paper.image("images/education.png", 510, 226, 65, 63),45,"#education"],
		[paper.circle(257, 543, 50),paper.image("images/experience.png", 393, 1500, 15, 100),225,"#experience"],
		[paper.circle(543, 543, 50),paper.image("images/experience.png", 393, 1500, 15, 100),315,"#bio"]
	];

	for(var i = 0; i < items.length; i++)
	{
		items[i][0].data("rot", items[i][2]);
		items[i][1].data("rot", items[i][2]);
		set.push(items[i][0]);
		set.push(items[i][1]);
		items[i][0].attr("stroke", "#fff");
		if(i > 3){
			items[i][0].attr("fill", "#f93");
		}else{
			items[i][0].attr("fill", "#f63");
		}
		newListner(items[i][0],i);
		newListner(items[i][1],i);
	}
	function newListner(el,index)
	{
		el.click(function(){
			rotateSet(set,el.data("rot"));
			transition(items[index][3]);
		});
	}
}
function rotateSet(s,r)
{
	s.animate({transform: "r" + r + ", 400, 400"},10000,'elastic');
}

// jQuery
function transition(selector)
{
	$("#content div").fadeOut(2000);
	setTimeout(function(){
		$("#content div").hide();
		$(selector).fadeIn(2000);
	},2000);

	
}
$(document).ready(function(){
	$("#skills p").slideUp();
	$("#raphael").hide();

	$("#raphael").fadeIn(3000);
	//$("#raphael").show();


	$("#content div").hide();
	$("#welcome").delay(2000).fadeIn(3000);

	//$("#welcome").show();

	$(".arrow").click(function(){
		if($(this).attr("src") == "images/arrow.png"){
			$(".arrow").attr("src", "images/arrow.png");
			$(".skillDescription").slideUp();
			$(this).attr("src", "images/arrow_down.png");
			$(this).parent().next(".skillDescription").slideDown();
		}else{
			$(this).attr("src", "images/arrow.png");
			$(this).parent().next(".skillDescription").slideUp();
		}
	});

});


