///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Blockquote extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("BLOCKQUOTE");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
