///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Rp extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("RP");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
