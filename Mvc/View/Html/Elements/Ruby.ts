///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Ruby extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("RUBY");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
