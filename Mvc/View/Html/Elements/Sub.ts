///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Sub extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("SUB");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
