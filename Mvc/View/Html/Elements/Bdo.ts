///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Bdo extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("BDO");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
