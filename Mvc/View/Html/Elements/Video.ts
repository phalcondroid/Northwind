///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Video extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("VIDEO");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}