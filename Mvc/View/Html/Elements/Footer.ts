///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Footer extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("FOOTER");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}