///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Iframe extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("IFRAME");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
