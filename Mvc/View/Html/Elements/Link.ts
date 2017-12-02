///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Link extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("LINK");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
