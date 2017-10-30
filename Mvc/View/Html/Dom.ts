///<reference path="./TagAdapter.ts"/>

namespace Northwind.Html
{
    export class Dom
    {
        private di;

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
            adapter.setDi(this.di);
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
                    adapter.setDi(this.di);
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
                let adapter = new Northwind.Tag.TagAdapter(
                    elements[key]
                );
                adapter.setDi(this.di);
                result.push(
                    adapter.get()
                );
            }
            if (result.length == 1) {
                return result[0];
            }
            return this;
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

        public setDi(di)
        {
            this.di = di;
        }

        public getDi()
        {
            return this.di;
        }
    }
}