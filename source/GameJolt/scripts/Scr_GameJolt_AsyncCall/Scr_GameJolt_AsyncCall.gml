
function Scr_GameJolt_AsyncCall()
{
	var map = ds_map_create()
	map[?"listener"] = id
	map[?"type"] = type
	map[?"status"] = async_load[?"http_status"]
	
	if(!is_undefined(errorMessage))
		map[?"errorMessage"] = errorMessage
	
	if(argument_count)
	if(!is_undefined(argument[0]))
		map[?"value"] = argument[0]
	
	event_perform_async(ev_async_social, map)
}
