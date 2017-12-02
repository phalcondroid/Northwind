///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Ins extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("INS");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
