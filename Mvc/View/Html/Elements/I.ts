///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class I extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("I");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}