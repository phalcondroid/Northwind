///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class H2 extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("H2");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
