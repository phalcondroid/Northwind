///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Sup extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("SUP");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
