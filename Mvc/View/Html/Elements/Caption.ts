///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Caption extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("CAPTION");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
