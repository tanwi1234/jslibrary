//console.log(code("#root").text());
  
    //handle click
    
    code("button").on("mouseover",function()
{
  code("button").css({
  	background:"transparent",
  	
  	border:"2px solid cyan"
  });
});
code("button").on("mouseout",function()
{
  code("button").css({
  	border:"1px solid darkgrey"
  });
});
  


