///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Figure extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("FIGURE");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}