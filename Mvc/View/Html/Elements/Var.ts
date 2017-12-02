///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Var extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("VAR");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
