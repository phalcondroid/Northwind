///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag
{
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Figcaption extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super();
            this.create("figcaption");
            
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
