///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Audio extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("AUDIO");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
