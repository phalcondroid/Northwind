///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Address extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("ADDRESS");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}