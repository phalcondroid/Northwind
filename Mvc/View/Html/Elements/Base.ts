///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Base extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("BASE");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
