///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Time extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("TIME");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
