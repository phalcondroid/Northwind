///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Form extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("FORM");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
