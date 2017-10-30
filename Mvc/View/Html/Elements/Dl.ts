///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Dl extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("DL");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
