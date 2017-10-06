///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Caption extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor(ctx, parameters : Object = {})
        {
            super();
            this.create("caption");
            if (!(ctx instanceof Northwind.Mvc.Controller)) {
                throw "context must be instance of View.Controller to " + this.getClassName();
            }
            this.setContext(ctx);
            this.setDi(ctx.getDi());
            this.em = this.getDi().get("em");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
