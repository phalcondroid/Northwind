///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Kbd extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("KBD");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
