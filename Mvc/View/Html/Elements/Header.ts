///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Header extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("HEADER");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
