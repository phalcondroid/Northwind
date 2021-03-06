///<reference path="../Component.ts"/>

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
            super("OPTION");
            
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
