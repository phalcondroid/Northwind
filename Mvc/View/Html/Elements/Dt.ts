///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Dt extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("DT");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
