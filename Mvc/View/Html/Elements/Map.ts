///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Map extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("MAP");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
