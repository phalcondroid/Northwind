///<reference path="../../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Db extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("DB");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
