
show_debug_message("ASYNC: " + json_encode(async_load))

// Early exit ids don't match
if(async_load[?"id"] != request) exit;

var _struct, _status = async_load[?"status"];

// Easrly exit if the request has not finished yet
if(_status == 1) exit;

if(_status == 0)
{
	if(async_load[?"http_status"] == 200)
	{
		var _result = async_load[? "result"];

		// This is not ideal (but it's the only way for now)
		try {
			_struct = json_parse(_result);
		}
		catch (_ex) {
			show_debug_message("[ERROR] Obj_GameJolt_Request, invalid json response");
			exit;
		}
		
		var struct_response = _struct.response
		
		if(struct_response.success == "true")
			Scr_GameJolt_Success(struct_response)
		else if(!is_undefined(callback_failed))
			callback_failed(struct_response[$ "message"], async_load);
	}
}
else if(_status < 0)
{
	if(!is_undefined(callback_failed))
		callback_failed("Request Failed. Maybe No Internet", async_load);

}

instance_destroy();
