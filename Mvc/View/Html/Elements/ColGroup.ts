///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

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