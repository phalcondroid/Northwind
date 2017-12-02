///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Menu extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("MENU");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
