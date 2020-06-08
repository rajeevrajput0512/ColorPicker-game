var initiallevel=9;
var colorarr= generator(initiallevel);
var yoursquare= document.querySelectorAll(".square");
var headline = document.querySelector("span");
var pickedcolor =colorarr[Math.floor(Math.random()*(initiallevel-1)+1)] ;
var resulant = document.querySelector("#patel")
var headingbackground = document.querySelector("h1");
var newgame = document.querySelector(".newer");
var mode = document.querySelectorAll(".bata");
mode[2].classList.add("selected");
for( var p=0 ; p< mode.length;p++)
{   
	mode[p].addEventListener("click",function()
	{   
		mode[0].classList.remove("selected");
		mode[1].classList.remove("selected");
		mode[2].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent==="easy")
		{
			initiallevel=3;
		}
		else if(this.textContent==="mediam")
		{
  
             initiallevel=6;
  		}

		else
		{
			initiallevel=9;
		}
		newgame.textContent="new game";
		resulant.textContent="";
		colorarr= generator(initiallevel);
		headingbackground.style.backgroundColor ="steelblue";
		pickedcolor=colorarr[Math.floor(Math.random()*(initiallevel-1)+1)] ;
        headline.textContent=pickedcolor;
        for( var i=0 ; i< yoursquare.length ;i++)
        {
        	if(colorarr[i])
        	{   yoursquare[i].style.background="block";
        		yoursquare[i].style.background= colorarr[i];
        	}
        	else{
        		yoursquare[i].style.background="none";
        	}
        }
	})
}

newgame.addEventListener("click", function()
{      newgame.textContent="new game";
       resulant.textContent="";
	   headingbackground.style.backgroundColor ="steelblue";
       colorarr= generator(initiallevel);
       pickedcolor=colorarr[Math.floor(Math.random()*(initiallevel-1)+1)] ;
       headline.textContent=pickedcolor;
       for( var i=0 ; i< colorarr.length; i++)
       {
   	    yoursquare[i].style.backgroundColor=colorarr[i];
       }
})

for( var i=0 ;  i < colorarr.length ;i++)
{
	yoursquare[i].style.background = colorarr[i];
	headline.textContent=pickedcolor;
	yoursquare[i].addEventListener("click", function()
	{
		var ir=(this.style.background);
		if( ir === pickedcolor)
		{
			// resulant.style.color = "white";
			resulant.textContent= "Correct!!";
			headingbackground.style.backgroundColor= pickedcolor;
		    allchange(pickedcolor);
		    newgame.textContent="play again";
		}
		else
		{
			this.style.backgroundColor= "#232323";
            resulant.textContent= "Retry!!";
		}
	});

}

function generator(num)
{  
        var arr=[];
        for( var i=0 ; i< num ;i++)
        {
		var r=Math.floor(Math.random()*255+1);
		var g=Math.floor(Math.random()*255+1);
		var b=Math.floor(Math.random()*255+1);
         arr.push("rgb("+r+", "+g+", "+b+")");
      }

      return arr;
}

function allchange(yourchoice)
{
   for( var i=0 ; i< colorarr.length; i++)
   {
   	    yoursquare[i].style.backgroundColor=yourchoice;
   }
}