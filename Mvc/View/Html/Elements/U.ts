///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class U extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("U");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
