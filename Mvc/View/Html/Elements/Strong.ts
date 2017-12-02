///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Strong extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("STRONG");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
