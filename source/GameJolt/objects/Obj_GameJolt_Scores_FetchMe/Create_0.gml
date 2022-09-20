
// To use this object make sure you have a score on this game
// otherwise the returned valued will not include a score and could
// trigger an error.

GameJolt_Scores_Fetch_Me(668889,function(scoreData)
{
	var ins = instance_create_depth(x,y+100,0,Obj_GameJolt_Scores_Entry)
	ins._score = scoreData.score
	ins.sort = scoreData.sort
	ins.extra_data = scoreData.extra_data
	ins.user = scoreData.user
	ins.user_id = scoreData.user_id
	ins.guest = scoreData.guest
	ins.stored = scoreData.stored
	ins.stored_timestamp = scoreData.stored_timestamp
})


//Guest example:
//GameJolt_Scores_Fetch_Guest(668889,"Guest124",function(struct)
//{
//	var ins = instance_create_depth(x,y+100,0,Obj_GameJolt_Scores_Entry)
//	ins._score = struct.score
//	ins.sort = struct.sort
//	ins.extra_data = struct.extra_data
//	ins.user = struct.user
//	ins.user_id = struct.user_id
//	ins.guest = struct.guest
//	ins.stored = struct.stored
//	ins.stored_timestamp = struct.stored_timestamp
//})

