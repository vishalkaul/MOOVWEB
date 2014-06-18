#$('./body') {
 #insert_top("header", class: "mw-header") {
     #Move stuff here
  #}
#}

$$("#ctl00_mainRegion_leftContentArea")
{
	insert("div", id: "yahoo", class: "google")
}
$$("#yahoo")
{
	inner("DOM element with dummy text and an image")
	insert("img", src: "http://media.marketwire.com/attachments/201111/35199_MoovwebLogo.jpg", title: "Exploring MOOVWEB", width: "99%", align: "bottom")
	insert("a", href: "http://www.google.com", title: "click here to go off the domain")
	move_to("../..", "top")
}

$$("#yahoo")
{
	$$("a")
	{
		inner("click here to go off domain")
	}
}

$$("#search-site")
{
	$$("input")
	{
		attribute("placeholder","Search here..")
	}
}

$$(".two-column-right")
{
	$$(".mcp-image")
	{
		$$("img")
		{
			remove()
		}
	}
}

$$(".two-column-left")
{
	$$(".mcp-text")
	{
		move_to("..","top")
	}
}
