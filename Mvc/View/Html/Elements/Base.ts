///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Base extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("BASE");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
