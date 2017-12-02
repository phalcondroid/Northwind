///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Source extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("SOURCE");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
