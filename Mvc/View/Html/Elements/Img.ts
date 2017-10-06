///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Img extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor(ctx, parameters : Object = {})
        {
            super();
            this.create("img");
            if (!(ctx instanceof Northwind.Mvc.Controller)) {
                throw "context must be instance of View.Controller to " + this.getClassName();
            }
            this.setContext(ctx);
            this.setDi(ctx.getDi());
            this.em = this.getDi().get("em");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }

        public width(width)
        {
            this.element.style.width = width;
            return this;
        }

        public height(height)
        {
            this.element.style.width = height;
            return this;
        }

        public src(src)
        {
            this.attr("src", src);
            return this;
        }
    }
}
