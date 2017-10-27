namespace Northwind.Events
{
    export interface ManagerInterface
    {
        /**
         * Attach a listener to the events manager
         *
         * @param string eventType
         * @param object|callable handler
         */
        attach : {
            (component : Northwind.Html.Component, event : string, fn : Function);
            (component : Northwind.Html.Component, event : string, other: number, fn : Function);
        }

        /**
         * Detach the listener from the events manager
         *
         * @param string eventType
         * @param object handler
         */
        detach(event, handler);

        /**
         *
         */
        detachComponent(component : Northwind.Html.Component);

        /**
         * Removes all events from the EventsManager
         */
        detachAll();

        /**
         * Fires an event in the events manager causing the active listeners
         */
        trigger(controller, event, callback);
    }
}
