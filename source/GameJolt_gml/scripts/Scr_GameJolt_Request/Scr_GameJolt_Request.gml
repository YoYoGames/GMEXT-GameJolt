
function Scr_GameJolt_Request(type,url,http_method,callback_success,callback_failed)
{
	var request = instance_create_depth(0,0,0,Obj_GameJolt_Request)
	request.type = type
	request.url = url
	request.HTTP_Method = http_method
	request.callback_success = callback_success
	request.callback_failed = callback_failed
	
	return request
}
