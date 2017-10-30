///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Title extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("TITLE");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
