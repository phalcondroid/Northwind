///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Rt extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("RT");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
