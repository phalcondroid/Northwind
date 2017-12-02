///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Obj extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("OBJ");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
