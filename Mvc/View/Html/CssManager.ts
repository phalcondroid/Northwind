
namespace Northwind.View
{
    export class CssManager
    {
        private element;
        /**
         * 
         * @param element
         */
        public constructor(element)
        {
            this.element = element;
        }

        /**
         * [css description]
         * @param   css [description]
         * @return
         */
        public css(css, value : any = null) {
            if (typeof css == "object") {
                for (let key in css) {
                    this.element.style[key] = css[key];
                }
            } else if (typeof css == "string" && value != null) {
                this.element.style[css] = value;
            } else if (typeof css == "string" && value == null) {
                return this.element.style[css];
            }
            return this;
        }

        public show()
        {
            this.css("display", "");
        }

        public hide()
        {
            this.css("display", "none");
        }
    }
}