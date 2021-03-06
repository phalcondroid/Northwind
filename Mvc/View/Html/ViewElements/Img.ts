///<reference path="../Component.ts"/>

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
        public constructor()
        {
            super("IMG");
            
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
