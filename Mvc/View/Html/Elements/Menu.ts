///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

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
            super();
            this.create("menu");
            
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
