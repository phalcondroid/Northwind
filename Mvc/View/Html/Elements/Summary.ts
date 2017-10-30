///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Summary extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("SUMMARY");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
