///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class H3 extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("H3");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
