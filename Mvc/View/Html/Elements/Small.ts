///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Small extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("SMALL");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
