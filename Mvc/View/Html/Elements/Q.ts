///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Q extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("Q");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}