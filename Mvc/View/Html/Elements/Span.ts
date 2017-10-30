///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Span extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("SPAN");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
