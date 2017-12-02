
namespace Northwind
{
    export class Events
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

        public contructor(element = null)
        {
            if (element instanceof Northwind.Html.Component) {
                this.element = element;
            }

            this.nativeEvents = [
                "click",
                "doubleClick",
                "change",
                "keypress",
                "keydown",
                "keyup",
                "paste",
                "blur",
                "focus",
                "submit"
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

        private setEventToElement(eventName, fn)
        {
            if (Array.isArray(this.element)) {
                for (let item of this.element) {
                    this.element.getElement().addEventListener(
                        eventName,
                        fn.bind(this)
                    );
                }
            } else {
                this.element.getElement().addEventListener(
                    eventName,
                    fn.bind(this)
                );
            }
            return this;
        }

        /**
         * 
         * @param  {Function} fn [description]
         * @return {[type]}      [description]
         */
        public click(fn)
        {
            this.setEventToElement(
                "click",
                fn
            );
            return this;
        }

        /**
         *
         */
        public doubleClick(fn)
        {
            this.setEventToElement(
                "dblclick",
                fn
            );
            return this;
        }

        /**
         *
         * @return {[type]} [description]
         */
        public change(fn)
        {
            this.setEventToElement(
                "change",
                fn
            );
            return this;
        }

        /**
         * [change description]
         * @return {[type]} [description]
         */
        public keypress(fn)
        {
            this.setEventToElement(
                "keypress",
                fn
            );
            return this;
        }

        /**
         * [change description]
         * @return {[type]} [description]
         */
        public keydown(fn) {
            this.setEventToElement(
                "keydown",
                fn
            );
            return this;
        }

        /**
         * [change description]
         * @return {[type]} [description]
         */
        public keyup(fn) {
            this.setEventToElement(
                "keyup",
                fn
            );
            return this;
        }

        public paste(fn)
        {
            this.setEventToElement(
                "paste",
                fn
            );
            return this;
        }

        /**
         * [change description]
         * @return {[type]} [description]
         */
        public blur(fn)
        {
            this.setEventToElement(
                "blur",
                fn
            );
            return this;
        }

        /**
         * [change description]
         * @return {[type]} [description]
         */
        public focus(fn)
        {
            this.setEventToElement(
                "focus",
                fn
            );
            return this;
        }

        /**
         * 
         * @param fn
         */
        public submit(fn)
        {
            this.setEventToElement(
                "submit",
                fn
            );
            return this;
        }

        /**
         * [getClassName description]
         * @return {[type]} [description]
         */
        public getClassName() {
            let funcNameRegex = /function (.{1,})\(/;
            let results  = (funcNameRegex).exec(this["constructor"].toString());
            return (results && results.length > 1) ? results[1] : "";
        }

        public getDom()
        {
            return Northwind.Service.DependencyInjector.get().get(
                "dom"
            );
        }

        public getAjax()
        {
            return Northwind.Service.DependencyInjector.get().get(
                "ajax"
            );
        }

        public getEm()
        {
            return Northwind.Service.DependencyInjector.get().get(
                "em"
            );
        }

        public getContainer()
        {
            return Northwind.Service.DependencyInjector.get().get(
                "container"
            );
        }

        /**
         * 
         * @param name 
         */
        public getTag(tag : any)
        {
            if (tag instanceof Northwind.Html.Component) {
        	    return Northwind.Service.DependencyInjector.get().get("tag").tag(
                    tag
                );
            } else {
        	    return Northwind.Service.DependencyInjector.get().get(
                    "tag"
                );
            }
        }

        /**
         *  
         */
        public getUrl()
        {
            let url = Northwind.Service.DependencyInjector.get().get(
                "url"
            );
            return url;
        }

        /**
         * 
         * @param tag 
         */
        public getEvent(tag : any = false)
        {
            let events = Northwind.Service.DependencyInjector.get().get(
                "event"
            );
            if (tag instanceof Northwind.Html.Component) {
        	    return events.tag(tag);
            } else {
        	    return events;
            }
        }

        public getDi()
        {
            return Northwind.Service.DependencyInjector.get();
        }
    }
}