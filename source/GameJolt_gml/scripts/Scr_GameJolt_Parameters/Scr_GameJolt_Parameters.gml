
function Scr_GameJolt_Parameters(url)
{
	var str = ""
	var first = !string_pos("?",url)
	for(var a = 1 ; a < argument_count ; a += 2)
	{
		if(first)
			str = "?" + string(argument[a]) + "=" + argument[a+1]
		else
			str += "&"+string(argument[a]) + "=" + argument[a+1]
		first = false
	}
	return url + str
}
