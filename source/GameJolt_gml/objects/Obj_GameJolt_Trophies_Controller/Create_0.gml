
GameJolt_Trophies_Fetch_All(false,
								function(trophyArray)
								{
									for(var a = 0 ; a < array_length(trophyArray) ; a++)
									{
										var ins = instance_create_depth(250+a*300,300,0,Obj_GameJolt_Trophy)
										var trophyData = trophyArray[a];
										ins.ID = trophyData.id
										ins.title = trophyData.title
										ins.description = trophyData.description
										ins.difficulty = trophyData.difficulty
										ins.image_url = trophyData.image_url
										ins.achieved = trophyData.achieved
									}
								}
							)
