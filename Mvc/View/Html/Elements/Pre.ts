///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Pre extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("PRE");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
