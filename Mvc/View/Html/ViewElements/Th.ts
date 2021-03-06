///<reference path="../Component.ts"/>

namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Th extends Northwind.Html.Component
    {
        /**
         *
         */
        public constructor()
        {
            super("TH");
            
            this.initialize();
        }

        /*
         *
         * @param  {[type]} num [description]
         * @return {[type]}     [description]
         */
        public colspan(cols) {
            this.attr({
                "colspan" : cols
            });
            return this;
        }

        /**
         *
         * @param  {[type]} row [description]
         * @return {[type]}     [description]
         */
        public rowspan(rows) {
            this.attr({
                "rowspan" : rows
            });
            return this;
        }
    }
}
