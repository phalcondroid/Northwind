///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Leyend extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("LEYEND");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
