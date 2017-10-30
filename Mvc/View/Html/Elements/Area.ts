///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag
{
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Area extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("AREA");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}