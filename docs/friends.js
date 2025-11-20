/**
 * @func GameJolt_Friends
 * @desc This function queries an array of `user_id`s representing the user's friends (further information can be queried using the ${function.GameJolt_User_FetchWithUserID}).
 * 
 * @param {function} [callback_success] The callback function executed if the request succeeds
 * @param {function} [callback_failed] The callback function executed if the request fails
 * 
 * @event callback_success
 * @desc Triggered when the request succeeds
 * @member {array[string]} user_ids An array of `user_id`s
 * @event_end
 * 
 * @event callback_failed
 * @desc Triggered when the request fails
 * @member {string} error_message The error message
 * @event_end
 * 
 * @example
 * 
 * ```gml
 * GameJolt_Friends(
 *     function(array)
 *     {
 *         // If the array has at least one entry
 *         if (array_length(array) > 1)
 *         {
 *             GameJolt_User_FetchWithUserID(array[0], function(data) {
 *                 show_message_async(data);
 *             })
 *         }
 *     }
 * );
 * ```
 * In the code sample above we perform an action to retrieve an array with the `user_id`s of all the logged user friends. We then provide a method that will fetch the user information for the first user ID in the returned array (using the ${function.GameJolt_User_FetchWithUserID} function), printing out the result when finished.
 * @func_end
 */

/**
 * @module friends
 * @title Friends
 * @desc Because playing with friends is even better and thrilling. List all user's friends and create an healthy competition environment to keep them all engaged.
 * 
 * @section_func Functions
 * @desc The following function is provided for fetching friends:
 * @ref GameJolt_Friends
 * @section_end
 * 
 * @module_end
 */