///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Cite extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("CITE");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
