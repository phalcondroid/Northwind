///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Meta extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("META");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
