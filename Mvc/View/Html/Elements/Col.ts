///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Col extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("COL");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
