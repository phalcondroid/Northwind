///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Code extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("CODE");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
