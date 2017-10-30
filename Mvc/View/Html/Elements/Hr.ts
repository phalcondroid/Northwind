///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Hr extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("HR");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
