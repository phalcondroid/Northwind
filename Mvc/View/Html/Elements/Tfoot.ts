///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Tfoot extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("TFOOT");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
