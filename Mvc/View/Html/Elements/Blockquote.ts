///<reference path="../../Component.ts"/>

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
