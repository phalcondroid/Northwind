///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Nav extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("NAV");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
