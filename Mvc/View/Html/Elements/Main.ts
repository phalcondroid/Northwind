///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Main extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("MAIN");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
