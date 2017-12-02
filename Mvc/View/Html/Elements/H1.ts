///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class H1 extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("H1");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
