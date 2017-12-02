///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Tbody extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("TBODY");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
