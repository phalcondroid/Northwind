///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Em extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("EM");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
