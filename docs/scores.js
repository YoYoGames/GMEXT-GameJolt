/**
 * @func GameJolt_Scores_Add
 * @desc This function adds a score representing the logged user.
 * 
 * @param {real} table_id The ID of the score table to submit to.
 * @param {string} score This is a string value associated with the score.
 * @param {real} sort This is a numerical sorting value associated with the score. All sorting will be based on this number.
 * @param {string} extra_data If there's any extra data you would like to store as a string, you can use this variable.
 * @param {function} [callback_success] The callback function executed when the request succeeds
 * @param {function} [callback_failed] The callback function executed if the request fails
 * 
 * @event callback_success
 * @desc Triggered when the request succeeds
 * @event_end
 * 
 * @event callback_failed
 * @desc Triggered when the request fails
 * @member {string} error_message The error message
 * @event_end
 * 
 * @example
 * ```gml
 * GameJolt_Scores_Add(668889,"Points: " + string(points), points, "this is some metadata",
 *     function()
 *     {
 *         show_message_async("Score submitted successfully!");
 *     }
 * );
 * ```
 * The code above will submit a score value for the current logged user to a given `table_id`, and print a success message if it succeeds.
 * @func_end
 */


/**
 * @func GameJolt_Scores_Add_Guest
 * @desc This function adds a score representing a guest user.
 * 
 * @param {string} guest The guest's name.
 * @param {real} table_id The ID of the score table to submit to.
 * @param {string} score This is a string value associated with the score.
 * @param {real} sort This is a numerical sorting value associated with the score. All sorting will be based on this number.
 * @param {string} extra_data If there's any extra data you would like to store as a string, you can use this variable.
 * @param {function} [callback_success] The callback function executed when the request succeeds
 * @param {function} [callback_failed] The callback function executed if the request fails
 * 
 * @event callback_success
 * @desc Triggered when the request succeeds
 * @event_end
 * 
 * @event callback_failed
 * @desc Triggered when the request fails
 * @member {string} error_message The error message
 * @event_end
 * 
 * @example
 * ```gml
 * GameJolt_Scores_Add_Guest("guestName123", 668889, "Points: " + string(points), points, "this is some metadata",
 *     function()
 *     {
 *         show_message_async("Score submitted successfully!");
 *     }
 * );
 * ```
 * The code above will submit a score value for a guest user (`"guestName123"`) to a given `table_id`, and print a success message if it succeeds.
 * @func_end
 */


/**
 * @func GameJolt_Scores_Fetch
 * @desc This function fetches scores from a score table.

 * @param {real} table_id The ID of the score table to submit to
 * @param {real} limit The number of scores you'd like to return
 * @param {function} [callback_success] The callback function executed if the request succeeds
 * @param {function} [callback_failed] The callback function executed if the request fails
 * 
 * @event callback_success
 * @desc Triggered when the request succeeds
 * @member {array[struct.ScoreData]} score_data an array holding score data
 * @event_end
 * 
 * @event callback_failed
 * @desc Triggered when the request fails
 * @member {string} error_message The error message
 * @event_end
 * 
 * @example
 * ```gml
 * GameJolt_Scores_Fetch(668889, 10, function(scoresArray) {
 * 
 *     var _scoreData = scoresArray[0];
 * 
 *     var _score = scoreData.score;
 *     var _sort = scoreData.sort;
 *     var _extra_data = scoreData.extra_data;
 *     var _user = scoreData.user;
 *     var _user_id = scoreData.user_id;
 *     var _guest = scoreData.guest;
 *     var _stored = scoreData.stored;
 *     var _stored_timestamp = scoreData.stored_timestamp;
 * });
 * ```
 * The code above will fetch a total of `10` scores from a given `table_id` and on success collect all the data that is presented from the first entry in the returned array.
 * @func_end
 */


/**
 * @func GameJolt_Scores_Fetch_BetterThan
 * @desc This function fetches score from a score table, that are better than a given value.

 * @param {real} table_id The ID of the score table to submit to
 * @param {real} better_than Fetch only scores better than this score sort value
 * @param {real} limit The number of scores you'd like to return
 * @param {function} [callback_success] The callback function executed if the request succeeds
 * @param {function} [callback_failed] The callback function executed if the request fails
 * 
 * @event callback_success
 * @desc Triggered when the request succeeds
 * @member {array[struct.ScoreData]} score_data an array holding score data
 * @event_end
 * 
 * @event callback_failed
 * @desc Triggered when the request fails
 * @member {string} error_message The error message
 * @event_end
 * 
 * @example
 * ```gml
 * GameJolt_Scores_Fetch_BetterThan(668889, 10, 9999, function(scoresArray) {
 * 
 *     var _scoreData = scoresArray[0];
 * 
 *     var _score = scoreData.score;
 *     var _sort = scoreData.sort;
 *     var _extra_data = scoreData.extra_data;
 *     var _user = scoreData.user;
 *     var _user_id = scoreData.user_id;
 *     var _guest = scoreData.guest;
 *     var _stored = scoreData.stored;
 *     var _stored_timestamp = scoreData.stored_timestamp;
 * });
 * ```
 * The code above will fetch a total of `10` scores from a given `table_id` that are better than the value `9999` and on success collect all the data that is presented from the first entry in the returned array.
 * @func_end
 */


/**
 * @func GameJolt_Scores_Fetch_Guest
 * @desc This function fetches the score of guest user from a score table.
 * 
 * @param {real} table_id The ID of the score table
 * @param {function} [callback_success] The callback function executed if the request succeeds
 * @param {function} [callback_failed] The callback function executed if the request fails
 * 
 * @event callback_success
 * @desc Triggered when the request succeeds
 * @member {struct.ScoreData} score_data a struct holding score data
 * @event_end
 * 
 * @event callback_failed
 * @desc Triggered when the request fails
 * @member {string} error_message The error message
 * @event_end
 * 
 * @example
 * ```gml
 * GameJolt_Scores_Fetch_Guest(668889, "guestName123", function(scoreData) {
 * 
 *     var _score = scoreData.score;
 *     var _sort = scoreData.sort;
 *     var _extra_data = scoreData.extra_data;
 *     var _user = scoreData.user;
 *     var _user_id = scoreData.user_id;
 *     var _guest = scoreData.guest;
 *     var _stored = scoreData.stored;
 *     var _stored_timestamp = scoreData.stored_timestamp;
 * });
 * ```
 * The code above will fetch a ${struct.ScoreData} struct from the given `table_id` that is associated with the guest `"guestName123"` and on success collect all the data that is presented in the struct.
 * @func_end
 */


/**
 * @func GameJolt_Scores_Fetch_Me
 * @desc This function fetches the score of the current user from a score table.
 * 
 * @param {real} table_id The ID of the score table
 * @param {function} [callback_success] The callback function executed if the request succeeds
 * @param {function} [callback_failed] The callback function executed if the request fails
 * 
 * @event callback_success
 * @desc Triggered when the request succeeds
 * @member {struct.ScoreData} score_data a struct holding score data
 * @event_end
 * 
 * @event callback_failed
 * @desc Triggered when the request fails
 * @member {string} error_message The error message
 * @event_end
 * 
 * @example
 * ```gml
 * GameJolt_Scores_Fetch_Guest(668889, function(scoreData) {
 *     var _score = scoreData.score;
 *     var _sort = scoreData.sort;
 *     var _extra_data = scoreData.extra_data;
 *     var _user = scoreData.user;
 *     var _user_id = scoreData.user_id;
 *     var _guest = scoreData.guest;
 *     var _stored = scoreData.stored;
 *     var _stored_timestamp = scoreData.stored_timestamp;
 * });
 * ```
 * The code above will fetch a ${struct.ScoreData} struct from the given `table_id` that is associated with the currently logged user and on success collect all the data that is presented in the struct.
 * @func_end
 */


/**
 * @func GameJolt_Scores_Fetch_WorseThan
 * @desc This function fetches score from a score table, that are worse than a given value.
 * 
 * @param {real} table_id The ID of the score table to submit to
 * @param {real} worse_than Fetch only scores worse than this score sort value
 * @param {real} limit The number of scores you'd like to return
 * @param {function} [callback_success] The callback function executed if the request succeeds
 * @param {function} [callback_failed] The callback function executed if the request fails
 * 
 * @event callback_success
 * @desc Triggered when the request succeeds
 * @member {array[struct.ScoreData]} score_data an array holding score data
 * @event_end
 * 
 * @event callback_failed
 * @desc Triggered when the request fails
 * @member {string} error_message The error message
 * @event_end
 *  
 * @example
 * ```gml
 * GameJolt_Scores_Fetch_WorseThan(668889, 10, 10, function(scoresArray) {
 * 
 *     var _scoreData = scoresArray[0];
 * 
 *     var _score = scoreData.score;
 *     var _sort = scoreData.sort;
 *     var _extra_data = scoreData.extra_data;
 *     var _user = scoreData.user;
 *     var _user_id = scoreData.user_id;
 *     var _guest = scoreData.guest;
 *     var _stored = scoreData.stored;
 *     var _stored_timestamp = scoreData.stored_timestamp;
 * });
 * ```
 * The code above will fetch a total of `10` scores from a given `table_id` that are worse than the value `10` and on success collect all the data that is presented from the first entry in the returned array.
 * @func_end
 */


/**
 * @func GameJolt_Scores_Rank
 * @desc This functions gets a rank for a specific score.
 * 
 * @param {real} table_id The ID of the score table to submit to
 * @param {real} sort This is a numerical sorting value associated with the score. All sorting will be based on this number.
 * @param {function} [callback_success] The callback function executed if the request succeeds
 * @param {function} [callback_failed] The callback function executed if the request fails
 * 
 * @event callback_success
 * @desc Triggered when the request succeeds
 * @member {real} rank The rank value
 * @event_end
 * 
 * @event callback_failed
 * @desc Triggered when the request fails
 * @member {string} error_message The error message
 * @event_end
 * 
 * @example
 * ```gml
 * GameJolt_Scores_Rank(668889, 100,
 *     function(rank) {
 *         show_message_async(rank)
 *     }
 * );
 * ```
 * The code above will query the rank on the current logged user on the given `table_id` and show it to the user.
 * @func_end
 */


/**
 * @func GameJolt_Scores_Tables
 * @desc This function fetches a list of score tables.
 * 
 * @param {function} [callback_success] The callback function executed if the request succeeds
 * @param {function} [callback_failed] The callback function executed if the request fails
 * 
 * @event callback_success
 * @desc Triggered when the request succeeds
 * @member {array} table_ids An array of `table_id`
 * @event_end
 * 
 * @event callback_failed
 * @desc Triggered when the request fails
 * @member {string} error_message The error message
 * @event_end
 * 
 * @example
 * ```gml
 * GameJolt_Scores_Tables(function(array)
 *     {
 *         show_message_async(array);
 *     },
 *     function(message)
 *     {
 *         show_message_async(message);
 *     }
 * );
 * ```
 * In the code sample above we perform a fetch action to retrieve all the score `table_id`s associated with this game. We then provide two methods: the success method will display the array of existing table IDs and the failure method will show a message with the error information.
 * @func_end
 */


/**
 * @struct ScoreData
 * @desc This struct contains details that describe a score.
 * 
 * @member {string} score The score string (example: `"234 Coins"`)
 * @member {real} sort The score's numerical sort value.
 * @member {string} extra_data Any extra data associated with the score (example: `"Level 2"`)
 * @member {string} user If this is a user score, this is the display name for the user.
 * @member {real} user_id If this is a user score, this is the user's ID.
 * @member {string} guest If this is a guest score, this is the guest's submitted name.
 * @member {string} stored Returns when the score was logged by the user (example: `"1 week ago"`)
 * @member {real} stored_timestamp Returns the timestamp (in seconds) of when the score was logged by the user.
 * 
 * @struct_end
 */

/**
 * @module scores
 * @title Scores
 * @desc Implement leaderboards in your game to allow anyone to battle it out for the top spots. You create the leaderboards, you control the scoring. You can even allow guests to score without a Game Jolt account.
 * 
 * @section_func Functions
 * @desc The following functions are provided for working with scores and leaderboards:
 * @ref GameJolt_Scores_*
 * @section_end
 * 
 * @section_struct Structs
 * @desc Extra details on structs that are returned as score fetching results:
 * @ref ScoreData
 * @section_end
 * 
 * @module_end
 */