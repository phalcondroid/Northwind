///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Section extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("SECTION");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
