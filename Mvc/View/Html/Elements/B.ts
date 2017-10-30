///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class B extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("B");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
