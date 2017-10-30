///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Track extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("TRACK");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
