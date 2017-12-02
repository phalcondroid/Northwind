///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Br extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("BR");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
