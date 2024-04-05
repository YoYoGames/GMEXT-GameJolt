
event_inherited();

request = noone

text = "Fetch"

func_succcess = function(scoresArray)
{
	for(var a = 0 ; a < array_length(scoresArray) ; a++)
	{
		var ins = instance_create_depth(600,250+a*125,0,Obj_GameJolt_Scores_Entry)
		var scoreData = scoresArray[a];
		ins._score = scoreData.score
		ins.sort = scoreData.sort
		ins.extra_data = scoreData.extra_data
		ins.user = scoreData.user
		ins.user_id = scoreData.user_id
		ins.guest = scoreData.guest
		ins.stored = scoreData.stored
		ins.stored_timestamp = scoreData.stored_timestamp
	}
}

GameJolt_Scores_Fetch(668889,10,func_succcess)
