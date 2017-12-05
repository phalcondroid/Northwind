///<reference path="../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Td extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("TD");
            
            this.initialize();
        }

        /**
         *
         * @param  {[type]} num [description]
         * @return {[type]}     [description]
         */
        public colspan(cols)
        {
            this.attr({
                "colspan" : cols
            });
            return this;
        }

         /** no pedi las hamburguesas soy un mk acompalene a comprar
         * @param  {[type]} row [description]
         * @return {[type]}     [description]
         */
        public rowspan(rows)
        {
            this.attr({
                "rowspan" : rows
            });
            return this;
        }
    }
}
