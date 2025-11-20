/**
 * @func GameJolt_Time
 * @desc This function queries the time of the Game Jolt server.
 * 
 * @param {function} [callback_success] The callback function executed if the request succeeds
 * @param {function} [callback_failed] The callback function executed if the request fails
 * 
 * @event callback_success
 * @desc Triggered when the request succeeds
 * @member {struct.TimeData} time_data An array holding time data
 * @event_end
 * 
 * @event callback_failed
 * @desc Triggered when the request fails
 * @member {string} error_message The error message
 * @event_end
 * 
 * @example
 * ```gml
 * GameJolt_Time(function(timeData)
 *     {
 *         var _timestamp = timeData.timestamp;
 *         var _timezone = timeData.timezone;
 *         var _year = timeData.year;
 *         var _month = timeData.month;
 *         var _day = timeData.day;
 *         var _hour = timeData.hour;
 *         var _minute = timeData.minute;
 *         var _second = timeData.second;
 *     
 *         if (timeData.hour > 0 && timeDate.hour < 3)
 *         {
 *             show_debug_message("It's too late, time to go to sleep!");
 *         }
 *     }
 * );
 * ```
 * The code sample above queries the time for the Game Jolt server and if it is too late show a sleeping message.
 * @func_end
 */


/**
 * @struct TimeData
 * @desc This struct contains details that describe the current time.
 * 
 * @member {real} timestamp The UNIX time stamp (in seconds) representing the server's time
 * @member {string} timezone The timezone of the server (example: `"America/New_York"`)
 * @member {real} year The current year
 * @member {real} month The current month
 * @member {real} day The day of the month
 * @member {real} hour The hour of the day
 * @member {real} minute The minute of the hour
 * @member {real} second The seconds of the minute
 *
 * @struct_end
 */

/**
 * @module time
 * @title Time
 * @desc Never miss the beat with a simple query to the server for precise time information.
 * 
 * @section_func Functions
 * @desc The following function is provided for working with time:
 * @ref GameJolt_Time
 * @section_end
 * 
 * @section_struct Structs
 * @desc Extra details on structs that are returned as time fetching results:
 * @ref TimeData
 * @section_end
 * 
 * @module_end
 */