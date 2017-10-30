
///<reference path="../Component.ts"/>

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
        public constructor()
        {
            super("A");
            this.href("");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }

        /**
         * [favIcon description]
         * @return {[type]} [description]
         */
        public favIcon(favIcon) {
            let icon = new Northwind.Tag.I()
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
