///<reference path="../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Abbr extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor(ctx, p1 : Object = {})
        {
            super();
            this.create("abbr");
            if (!(ctx instanceof Northwind.Mvc.Controller)) {
                throw "context must be instance of View.Controller to " + this.getClassName();
            }
            this.setContext(ctx);
            this.setDi(ctx.getDi());
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
