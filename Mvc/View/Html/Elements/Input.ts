///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag
{
    /**
     * [Input description]
     * @type {[type]}
     */
    export class Input extends Northwind.Html.Component
    {
        public static NUMBERS = 0;
        public static TEXT = 1;
        public static NO_SPECIAL_CHARACTERS = 2;
        public static TEXT_NO_SPECIAL_CHARACTERS = 3;
        public static NUMBERS_NO_SPECIAL_CHARACTERS = 4;

        /**
         *
         */
        public constructor()
        {
            super("INPUT");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }

        /**
         * 
         */
        public getValue()
        {
            return this.element.value;
        }

        /**
         *
         */
        public setValue(value)
        {
            this.element.value = value;
            return this;
        }

        /**
         * [type description]
         * @param  {[type]} type [description]
         * @return {[type]}      [description]
         */
        public type(type)
        {
            this.attr("type", type);
            return this;
        }

        public setText()
        {
            this.attr("type", "text");
            return this;
        }

        public setHidden()
        {
            this.attr("type", "hidden");
            return this;
        }

        public setNumber()
        {
            this.attr("type", "number");
            return this;
        }

        public setDate()
        {
            this.attr("type", "number");
            return this;
        }

        public setFile()
        {
            this.attr("type", "file");
            return this;
        }

        public setReadOnly(readOnly : Boolean)
        {
            this.getElement().readOnly = readOnly;
            return this;
        }

        public getReadOnly()
        {
            return this.getElement().readOnly;
        }

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

        public setAlt(alt : string)
        {
            this.attr("alt", alt);
            return this;
        }

        public getAlt()
        {
            return this.attr("alt");
        }

        public setPlaceholder(placeholder : string)
        {
            this.attr("placeholder", placeholder);
            return this;
        }

        public getPlaceholder()
        {
            return this.attr("placeholder");
        }

        public setTitle(title : string)
        {
            this.attr("title", title);
            return this;
        }

        public getTitle()
        {
            return this.attr("title");
        }

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

        public getPattern()
        {
            return this.attr("pattern");
        }

        public setName(name : string)
        {
            this.attr("name", name);
            return this;
        }

        public getName()
        {
            return this.attr("name");
        }

        public setStep(num : number)
        {
            this.attr("step", num);
            return this;
        }

        public getStep()
        {
            return this.attr("step");
        }
    }
}
