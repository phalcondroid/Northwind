///<reference path="../Service/InjectorComponents.ts" />

namespace Northwind
{
    export class Events extends Northwind.Service.InjectorComponents
    {
        private events  : Object = {};
        private params  : Object = {};
        private others  : Object = {};
        private element : Northwind.Html.Component;
        private static AFTER    = 1;
        private static BEFORE   = 2;
        private static ONCREATE = 3;
        private static ONDELETE = 4;
        private static ONCHANGE = 5;
        private nativeEvents = [];

        public contructor()
        {
            this.nativeEvents = [
                "click",
                "doubleClick",
                "change",
                "keypress",
                "keydown",
                "keyup",
                "paste",
                "blur",
                "focus"
            ];
        }
        
        /**
         *
         */
        public attach(component : Northwind.Html.Component, event : string, fn : any)
        {
            this.events[component.getClassName()][event][fn];
            return this;
        }

        /**
         *
         */
        public add(otherEvent : number)
        {
            this.others[otherEvent];
            return this;
        }

        /**
         *
         */
        public detachComponent(component : Northwind.Html.Component)
        {
            return this;
        }

        /**
         * 
         */
        public detach(component, event, params = false)
        {
            this.events[component][event];
            this.params[component][event] = params;
            return this;
        }

        /**
         *
         */
        public trigger(controller, event, callback, params = {})
        {
            let result = this.events[controller][event](params);
            return this;
        }

        /**
         *
         */
        public detachAll()
        {
            this.events = {};
            return this;
        }

        /**
         *
         */
        public tag(component)
        {
            if (component instanceof Northwind.Html.Component) {
                this.element = component;
                return this;
            }
            throw "Component must be a instance of Northwind.Html.Component or Northwind.Tag";
        }

        /**
         * 
         * @param  {Function} fn [description]
         * @return {[type]}      [description]
         */
        public click(fn)
        {
            this.element.getElement().addEventListener(
                "click",
                fn.bind(this)
            );
            return this;
        }

        /**
         *
         */
        public doubleClick(fn)
        {
            this.element.getElement().addEventListener(
                "dblclick",
                fn.bind(this)
            );
            return this;
        }

        /**
         *
         * @return {[type]} [description]
         */
        public change(fn)
        {
            this.element.getElement().addEventListener(
                "change",
                fn.bind(this)
            );
            return this;
        }

        /**
         * [change description]
         * @return {[type]} [description]
         */
        public keypress(fn)
        {
            this.element.getElement().addEventListener(
                "keypress",
                fn.bind(this)
            );
            return this;
        }

        /**
         * [change description]
         * @return {[type]} [description]
         */
        public keydown(fn) {
            this.element.getElement().addEventListener(
                "keydown",
                fn.bind(this)
            );
            return this;
        }

        /**
         * [change description]
         * @return {[type]} [description]
         */
        public keyup(fn) {
            this.element.getElement().addEventListener(
                "keyup",
                fn.bind(this)
            );
            return this;
        }

        public paste(fn)
        {
            this.element.getElement().addEventListener(
                "paste",
                fn.bind(this)
            );
            return this;
        }

        /**
         * [change description]
         * @return {[type]} [description]
         */
        public blur(fn)
        {
            this.element.getElement().addEventListener(
                "blur",
                fn.bind(this)
            );
            return this;
        }

        /**
         * [change description]
         * @return {[type]} [description]
         */
        public focus(fn)
        {
            this.element.getElement().addEventListener(
                "focus",
                fn.bind(this)
            );
            return this;
        }
    }
}