///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Del extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("DEL");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
