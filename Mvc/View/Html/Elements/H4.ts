///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class H4 extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("H4");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
