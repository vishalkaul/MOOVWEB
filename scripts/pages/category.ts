$$("#mcp-right")
{
	insert("h2",id:"productDetail")
	insert("ul", class:"places")
}
$$("ul.places")
{
	insert("li")
}

$$("ul.places")
{
	$$("li")
	{
		inner("Places content comes here one 3")
	}	
}

$$("#productDetail")
{
	inner("Identified resort page and added this heading dynamically")
}
$$("body")
{
	add_class("resor")
	add_class("_category")
}