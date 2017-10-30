///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Script extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("SCRIPT");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
