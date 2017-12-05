///<reference path="../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Head extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("HEAD");
            
            this.initialize();
        }
    }
}
