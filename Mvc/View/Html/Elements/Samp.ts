///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Samp extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("SAMP");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}