///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Dfn extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("DFN");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
