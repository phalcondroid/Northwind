///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Label extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("LABEL");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
