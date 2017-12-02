///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Textarea extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("TEXTAREA");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
