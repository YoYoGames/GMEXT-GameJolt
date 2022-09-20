
randomize()

var points = irandom_range(1,999999)
show_message_async("Points: " + string(points))

GameJolt_Scores_Add_Guest("Guest"+string(irandom(999)),668889,"Points: " + string(points),points,"",
					function()
					{
						with(Obj_GameJolt_Scores_Fetch)
							event_user(0)
					})
