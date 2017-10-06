/// <reference path="./EventManagerInterface.ts"/>

namespace Northwind.Events
{
    export interface EventsAwareInterface
    {
        /**
    	 * Sets the events manager
    	 */
    	setEventsManager(eventsManager);

    	/**
    	 * Returns the internal event manager
    	 */
        getEventsManager() : Northwind.Events.ManagerInterface;
    }
}
