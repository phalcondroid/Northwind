
namespace Northwind.View
{
    export class ElementManager
    {
        private element;

        public constructor(element)
        {
            this.element = element;
        }

        /**
         * [clone description]
         * @return {[type]} [description]
         */
        public clone(newIdentify = "") {
            let newElement = this.element.clone();
            return;
        }

        /**
         *
         * @param attr
         * @return
         */
        public getAttribute(attr, value : any = false)
        {
            if (typeof attr == "object" && value == false) {
                for (let key in attr) {
                    this.element.setAttribute(key, attr[key]);
                }
            } else if (typeof attr == "string" && value != false) {
                this.element.setAttribute(attr, value);
            } else if (typeof attr == "string" && value == false) {
                return this.element.getAttribute(attr);
            }
            return this;
        }

        /**
         * 
         * @param val 
         */
        public getValue(val : any = false)
        {
            if (val || typeof val == "string") {
                this.element.value = val;
                this.getAttribute("value", val);
                return this;
            } else {
                return this.element.value;
            }
        }
    }
}