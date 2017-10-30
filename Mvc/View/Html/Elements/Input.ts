///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag
{
    /**
     * [Input description]
     * @type {[type]}
     */
    export class Input extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("INPUT");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }

        /**
         * 
         */
        public getValue()
        {
            return this.element.value;
        }

        /**
         *
         */
        public setValue(value)
        {
            this.element.value = value;
            return this;
        }

        /**
         * [type description]
         * @param  {[type]} type [description]
         * @return {[type]}      [description]
         */
        public type(type)
        {
            this.attr("type", type);
            return this;
        }
    }
}