///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Div extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("DIV");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
