///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class H5 extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("H5");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
