///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Fieldset extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("FIELDSET");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
