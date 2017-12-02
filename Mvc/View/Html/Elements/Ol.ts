///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Ol extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("OL");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
