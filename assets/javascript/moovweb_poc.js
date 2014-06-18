$("document").ready(
	function()
	{
		var yahoo;
		yahoo = function()
		{
			console.log(typeof(yahoo))
		}
 		console.log('init called on document ready')
	 	yahoo();
	 	console.log($("div").length);
	 	/*if($("body").hasClass('resor'))
			{
				$(".hide-for-mobile.show-for-desktop").remove();
			}*/
	}
)

