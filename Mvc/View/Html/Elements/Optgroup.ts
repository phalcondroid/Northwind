///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Optgroup extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("OPTGROUP");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
