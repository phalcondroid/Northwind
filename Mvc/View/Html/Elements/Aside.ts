///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Aside extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("ASIDE");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
