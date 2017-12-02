///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Noscrip extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("NOSCRIP");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
