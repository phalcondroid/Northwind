///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Menuitem extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("MENUITEM");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
