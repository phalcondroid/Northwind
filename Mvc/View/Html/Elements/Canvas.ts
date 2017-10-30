///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Canvas extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("CANVAS");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
