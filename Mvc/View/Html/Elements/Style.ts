///<reference path="../../Component.ts"/>

namespace Northwind.Tag
{
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Style extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("STYLE");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
