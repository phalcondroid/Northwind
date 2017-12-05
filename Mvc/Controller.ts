

namespace Northwind.Mvc
{
    //@sealed
    export class Controller
    {
        /**
         *
         */
        private globals;

        /**
         *
         */
        public constructor()
        {
        }

        /**
         *
         */
        public setGlobals(globals)
        {
            this.globals = globals;
            return this;
        }

        /**
         *
         */
        public getGlobals(param : any = false)
        {
            if (param != false)
                return this.globals[param]; 
            return this.globals;
        }

        /**
         *
         */
        public initialize()
        {

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
            return Northwind.Service.DependencyInjector.get().get("tag").tag(
                tag
            );
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
        	return events.tag(tag);
        }

        public getDi()
        {
            return Northwind.Service.DependencyInjector.get();
        }
    }
}
