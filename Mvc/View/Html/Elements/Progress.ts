///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Progress extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("PROGRESS");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
