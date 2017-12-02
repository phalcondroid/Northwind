///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Body extends Northwind.Html.Component
    {
        public constructor()
        {
            super();
            this.element = document.body;
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
