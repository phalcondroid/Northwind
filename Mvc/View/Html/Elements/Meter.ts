///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Meter extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("METER");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}