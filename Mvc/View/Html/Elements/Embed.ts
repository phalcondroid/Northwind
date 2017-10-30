///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Embed extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("EMBED");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
