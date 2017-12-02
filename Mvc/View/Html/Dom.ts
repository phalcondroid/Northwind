///<reference path="./TagAdapter.ts"/>

namespace Northwind.Html
{
    export class Dom
    {
        /**
         * 
         */
        private element;

        /**
         * 
         * @param element
         */
        public constructor(element = null)
        {
            if (element != null)
                this.element = element;
        }

        /**
         * 
         * @param id 
         */
        public getById(id : string, context = null)
        {
            let adapter = new Northwind.Tag.TagAdapter(
                document.getElementById(id)
            );
            return adapter.get();
        }

        /**
         *
         */
        public getByTag(name : string)
        {
            let elements = document.getElementsByTagName(
                name
            );
            let result = new Array();
            for (let key in elements) {
                if (typeof elements[key].nodeName == "string") {
                    let adapter = new Northwind.Tag.TagAdapter(
                        elements[key]
                    );
                    result.push(
                        adapter.get()
                    );
                }
            }

            if (result.length == 0) {
                return false;
            }

            if (result.length == 1) {
                return result[0];
            }
            return result;
        }

        /**
         *
         */
        public getByClass(name : string, context = null)
        {
            var elements = document.getElementsByClassName(
                name
            );
            var result = new Array();
            for (let key in elements) {
                if (typeof elements[key].nodeName == "string") {
                    let adapter = new Northwind.Tag.TagAdapter(
                        elements[key]
                    );
                    result.push(
                        adapter.get()
                    );
                }
            }
            if (result.length == 0) {
                return false;
            }
            if (result.length == 1) {
                return result[0];
            }
            return this;
        }

        /**
         *
         */
        public getByName(name : string, context = null)
        {
            let elements = document.getElementsByName(
                name
            );
            let result = new Array();
            for (let key in elements) {
                if (typeof elements[key].nodeName == "string") {
                    let adapter = new Northwind.Tag.TagAdapter(
                        elements[key]
                    );
                    result.push(
                        adapter.get()
                    );
                }
            }

            if (result.length == 0) {
                return false;
            }

            if (result.length == 1) {
                return result[0];
            }
            return result;
        }

        /**
         * 
         */
        public getElement()
        {
            return this.element;
        }

        /**
         * 
         * @param element 
         */
        public setElement(element)
        {
            this.element = element;
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