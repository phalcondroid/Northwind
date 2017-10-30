///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Keygen extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("KEYGEN");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
