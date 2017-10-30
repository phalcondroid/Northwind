///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Thead extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("THEAD");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
