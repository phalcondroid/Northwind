///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Ul extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("UL");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
