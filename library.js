function code(selector)
{
   let self=document.querySelector(selector);
	self.html=function()
	{
		return self.innerHTML;
	}
	self.css=function(styles)
	{
		for(let key in styles)
		{
			self.style[key]=styles[key];

		}
		return self;
	}
	self.on=function(eventname,callback)
	{
		self.addEventListener(eventname,callback);
		return self;

	}
	return self;

	
}