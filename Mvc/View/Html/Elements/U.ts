///<reference path="../../Component.ts"/>

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
