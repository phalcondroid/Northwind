///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Output extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("OUTPUT");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
