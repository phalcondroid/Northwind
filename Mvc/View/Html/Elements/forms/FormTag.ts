
///<reference path="../../Component.ts"/>

namespace Northwind.Tag
{
    export class FormTag extends Northwind.Html.Component
    {
    	/**
    	 * Set form element property readonly
    	 * @param {Boolean} readOnly
    	 */
    	public setReadOnly(readOnly : Boolean)
        {
            this.getElement().readOnly = readOnly;
            return this;
        }

        /**
         * Get form read only 
         */
        public getReadOnly()
        {
            return this.getElement().readOnly;
        }

        /**
         * Set disabled
	     * @param {Boolean} disabled
         */
        public setDisabled(disabled : Boolean)
        {
            this.getElement().disabled = disabled;
            return this;
        }

        public getDisabled()
        {
            return this.getElement().disabled;
        }

        public setSize(size : string | number)
        {
            this.attr("size", size);
            return this;
        }

        public getSize()
        {
            return this.attr("size");
        }

        public setMaxLength(max)
        {
            this.attr("maxlength", max);
            return this;
        }

        public getMaxLength()
        {
            return this.attr("maxlength");
        }

        public setAutoFocus(data : Boolean)
        {
            this.getElement().autofocus = data;
            return this;
        }

        public getAutoFocus()
        {
            return this.getElement().autofocus;
        }

        public setMin(min : number)
        {
            this.attr("min", min);
            return this;
        }

        public getMin()
        {
            return parseInt(this.attr("min"));
        }

        public setMax(max : number)
        {
            this.attr("max", max);
            return this;
        }

        public getMax()
        {
            return parseInt(this.attr("max"));
        }

        /**
         *
         */
        public setAlt(alt : string)
        {
            this.attr("alt", alt);
            return this;
        }

        /**
         *
         */
        public getAlt()
        {
            return this.attr("alt");
        }

        /**
         *
         */
        public setPlaceholder(placeholder : string)
        {
            this.attr("placeholder", placeholder);
            return this;
        }

        /**
         *
         */
        public getPlaceholder()
        {
            return this.attr("placeholder");
        }

        /**
         *
         */
        public setTitle(title : string)
        {
            this.attr("title", title);
            return this;
        }

        /**
         *
         */
        public getTitle()
        {
            return this.attr("title");
        }

        /**
         *
         */
        public setPattern(pattern : string | number)
        {
            switch (pattern) {
                case Northwind.Tag.Input.NUMBERS:
                    this.attr("pattern", "[0-9]");
                    break;
                case Northwind.Tag.Input.TEXT:
                    this.attr("pattern", "[A-Za-z]{3}");
                    break;
                case Northwind.Tag.Input.NO_SPECIAL_CHARACTERS:
                    this.attr("pattern", "{3}");
                    break;
                case Northwind.Tag.Input.NUMBERS_NO_SPECIAL_CHARACTERS:
                    this.attr("pattern", "[0-9]{3}");
                    break;
                case Northwind.Tag.Input.TEXT_NO_SPECIAL_CHARACTERS:
                    this.attr("pattern", "[A-Za-z]{3}");
                    break;
                default:
                    this.attr("pattern", pattern);
                    break;
            }
            return this;
        }

        /**
         *
         */
        public getPattern()
        {
            return this.attr("pattern");
        }

        /**
         *
         */
        public setName(name : string)
        {
            this.attr("name", name);
            return this;
        }

        /**
         *
         */
        public getName()
        {
            return this.attr("name");
        }

        /**
         *
         */
        public setStep(num : number)
        {
            this.attr("step", num);
            return this;
        }

        /**
         *
         */
        public getStep()
        {
            return this.attr("step");
        }

        /**
         *
         */
        public validate(fn : Function | Boolean = false)
        {
            if (this.val() == "" || typeof this.val() == "undefined") {
            	return false;
            }
        }
    }
}