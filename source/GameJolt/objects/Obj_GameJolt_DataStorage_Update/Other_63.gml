
if(request == async_load[?"id"])
if(async_load[?"status"])
if(async_load[?"result"] != "")
	GameJolt_DataStorage_Update(async_load[?"result"],"Opera","add")
