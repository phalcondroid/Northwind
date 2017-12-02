///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Title extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("TITLE");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
