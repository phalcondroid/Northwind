///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class ColGroup extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("COLGROUP");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
