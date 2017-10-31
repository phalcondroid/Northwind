///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

function ValidationDecorator<TFunction extends Function>(target: TFunction): TFunction {
    Object.defineProperty(target.prototype, 'test', {
        value: function() {
            console.log('test call');
            return 'test result';
        }
    });
    return target;
}

namespace Northwind.Tag
{
    /**
     * 
     * @type 
     */
    @ValidationDecorator
    export class Form extends Northwind.Html.Component
    {
        /**
         *
         */
        private invalidElements = new Array;

        /**
         *
         */
        public constructor()
        {
            super("FORM");
            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }

        /**
         *
         */
        public submit(fn : Function)
        {
            this.getElement().addEventListener("submit", function (event) {
                let returnCallback = fn.bind(this)(event);
                if (returnCallback == false || typeof returnCallback == "undefined") {
                    event.preventDefault();
                }
                return true;
            }.bind(this));
        }

        /**
         *
         */
        public getInvalidElements()
        {
            return this.invalidElements;
        }

        /**
         *
         */
        public validate(fn : Function)
        {
            let elements = this.getFormElements();
            this.invalidElements = new Array;
            if (elements.length > 0) {
                for (let item of elements) {
                    if (item.val() == "") {
                        this.invalidElements.push(
                            item
                        );
                    }
                }
                if (this.invalidElements.length == 0) {
                    return false;
                } else {
                    return true;
                }
            }
            return true;
        }

        /**
         *
         */
        public getFormElements()
        {
            let northwindElements = new Array;
            let elements = this.element.elements;
            for (let item of elements) {
                let aux = new Northwind.Tag.TagAdapter(item);
                aux.setDi(this.getDi());
                let element = aux.get();
                if (element != false) {
                    northwindElements.push(
                        element
                    );
                }
            }
            return northwindElements;
        }

        public setAutoComplete(data : Boolean)
        {
            if (data) {
                this.attr("autocomplete", "on");
            } else {
                this.attr("autocomplete", "off");
            }
            return this;
        }

        public getAutoComplete()
        {
            return this.attr("autocomplete");
        }
    }
}
