///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class S extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("S");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
