///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Bdi extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("BDI");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}