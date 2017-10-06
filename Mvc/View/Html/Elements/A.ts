
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
///<reference path="../../Interfaces/ITagSignature.ts"/>

namespace Northwind.Tag
{

    /**
     *
     */
    export class A extends Northwind.Html.Component
    {

        /**
         *
         */
        public constructor(ctx, p1 : Object = {})
        {
            super();
            this.create("a");
            if (!(ctx instanceof Northwind.Mvc.Controller)) {
                throw "context must be instance of View.Controller to " + this.getClassName();
            }
            this.setContext(ctx);
            this.setDi(ctx.getDi());
            this.em = this.getDi().get("em");
            this.href("");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }

        /**
         * [favIcon description]
         * @return {[type]} [description]
         */
        public favIcon(favIcon) {
            let icon = new Northwind.Tag.I(this.getContext())
            .class(favIcon);
            this.append(icon.getElement());
            return this;
        }

        /**
         * [href description]
         * @param  {[type]} href [description]
         * @return {[type]}      [description]
         */
        public href(href) {
            this.attr("href", href);
            return this;
        }
    }
}
