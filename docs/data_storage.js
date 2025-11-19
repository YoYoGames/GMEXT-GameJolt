/**
 * @func GameJolt_DataStorage_Fetch
 * @desc This function fetches data from the user data storage.
 * 
 * @param {string} key The identifier key of the data
 * @param {function} [callback_success] The callback function executed if the request succeeds
 * @param {function} [callback_failed] The callback function executed if the request fails
 * 
 * @event callback_success
 * @desc Triggered when the request succeeds
 * @member {real} value The value associated with the requested key
 * @event_end
 * 
 * @event callback_failed
 * @desc Triggered when the request fails
 * @member {string} error_message The error message
 * @event_end
 * 
 * @example
 * ```gml
 * GameJolt_DataStorage_Fetch("heroLevel",
 *     function(data)
 *     {
 *         heroLevel = real(data);
 *     },
 *     function(message)
 *     {
 *         show_message_async(message);
 *     }
 * );
 * ```
 * In the code sample above we perform a fetch action to retrieve the **user data** stored with the key `"heroLevel"`, we then provide two methods: the success method will display the value associated with that key and the failure method will show a message with the error information.
 * @func_end
 */


/**
 * @func GameJolt_DataStorage_Fetch_Global
 * @desc This function fetches data from the global data storage.
 * 
 * @param {string} key The identifier key of the data
 * @param {function} [callback_success] The callback function executed if the request succeeds
 * @param {function} [callback_failed] The callback function executed if the request fails
 * 
 * @event callback_success
 * @desc Triggered when the request succeeds
 * @member {real} value The value associated with the requested key
 * @event_end
 * 
 * @event callback_failed
 * @desc Triggered when the request fails
 * @member {string} error_message The error message
 * @event_end
 * 
 * @example
 * ```gml
 * GameJolt_DataStorage_Fetch_Global("lastBossKillCount",
 *     function(data)
 *     {
 *         bossKillCount = real(data);
 *     },
 *     function(message)
 *     {
 *         show_message_async(message);
 *     }
 * );
 * ```
 * In the code sample above we perform a fetch action to retrieve the **global data** stored with the key `"lastBossKillCount"`, we then provide two methods: the success method will display the value associated with that key and the failure method will show a message with the error information.
 * @func_end
 */


/**
 * @func GameJolt_DataStorage_GetKeys
 * @desc This function fetches keys of data items from the user data storage.
 * 
 * @param {string} pattern The pattern to apply when querying existing keys
 * @param {function} [callback_success] The callback function executed if the request succeeds
 * @param {function} [callback_failed] The callback function executed if the request fails
 * 
 * @event callback_success
 * @desc Triggered when the request succeeds
 * @member {array[string]} keys The keys matching the requested pattern
 * @event_end
 * 
 * @event callback_failed
 * @desc Triggered when the request fails
 * @member {string} error_message The error message
 * @event_end
 * 
 * @example
 * ```gml
 * GameJolt_DataStorage_GetKeys("*",
 *     function(array)
 *     {
 *         show_message_async(array);
 *     },
 *     function(message)
 *     {
 *         show_message_async(message);
 *     }
 * );
 * ```
 * In the code sample above we perform a fetch action to retrieve the keys from the **user data storage**, that follow the pattern `"*"` (meaning **all**). We then provide two methods: the success method will display the array of existing keys and the failure method will show a message with the error information.
 * @func_end
 */


/**
 * @func GameJolt_DataStorage_GetKeys_Global
 * @desc This function fetches keys of data items from the global data storage.
 * 
 * @param {string} pattern The pattern to apply when querying existing keys
 * @param {function} [callback_success] The callback function executed if the request succeeds
 * @param {function} [callback_failed] The callback function executed if the request fails
 * 
 * @event callback_success
 * @desc Triggered when the request succeeds
 * @member {array[string]} keys The keys matching the requested pattern
 * @event_end
 * 
 * @event callback_failed
 * @desc Triggered when the request fails
 * @member {string} error_message The error message
 * @event_end
 * 
 * @example
 * ```gml
 * GameJolt_DataStorage_GetKeys_Global("*",
 *     function(array)
 *     {
 *         show_message_async(array);
 *     },
 *     function(message)
 *     {
 *         show_message_async(message);
 *     }
 * );
 * ```
 * In the code sample above we perform a fetch action to retrieve the keys from the **global data storage**, that follow the pattern `"*"` (meaning **all**). We then provide two methods: the success method will display the array of existing keys and the failure method will show a message with the error information.
 * @func_end
 */


/**
 * @func GameJolt_DataStorage_Remove
 * @desc This function removes data items from the user data store.
 * 
 * @param {string} key The identifier key of the data
 * @param {function} [callback_success] The callback function executed if the request succeeds
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
 * GameJolt_DataStorage_Remove("hasArrows",
 *     function()
 *     {
 *         show_message_async("Success!!");
 *     },
 *     function(message)
 *     {
 *         show_message_async(message);
 *     }
 * );
 * ```
 * In the code sample above we perform an action to remove a key (`"hasArrows"`) from the **user data storage**. We then provide two methods that will display the success of failure of the task.
 * @func_end
 */


/**
 * @func GameJolt_DataStorage_Remove_Global
 * @desc This function removes data items from the global data store.
 * 
 * @param {string} key The identifier key of the data
 * @param {function} [callback_success] The callback function executed if the request succeeds
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
 * GameJolt_DataStorage_Remove("gameoverCount",
 *     function()
 *     {
 *         show_message_async("Success!!");
 *     },
 *     function(message)
 *     {
 *         show_message_async(message);
 *     }
 * );
 * ```
 * In the code sample above we perform an action to remove a key (`"gameoverCount"`) from the **global data storage**. We then provide two methods that will display the success of failure of the task.
 * @func_end
 */


/**
 * @func GameJolt_DataStorage_Set
 * @desc This function sets data in the user data store.
 * 
 * @param {string} key The identifier key of the data
 * @param {real|string|struct} data The data value to associate with the provided key
 * @param {function} [callback_success] The callback function executed if the request succeeds
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
 * GameJolt_DataStorage_Set("name", "HERO",
 *     function()
 *     {
 *         show_message_async("Success!!");
 *     },
 *     function(message)
 *     {
 *         show_message_async(message);
 *     }
 * );
 * ```
 * In the code sample above we perform an action to set a key (`"name"`) from the **user data storage** to a specific value (`"HERO"`). We then provide two methods that will display the success of failure of the task.
 * @func_end
 */


/**
 * @func GameJolt_DataStorage_Set_Global
 * @desc This function sets data in the global data store.
 * 
 * @param {string} key The identifier key of the data
 * @param {real|string|struct} data The data value to associate with the provided key
 * @param {function} [callback_success] The callback function executed if the request succeeds
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
 * GameJolt_DataStorage_Set_Global("gameoverCount", 2,
 *     function()
 *     {
 *         show_message_async("Success!!");
 *     },
 *     function(message)
 *     {
 *         show_message_async(message);
 *     }
 * );
 * ```
 * In the code sample above we perform an action to set a key (`"gameoverCount"`) from the **global data storage** to a specific value (`2`). We then provide two methods that will display the success of failure of the task.
 * @func_end
 */


/**
 * @func GameJolt_DataStorage_Update
 * @desc This function updates user data in the data store applying a selected operation.
 * 
 * @param {string} key The identifier key of the data
 * @param {real|string|struct} data The data value used by the operation
 * @param {string} operation The operation to be performed with the provided data (see [Operations Table](#operations-table))
 * @param {function} [callback_success] The callback function executed if the request succeeds
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
 * GameJolt_DataStorage_Update("currentLevel", 1, "add",
 *     function()
 *     {
 *         show_message_async("Success!!");
 *     },
 *     function(message)
 *     {
 *         show_message_async(message);
 *     }
 * );
 * ```
 * In the code sample above we perform an action to update a key (`"currentLevel"`) from the **user data storage** using the `"add"` operation and passing a given amount `1`. We then provide two methods that will display the success of failure of the task.
 * @func_end
 */


/**
 * @func GameJolt_DataStorage_Update_Global
 * @desc This function updates global data in the data store applying a selected operation.
 * 
 * @param {string} key The identifier key of the data
 * @param {real|string|struct} data The data value used by the operation
 * @param {string} operation The operation to be performed with the provided data (see [Operations Table](#operations-table))
 * @param {function} [callback_success] The callback function executed if the request succeeds
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
 * GameJolt_DataStorage_Update("gameoverCount", 1, "add",
 *     function()
 *     {
 *         show_message_async("Success!!");
 *     },
 *     function(message)
 *     {
 *         show_message_async(message);
 *     }
 * );
 * ```
 * In the code sample above we perform an action to update a key (`"gameoverCount"`) from the **global data storage** using the `"add"` operation and passing a given amount `1`. We then provide two methods that will display the success of failure of the task.
 * @func_end
 */

/**
 * @module data_storage
 * @title Data Storage
 * @desc Sync saved games, user-created levels, debug logs save any bit of data to the player's account, or globally for your game. The clouds are the limit!
 * 
 * @section_func Functions
 * @desc The following functions are provided for working with cloud data storage:
 * @ref GameJolt_DataStorage_*
 * @section_end
 * 
 * @section Operations Table
 * @desc This table shows the operations that the developer can perform on data stored inside the GameJolt cloud storage system.
 * 
 * |Operation|Description|
 * |----|----|
 * |`"add"`|Adds the `value` to the current data store item (reals only).|
 * |`"subtract"`|Subtracts the `value` from the current data store item (reals only).|
 * |`"multiply"`|Multiplies the `value` by the current data store item (reals only).|
 * |`"divide"`|Divides the current data store item by the `value` (reals only).|
 * |`"append"`|Appends the `value` to the current data store item.|
 * |`"prepend"`|Prepends the `value` to the current data store item.|
 * 
 * @section_end
 * 
 * @module_end
 */
