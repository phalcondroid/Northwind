///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Datalist extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("DETAILS");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
