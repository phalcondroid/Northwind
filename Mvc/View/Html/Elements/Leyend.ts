///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Leyend extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor(ctx, parameters : Object = {})
        {
            super();
            this.create("leyend");
            if (!(ctx instanceof Northwind.Mvc.Controller)) {
                throw "Context must be instance of View.Controller to " + this.getClassName();
            }
            this.setContext(ctx);
            this.setDi(ctx.getDi());
            this.em = this.getDi().get("em");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }
    }
}
