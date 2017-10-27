///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     *
     * @type
     */
    export class Option extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super();
            this.create("option");
            
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }

        public setValue(val)
        {
            this.attr("value", val);
            return this;
        }

        /**
         *
         */
        public getValue()
        {
            return this.attr("value");
        }

        /**
         *
         */
        public setContent(content)
        {
            this.append(content);
            return this;
        }

        /**
         *
         */
        public getContent()
        {
            return this.getElement().text;
        }
    }
}
