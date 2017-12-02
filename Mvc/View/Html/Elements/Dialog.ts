///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Dialog extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("DIALOG");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
