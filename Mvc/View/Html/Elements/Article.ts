///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag
{
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Article extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("ARTICLE");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}