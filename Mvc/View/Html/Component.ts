
///<reference path="../../../Helper/ArrayHelper.ts"/>
///<reference path="../../../Service/DependencyInjector.ts"/>

namespace Northwind.Html
{
    /**
     *
     * @type
     */
    export class Component
    {
        /**
         *
         */
        public static NO_CONTEXT = 1;

        /**
         * Node javascript element
         */
        public element;

        /**
         * Controller
         */
        public context;

        /**
         *
         */
        public id;

        /**
         *
         */
        public args;

        /**
         *
         */
        private deny = ["Table", "Td", "Div", "Thead", "Tbody", "Tfoot", "Tr", "Td", "Th", "Label", "Span", "I", "A"];

        /**
         * 
         * @type
         */
        private url = "";

        /**
         * @type
         */
        private className;

        /**
         * @type
         */
        private globals;

        /**
         *
         */
        private di;

        /**
         *
         * @param  
         * @return
         */
        public constructor(name: any = "", newClone = false)
        {
            if (typeof name.nodeName != "undefined") {
                this.id      = name.getAttribute("id");
                this.element = this.init(name.nodeName, this.id);
            } else if (typeof name.target != "undefined") {
                this.element = name.target;
            } else if (typeof name == "string") {
                this.id      = name;
                this.element = this.init(name, name);
            } else {
                this.id      = name;
                this.element = this.init(this.getClassName(), name);
            }
            return this;
        }

        /**
         *
         */
        public initialize()
        {
        }

        /**
         * 
         */
        public setGlobals(globals)
        {
            this.globals = globals;
            return this;
        }

        /**
         * 
         */
        public getGlobals()
        {
            return this.globals;
        }

        /**
         *
        public getArguments(args)
        {
            if (typeof args == "object") {
                let argsTemp = new Array();
                for (let i = 0; i < args.length; i++) {
                    if (args[i] != "atmpnil" && !(args[i] instanceof Northwind.Mvc.Controller)) {
                        argsTemp.push(args[i]);
                    }
                }
                return argsTemp;
            } else {
                return false
            }
        }
        */

        /**
         *
         */
        public setId(id : string)
        {
            this.attr("id", id);
            return this;
        }

        /**
         *
         */
        public getId()
        {
            return this.attr("id");
        }

        /**
         *
         */
        public setArgs(args)
        {
            this.args = args;
            return this;
        }

        /**
         *
         */
        public getArgs()
        {
            return this.args;
        }

        /**
         *
         */
        public setElement(element)
        {
            this.element = element;
            return this;
        }

        /**
         *
         */
        public setRequired(req)
        {
            this.element.required = req;
            return this;
        }

        /**
         *
         */
        public getRequired()
        {
            return this.element.required;
        }

        /**
         *
         */
        public show()
        {
            this.element.style.display = "";
            return this;
        }

        /**
         *
         */
        public hide()
        {
            this.element.style.display = "none";
            return this;
        }

        /**
         *
         */
        public create(tag: string)
        {
            this.element = this.init(tag, this.id);
            return this;
        }

        /**
         * Create html component like jquery object
         *
         * @param  {string} element [description]
         * @param  {string} name    [description]
         * @return ViewElement
         */
        public init(element: string, name: string)
        {
            this.className = element;
            let docElement = document.createElement(element);
            if (element === "Button") {
                docElement.setAttribute("type", "button");
            }
            if (name !== "") {
                if (Northwind.Helper.ArrayHelper.inArray(this.deny, element)) {
                    docElement.setAttribute("name", name);
                }
                docElement.setAttribute("id", name);
            }
            return docElement;
        }

        /**
         *
         * @return 
         */
        public getType() {
            return this.className;
        }

        /**
         * Set class 
         * @param  {string} attrClass 
         * @return {this}  [description]
         */
        public class(attrClass: string)
        {
            this.element.setAttribute("class", attrClass);
            return this;
        }

        /**
         * 
         */
        public addClass(attrClass : string)
        {
            let strClass = this.element.getAttribute("class");
            strClass += " " + attrClass;
            this.element.setAttribute("class", strClass);
            return this;
        }

        /**
         * Set inner html throught
         */
        public setInnerHtml(html)
        {
            this.element.innerHTML = html;
            return this.element;
        }

        /**
         *
         */
        public getAttribute(attr)
        {
            return this.element.getAttribute(attr);
        }

        /**
         *
         * @return {[type]} [description]
         */
        public addChild(element)
        {
            this.element.append(element);
            return this;
        }

        /*
        public valueListener(fn : Function)
        {
            valueListenerNative.bind(this)(fn);
            return this;
        }
        */

        public destroyEvent(event)
        {
            let nameEvent = "on" + event;
            this.element.removeEventListener(
                "click",
                this.element.nameEvent
            );
        }

        /**
         *
         */
        public removeAttr(attr)
        {
            this.element.removeAttribute(attr);
            return this;
        }

        /**
         * [get description]
         * @return {[type]} [description]
         */
        public getElement()
        {
            return this.element;
        }

        /**
         * Append elements
         * @param value append
         * @return this
         */
        public append(append)
        {
            if (Array.isArray(append) || (append instanceof HTMLCollection)) {
                for (let key in append) {
                    this.checkAppendValue(
                        append[key]
                    );
                }
            } else {
                this.checkAppendValue(
                    append
                );
            }

            return this;
        }

        /**
         *
         */
        public data(key, value = false)
        {
            if (value) {
                this.getElement().data(
                    key,
                    value
                );
            } else {
                this.getElement().data(
                    key
                );
            }
            return this;
        }

        /**
         *
         */
        private checkAppendValue(append)
        {
            switch (typeof append) {
                case "string":
                        this.element.appendChild(
                            document.createTextNode(append)
                        );
                    break;
                case "number":
                        this.element.appendChild(
                            document.createTextNode(
                                append.toString()
                            )
                        );
                    break;
                case "object":
                        if (typeof append.getElement() != "undefined") {
                            this.verifyElement(
                                append.getElement()
                            );
                        } else {
                            this.verifyElement(
                                append
                            );
                        }
                    break;
                default:

                    break;
            }
        }

        /**
         *
         * @param  html [description]
         * @return
         */
        public html(html: any = null)
        {
            if (html != null) {
                this.removeChildNodes();
                this.append(html);
                return this;
            } else {
                return this.element.innerHTML;
            }
        }

        /**
         *
         */
        public verifyElement(append, type : string = "append")
        {
            if (this.element instanceof HTMLCollection) {
                for (let key in this.element) {
                    if (typeof this.element[key].nodeType != "undefined") {
                        if (this.element[key].nodeType == 1) {
                            this.element[key].appendChild(
                                append
                            );
                        }
                    }
                }
            } else {
                this.element.appendChild(
                    append
                );
            }
        }

        /**
         *
         */
        private removeChildNodes()
        {
            if (this.element instanceof HTMLCollection) {
                for (let key in this.element) {
                    this.removeChilds(
                        this.element[key],
                        this.element[key].childNodes
                    );
                }
            } else {
                this.removeChilds(
                    this.element,
                    this.element.childNodes
                );
            }
        }

        /**
         *
         */
        private removeChilds(element, childs)
        {
            while (element.firstChild) {
                element.removeChild(
                    element.firstChild
                );
            }
        }

        /**
         *
         * @param attr
         * @return
         */
        public attr(attr, value : any = false)
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

        /**
         *
         * @param  {[type]} event [description]
         * @return {[type]}       [description]
         */
        public unbind(event) {
            this.element.destroyEvent(event);
            return this;
        }

        /**
         * [getClassName description]
         * @return {[type]} [description]
         */
        public getClassName() {
            let funcNameRegex = /function (.{1,})\(/;
            let results  = (funcNameRegex).exec(this["constructor"].toString());
            return (results && results.length > 1) ? results[1] : "";
        }

        /**
         * [validateAndSet description]
         * @param  {[type]} config [description]
         * @return {[type]}        [description]
         */
        public validateAndSet(config) {
            try {
                if (typeof config.name === "undefined") {
                    throw "The identify is required";
                } else if (typeof config.element === "undefined") {
                    throw "The type element is required";
                } else if (typeof config.event !== "undefined") {

                }
            } catch (e) {
                console.log(e);
            }
        }

        /**
         *
         * @param  {any = null}        val [description]
         * @return {[type]}   [description]
         */
        public val(val: any = false)
        {
            if (val || typeof val == "string") {
                this.element.value = val;
                this.attr("value", val);
                return this;
            } else {
                return this.element.value;
            }
        }

        /**
         * 
         */
        public valAsInt()
        {
            return parseInt(this.val());
        } 

        /**
         * zzzz
         * @param  {any = null}        text [description]
         * @return {[type]}   [description]
         */
        public text(text: any = false) {
            if (text) {
                this.element.innerHtml = text;
                return this;
            } else {
                return this.element.innerHtml;
            }
        }

        /**
         *
         */
        public empty()
        {
            this.removeChildNodes();
            return this;
        }

        /**
         *
         *
         * */
        public getChilds()
        {
            let childNodes = this.element.childNodes;
            let childs = new Array();
            for (let key in childNodes) {
                if (childNodes[key].nodeType == 1) {
                    let adapter = new Northwind.Tag.TagAdapter(
                        childNodes[key]
                    );
                    let tagObject = adapter.get();
                    tagObject.setDi(this.getDi());
                    childs.push(
                        tagObject
                    );
                }
            }
            return childs;
        }

        /*
        public getSiblings()
        {
            let siblings = this.getParent().getChilds();
            if (siblings.length > 0) {
                let aux = new Array;
                for (let item of siblings) {
                    if (item.getElement() != this.getElement()) {
                        aux.push(item);
                    }
                }
                return aux;
            }
            return false;
        }
        */

        /*
        public getParent()
        {
            let parent = this.element.parentElement;
            if (parent.nodeType == 1) {
                let adapter = new Northwind.Tag.TagAdapter(
                    parent
                );
                let tagObject = adapter.get();
                tagObject.setDi(this.getDi());
                return tagObject;
            }
            return false;
        }
        */

        /**
         *
        public getAsObject() : any[]
        {
            let childs = this.element.childNodes;
            let obj    = new Array();

            if (childs instanceof NodeList) {
                for (let key in childs) {
                    if (typeof childs[key].nodeType != "undefined") {
                        switch (childs[key].nodeType) {
                            case Node.ELEMENT_NODE:
                                    let adapter = new Northwind.Tag.TagAdapter(
                                        childs[key]
                                    );
                                    let auxElement = adapter.get();
                                    auxElement.setDi(
                                        this.getDi()
                                    );
                                    let finalObj  = {};
                                    let auxObject = auxElement.getAsObject();
                                    finalObj[auxElement.getClassName().toLowerCase()] = auxObject;
                                    if (auxObject.length > 0) {
                                        obj.push(finalObj);
                                    }
                                break;
                            case Node.TEXT_NODE:
                                    obj.push(
                                        childs[key].nodeValue
                                    );
                                break;
                        }
                    }
                }
            }
            return obj;
        }
        */

        /**
         *
        public getAsJson()
        {
            let objects = this.getAsObject();
            return JSON.stringify(
                objects
            );
        }
        */

        /**
         *
         */
        public remove(element = false)
        {
            if (element) {
                this.getElement().removeChild(
                    element
                );
            } else {
                this.getElement().parentElement.removeChild(
                    this.getElement()
                );
            }
        }

        public getMyId()
        {
            let str = this.getClassName() + JSON.stringify(this);
            window.btoa(
                encodeURIComponent(str)
            );
        }

        public getDom()
        {
            return Northwind.Service.DependencyInjector.get().get(
                "dom"
            );
        }

        public getAjax()
        {
            return Northwind.Service.DependencyInjector.get().get(
                "ajax"
            );
        }

        public getEm()
        {
            return Northwind.Service.DependencyInjector.get().get(
                "em"
            );
        }

        public getContainer()
        {
            return Northwind.Service.DependencyInjector.get().get(
                "container"
            );
        }

        /**
         * 
         * @param name 
        public getTag(tag : any)
        {
            if (tag instanceof Northwind.Html.Component) {
        	    return Northwind.Service.DependencyInjector.get().get("tag").tag(
                    tag
                );
            } else {
        	    return Northwind.Service.DependencyInjector.get().get(
                    "tag"
                );
            }
        }
        */

        /**
         *  
         */
        public getUrl()
        {
            let url = Northwind.Service.DependencyInjector.get().get(
                "url"
            );
            return url;
        }

        /**
         * 
         * @param tag 
        public getEvent(tag : any = false)
        {
            let events = Northwind.Service.DependencyInjector.get().get(
                "event"
            );
            if (tag instanceof Northwind.Html.Component) {
        	    return events.tag(tag);
            } else {
        	    return events;
            }
        }
        */

        public getDi()
        {
            return Northwind.Service.DependencyInjector.get();
        }
    }
}
