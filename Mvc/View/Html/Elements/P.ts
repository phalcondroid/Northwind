///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class P extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("P");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
