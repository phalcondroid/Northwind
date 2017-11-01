var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Northwind;
(function (Northwind) {
    var Environment;
    (function (Environment) {
        var Config = (function () {
            function Config() {
                this.config = {};
            }
            /**
             * Set general config and environment
             *
             * @param Object config
             * @param Number env = Scope.Local
             */
            Config.prototype.setConfig = function (config, env) {
                if (env === void 0) { env = Northwind.Environment.Scope.LOCAL; }
                this.config[env] = config;
            };
            /**
             * Get config was assigned
             *
             * @param Number env = Garlic.Environment.Scope.Local
             * @return Object
             */
            Config.prototype.getConfig = function (env) {
                if (env === void 0) { env = Northwind.Environment.Scope.LOCAL; }
                return this.config[env];
            };
            return Config;
        }());
        Environment.Config = Config;
    })(Environment = Northwind.Environment || (Northwind.Environment = {}));
})(Northwind || (Northwind = {}));
var Northwind;
(function (Northwind) {
    var Environment;
    (function (Environment) {
        var Scope = (function () {
            function Scope() {
            }
            return Scope;
        }());
        Scope.LOCAL = 0;
        Scope.DEV = 1;
        Scope.TEST = 2;
        Scope.QA = 3;
        Scope.STAGING = 4;
        Scope.PRODUCTION = 5;
        Environment.Scope = Scope;
    })(Environment = Northwind.Environment || (Northwind.Environment = {}));
})(Northwind || (Northwind = {}));
var Northwind;
(function (Northwind) {
    var Errors;
    (function (Errors) {
        var Message = (function () {
            function Message() {
            }
            Message.getCodeMessage = function (code, custom) {
                var custom = " => " + custom;
                switch (code) {
                    case Northwind.Errors.MessageCode.NOT_VALID_ARRAY:
                        return Message.NOT_VALID_ARRAY + custom;
                    case Northwind.Errors.MessageCode.NOT_VALID_ARRAY_OBJECT:
                        return Message.NOT_VALID_ARRAY_OBJECT + custom;
                    case Northwind.Errors.MessageCode.NOT_VALID_OBJECT:
                        return Message.NOT_VALID_OBJECT + custom;
                }
            };
            return Message;
        }());
        Message.NOT_VALID_ARRAY = "The object returned in the transaction is not array";
        Message.NOT_VALID_ARRAY_OBJECT = "The objects returned in the transaction into array are not objects, every row must be object key, value";
        Message.NOT_VALID_OBJECT = "The received variable is not an object";
        Errors.Message = Message;
    })(Errors = Northwind.Errors || (Northwind.Errors = {}));
})(Northwind || (Northwind = {}));
var Northwind;
(function (Northwind) {
    var Errors;
    (function (Errors) {
        var MessageCode = (function () {
            function MessageCode() {
            }
            return MessageCode;
        }());
        MessageCode.NOT_VALID_ARRAY = 1;
        MessageCode.NOT_VALID_ARRAY_OBJECT = 2;
        MessageCode.NOT_VALID_OBJECT = 3;
        Errors.MessageCode = MessageCode;
    })(Errors = Northwind.Errors || (Northwind.Errors = {}));
})(Northwind || (Northwind = {}));
var Northwind;
(function (Northwind) {
    var Events = (function () {
        function Events() {
            this.events = {};
            this.params = {};
            this.others = {};
            this.nativeEvents = [];
        }
        Events.prototype.contructor = function () {
            this.nativeEvents = [
                "click",
                "doubleClick",
                "change",
                "keypress",
                "keydown",
                "keyup",
                "paste",
                "blur",
                "focus"
            ];
        };
        /**
         *
         */
        Events.prototype.attach = function (component, event, fn) {
            this.events[component.getClassName()][event][fn];
            return this;
        };
        /**
         *
         */
        Events.prototype.add = function (otherEvent) {
            this.others[otherEvent];
            return this;
        };
        /**
         *
         */
        Events.prototype.detachComponent = function (component) {
            return this;
        };
        /**
         *
         */
        Events.prototype.detach = function (component, event, params) {
            if (params === void 0) { params = false; }
            this.events[component][event];
            this.params[component][event] = params;
            return this;
        };
        /**
         *
         */
        Events.prototype.trigger = function (controller, event, callback, params) {
            if (params === void 0) { params = {}; }
            var result = this.events[controller][event](params);
            return this;
        };
        /**
         *
         */
        Events.prototype.detachAll = function () {
            this.events = {};
            return this;
        };
        /**
         *
         */
        Events.prototype.tag = function (component) {
            if (component instanceof Northwind.Html.Component) {
                this.element = component;
                return this;
            }
            throw "Component must be a instance of Northwind.Html.Component or Northwind.Tag";
        };
        /**
         *
         * @param  {Function} fn [description]
         * @return {[type]}      [description]
         */
        Events.prototype.click = function (fn) {
            this.element.getElement().addEventListener("click", fn.bind(this));
            return this;
        };
        /**
         *
         */
        Events.prototype.doubleClick = function (fn) {
            this.element.getElement().addEventListener("dblclick", fn.bind(this));
            return this;
        };
        /**
         *
         * @return {[type]} [description]
         */
        Events.prototype.change = function (fn) {
            this.element.getElement().addEventListener("change", fn.bind(this));
            return this;
        };
        /**
         * [change description]
         * @return {[type]} [description]
         */
        Events.prototype.keypress = function (fn) {
            this.element.getElement().addEventListener("keypress", fn.bind(this));
            return this;
        };
        /**
         * [change description]
         * @return {[type]} [description]
         */
        Events.prototype.keydown = function (fn) {
            this.element.getElement().addEventListener("keydown", fn.bind(this));
            return this;
        };
        /**
         * [change description]
         * @return {[type]} [description]
         */
        Events.prototype.keyup = function (fn) {
            this.element.getElement().addEventListener("keyup", fn.bind(this));
            return this;
        };
        Events.prototype.paste = function (fn) {
            this.element.getElement().addEventListener("paste", fn.bind(this));
            return this;
        };
        /**
         * [change description]
         * @return {[type]} [description]
         */
        Events.prototype.blur = function (fn) {
            this.element.getElement().addEventListener("blur", fn.bind(this));
            return this;
        };
        /**
         * [change description]
         * @return {[type]} [description]
         */
        Events.prototype.focus = function (fn) {
            this.element.getElement().addEventListener("focus", fn.bind(this));
            return this;
        };
        Events.prototype.setDi = function (di) {
            this.di = di;
            return this;
        };
        Events.prototype.getDi = function () {
            return this.di;
        };
        return Events;
    }());
    Events.AFTER = 1;
    Events.BEFORE = 2;
    Events.ONCREATE = 3;
    Events.ONDELETE = 4;
    Events.ONCHANGE = 5;
    Northwind.Events = Events;
})(Northwind || (Northwind = {}));
/// <reference path="./EventManagerInterface.ts"/>
var Northwind;
(function (Northwind) {
    var Helper;
    (function (Helper) {
        var ArrayHelper = (function () {
            function ArrayHelper() {
            }
            ArrayHelper.inArray = function (container, element) {
                for (var key in container) {
                    if (container[key] == element) {
                        return true;
                    }
                }
                return false;
            };
            return ArrayHelper;
        }());
        Helper.ArrayHelper = ArrayHelper;
    })(Helper = Northwind.Helper || (Northwind.Helper = {}));
})(Northwind || (Northwind = {}));
var Northwind;
(function (Northwind) {
    var Helper;
    (function (Helper) {
        var MathHelper = (function () {
            function MathHelper() {
            }
            MathHelper.getRandom = function (init, last) {
                return Math.floor((Math.random() * last) + init);
            };
            MathHelper.getUUID = function () {
                return this.getS4() + this.getS4() + '-' +
                    this.getS4() + '-' + this.getS4() + '-' +
                    this.getS4() + '-' + this.getS4() +
                    this.getS4() + this.getS4();
            };
            MathHelper.getS4 = function () {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            };
            return MathHelper;
        }());
        Helper.MathHelper = MathHelper;
    })(Helper = Northwind.Helper || (Northwind.Helper = {}));
})(Northwind || (Northwind = {}));
var Northwind;
(function (Northwind) {
    var Helper;
    (function (Helper) {
        var StringHelper = (function () {
            function StringHelper() {
            }
            /**
             * [sanitizeString description]
             * @param  {string} str [description]
             * @return {[type]}     [description]
             */
            StringHelper.sanitizeString = function (str) {
                var idTr = str.replace(/[`~!@#$%^&*()_|+\-=?;:"",.<>\{\}\[\]\\\/]/gi, "").toLowerCase();
                idTr = idTr.toString().replace(/\s/g, "");
                return idTr;
            };
            /**
             * [capitalize description]
             * @param  {[type]} str [description]
             * @return {[type]}     [description]
             */
            StringHelper.capitalize = function (str) {
                return str.charAt(0).toUpperCase() + str.slice(1);
            };
            return StringHelper;
        }());
        Helper.StringHelper = StringHelper;
    })(Helper = Northwind.Helper || (Northwind.Helper = {}));
})(Northwind || (Northwind = {}));
var Northwind;
(function (Northwind) {
    var Helper;
    (function (Helper) {
        var Uuid = (function () {
            function Uuid() {
            }
            Uuid.get = function () {
                var helper = Northwind.Helper;
                return helper.MathHelper.getS4() + helper.MathHelper.getS4() + '-' +
                    helper.MathHelper.getS4() + '-' + helper.MathHelper.getS4() + '-' +
                    helper.MathHelper.getS4() + '-' + Helper.MathHelper.getS4() +
                    helper.MathHelper.getS4() + helper.MathHelper.getS4();
            };
            return Uuid;
        }());
        Helper.Uuid = Uuid;
    })(Helper = Northwind.Helper || (Northwind.Helper = {}));
})(Northwind || (Northwind = {}));
/// <reference path="../Errors/Message.ts"/>
var Northwind;
/// <reference path="../Errors/Message.ts"/>
(function (Northwind) {
    var Helper;
    (function (Helper) {
        var Validator = (function () {
            function Validator() {
            }
            Validator.validStructArray = function (data) {
                var message = Northwind.Errors.Message;
                try {
                    if (Array.isArray(data)) {
                        var firstPosition = data[0];
                        if (typeof firstPosition == "object") {
                            return true;
                        }
                        else {
                            throw message.NOT_VALID_ARRAY_OBJECT;
                        }
                    }
                    else {
                        throw message.NOT_VALID_ARRAY;
                    }
                }
                catch (e) {
                }
            };
            return Validator;
        }());
        Helper.Validator = Validator;
    })(Helper = Northwind.Helper || (Northwind.Helper = {}));
})(Northwind || (Northwind = {}));
/*
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
*/
var Northwind;
/*
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
*/
(function (Northwind) {
    var Mvc;
    (function (Mvc) {
        //@sealed
        var Application = (function () {
            function Application() {
            }
            return Application;
        }());
        Mvc.Application = Application;
    })(Mvc = Northwind.Mvc || (Northwind.Mvc = {}));
})(Northwind || (Northwind = {}));
var Northwind;
(function (Northwind) {
    var Service;
    (function (Service) {
        var Container = (function () {
            function Container() {
                this.service = [];
            }
            Container.prototype.set = function (serviceName, content) {
                this.service[serviceName] = content;
            };
            Container.prototype.get = function (serviceName) {
                return this.service[serviceName];
            };
            Container.prototype.hasKey = function (serviceName) {
                if (typeof this.service[serviceName] == "undefined") {
                    return false;
                }
                return true;
            };
            Container.prototype.setPersistent = function (serviceName, content) {
                sessionStorage.setItem(serviceName, content);
            };
            Container.prototype.getPersistent = function (serviceName) {
                return sessionStorage.getItem(serviceName);
            };
            return Container;
        }());
        Service.Container = Container;
    })(Service = Northwind.Service || (Northwind.Service = {}));
})(Northwind || (Northwind = {}));
var Northwind;
(function (Northwind) {
    var Network;
    (function (Network) {
        var Ajax = (function () {
            /**
             *
             */
            function Ajax() {
                this.context = {};
                this.method = "POST";
                this.parameters = "";
                this.container = [];
                this.responseFn = function () { };
                this.bfSendFn = function () { }.bind(this);
                this.httpRequest = new XMLHttpRequest();
            }
            /**
             *
             */
            Ajax.prototype.setContext = function (ctx) {
                this.context = ctx;
            };
            /**
             *
             */
            Ajax.prototype.getContext = function () {
                return this.context;
            };
            /**
             *
             */
            Ajax.prototype.setUrl = function (url) {
                this.url = url;
                return this;
            };
            /**
             *
             */
            Ajax.prototype.getUrl = function () {
                return this.url;
            };
            /**
             *
             */
            Ajax.prototype.set = function (key, value) {
                this.container[key] = value;
            };
            /**
             *
             */
            Ajax.prototype.get = function (key) {
                return this.container[key];
            };
            /**
             *
             */
            Ajax.prototype.setParams = function (params, value) {
                if (value === void 0) { value = false; }
                if (typeof params == "object") {
                    var i = 0;
                    for (var key in params) {
                        var ampersand = "";
                        if (i < Object.keys(params).length) {
                            ampersand = "&";
                        }
                        this.parameters += key + "=" + encodeURIComponent(params[key]) + ampersand;
                        i++;
                    }
                }
                else if (value) {
                    this.parameters = params + "=" + encodeURIComponent(value);
                }
                return this;
            };
            /**
             *
             */
            Ajax.prototype.POST = function () {
                this.setMethod("POST");
                return this;
            };
            /**
             *
             */
            Ajax.prototype.PUT = function () {
                this.setMethod("PUT");
                return this;
            };
            /**
             *
             */
            Ajax.prototype.DELETE = function () {
                this.setMethod("DELETE");
                return this;
            };
            /**
             *
             */
            Ajax.prototype.GET = function () {
                this.setMethod("GET");
                return this;
            };
            /**
             *
             */
            Ajax.prototype.setMethod = function (method) {
                this.method = method;
                return this;
            };
            Ajax.prototype.addContext = function () {
                this.httpRequest.context = this.getContext();
                this.httpRequest.getContext = function () {
                    return this.context;
                };
            };
            /**
             *
             */
            Ajax.prototype.response = function (responseFunction) {
                this.responseFn = responseFunction;
                try {
                    this.bfSendFn();
                    this.addContext();
                    this.httpRequest.onreadystatechange = function () {
                        if (this.httpRequest.readyState === this.httpRequest.DONE) {
                            if (this.httpRequest.status === 200) {
                                if (typeof this.httpRequest.response != "undefined") {
                                    if (typeof this.responseFn != "undefined") {
                                        this.responseFn(this.httpRequest.response);
                                    }
                                }
                            }
                            else {
                                this.error = "ajax status" + this.httpRequest.status + " " + this.httpRequest.statusText;
                            }
                        }
                    }.bind(this);
                }
                catch (e) {
                    console.log("Network.AJax.Exception", e);
                }
                return this;
            };
            /**
             *
             */
            Ajax.prototype.beforeSend = function (fn) {
                this.bfSendFn = fn;
            };
            /**
             *
             */
            Ajax.prototype.setHeaders = function () {
                this.httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            };
            /**
             *
             */
            Ajax.prototype.getError = function (errorFunction) {
                errorFunction(this.error);
            };
            Ajax.prototype.clear = function () {
                this.method = "GET";
                this.parameters = "";
                this.error = null;
                this.url = "";
                this.bfSendFn = function () { };
                this.responseFn = function () { };
                this.container = [];
            };
            /**
             *
             */
            Ajax.prototype.send = function (fn) {
                if (fn === void 0) { fn = false; }
                if (typeof fn == "function") {
                    this.response(fn.bind(this));
                }
                this.httpRequest.open(this.method, this.url);
                this.setHeaders();
                this.httpRequest.send(this.parameters);
            };
            /**
             *
             */
            Ajax.prototype.setDi = function (di) {
                this.di = di;
            };
            /**
             *
             */
            Ajax.prototype.getDi = function () {
                return this.di;
            };
            return Ajax;
        }());
        Network.Ajax = Ajax;
    })(Network = Northwind.Network || (Northwind.Network = {}));
})(Northwind || (Northwind = {}));
var Northwind;
(function (Northwind) {
    var Service;
    (function (Service) {
        var InjectorComponents = (function () {
            function InjectorComponents() {
            }
            InjectorComponents.prototype.setDi = function (di) {
                this.di = di;
                if (typeof di != "undefined") {
                    if (di.hasKey("ajax")) {
                        this.ajax = di.get("ajax");
                    }
                    if (di.hasKey("em")) {
                        this.em = di.get("em");
                    }
                    if (di.hasKey("dom")) {
                        this.dom = di.get("dom");
                    }
                    if (di.hasKey("tag")) {
                        this.tag = di.get("tag");
                    }
                    if (di.hasKey("event")) {
                        this.event = di.get("event");
                    }
                    if (di.hasKey("container")) {
                        this.container = di.get("container");
                    }
                    this.di = di;
                }
            };
            InjectorComponents.prototype.getDi = function () {
                return this.di;
            };
            InjectorComponents.prototype.setDom = function (dom) {
                this.dom = dom;
            };
            InjectorComponents.prototype.getDom = function () {
                return this.dom;
            };
            InjectorComponents.prototype.setTag = function (tag) {
                this.tag = tag;
            };
            InjectorComponents.prototype.getTag = function () {
                return this.tag;
            };
            InjectorComponents.prototype.setEvent = function (event) {
                this.event = event;
            };
            InjectorComponents.prototype.getEvent = function () {
                return this.event;
            };
            InjectorComponents.prototype.setEm = function (em) {
                this.em = em;
            };
            InjectorComponents.prototype.getEm = function () {
                return this.em;
            };
            InjectorComponents.prototype.setContainer = function (container) {
                this.container = container;
            };
            InjectorComponents.prototype.getContainer = function () {
                return this.container;
            };
            InjectorComponents.prototype.setAjax = function (ajax) {
                this.ajax = ajax;
            };
            InjectorComponents.prototype.getAjax = function () {
                return this.ajax;
            };
            return InjectorComponents;
        }());
        Service.InjectorComponents = InjectorComponents;
    })(Service = Northwind.Service || (Northwind.Service = {}));
})(Northwind || (Northwind = {}));
///<reference path="./TagAdapter.ts"/>
///<reference path="../../../Service/InjectorComponents.ts"/>
var Northwind;
///<reference path="./TagAdapter.ts"/>
///<reference path="../../../Service/InjectorComponents.ts"/>
(function (Northwind) {
    var Html;
    (function (Html) {
        /**
         *
         * @type
         */
        var Component = (function () {
            /**
             *
             * @param
             * @return
             */
            function Component(name, newClone) {
                if (name === void 0) { name = ""; }
                if (newClone === void 0) { newClone = false; }
                /**
                 *
                 */
                this.deny = ["Table", "Td", "Div", "Thead", "Tbody", "Tfoot", "Tr", "Td", "Th", "Label", "Span", "I", "A"];
                /**
                 *
                 * @type
                 */
                this.url = "";
                if (typeof name.nodeName != "undefined") {
                    this.id = name.getAttribute("id");
                    this.element = this.init(name.nodeName, this.id);
                }
                else if (typeof name.target != "undefined") {
                    this.element = name.target;
                }
                else if (typeof name == "string") {
                    this.id = name;
                    this.element = this.init(name, name);
                }
                else {
                    this.id = name;
                    this.element = this.init(this.getClassName(), name);
                }
                return this;
            }
            /**
             *
             */
            Component.prototype.initialize = function () {
            };
            /**
             *
             */
            Component.prototype.setGlobals = function (globals) {
                this.globals = globals;
                return this;
            };
            /**
             *
             */
            Component.prototype.getGlobals = function () {
                return this.globals;
            };
            Component.prototype.setDi = function (di) {
                this.di = di;
            };
            Component.prototype.getDi = function () {
                return this.di;
            };
            /**
             *
             */
            Component.prototype.getArguments = function (args) {
                if (typeof args == "object") {
                    var argsTemp = new Array();
                    for (var i = 0; i < args.length; i++) {
                        if (args[i] != "atmpnil" && !(args[i] instanceof Northwind.Mvc.Controller)) {
                            argsTemp.push(args[i]);
                        }
                    }
                    return argsTemp;
                }
                else {
                    return false;
                }
            };
            /**
             *
             */
            Component.prototype.setId = function (id) {
                this.attr("id", id);
                return this;
            };
            /**
             *
             */
            Component.prototype.getId = function () {
                return this.attr("id");
            };
            /**
             *
             */
            Component.prototype.setArgs = function (args) {
                this.args = args;
                return this;
            };
            /**
             *
             */
            Component.prototype.getArgs = function () {
                return this.args;
            };
            /**
             *
             */
            Component.prototype.setElement = function (element) {
                this.element = element;
                return this;
            };
            /**
             *
             */
            Component.prototype.setRequired = function (req) {
                this.element.required = req;
                return this;
            };
            /**
             *
             */
            Component.prototype.getRequired = function () {
                return this.element.required;
            };
            /**
             *
             */
            Component.prototype.show = function () {
                this.element.style.display = "";
                return this;
            };
            /**
             *
             */
            Component.prototype.hide = function () {
                this.element.style.display = "none";
                return this;
            };
            /**
             *
             */
            Component.prototype.create = function (tag) {
                this.element = this.init(tag, this.id);
                return this;
            };
            /**
             * Create html component like jquery object
             *
             * @param  {string} element [description]
             * @param  {string} name    [description]
             * @return ViewElement
             */
            Component.prototype.init = function (element, name) {
                this.className = element;
                var docElement = document.createElement(element);
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
            };
            /**
             *
             * @return
             */
            Component.prototype.getType = function () {
                return this.className;
            };
            /**
             * Set class
             * @param  {string} attrClass
             * @return {this}  [description]
             */
            Component.prototype.class = function (attrClass) {
                this.element.setAttribute("class", attrClass);
                return this;
            };
            /**
             *
             */
            Component.prototype.addClass = function (attrClass) {
                var strClass = this.element.getAttribute("class");
                strClass += " " + attrClass;
                this.element.setAttribute("class", strClass);
                return this;
            };
            /**
             * Set inner html throught
             */
            Component.prototype.setInnerHtml = function (html) {
                this.element.innerHTML = html;
                return this.element;
            };
            /**
             *
             */
            Component.prototype.getAttribute = function (attr) {
                return this.element.getAttribute(attr);
            };
            /**
             *
             * @return {[type]} [description]
             */
            Component.prototype.addChild = function (element) {
                this.element.append(element);
                return this;
            };
            /*
            public valueListener(fn : Function)
            {
                valueListenerNative.bind(this)(fn);
                return this;
            }
            */
            Component.prototype.destroyEvent = function (event) {
                var nameEvent = "on" + event;
                this.element.removeEventListener("click", this.element.nameEvent);
            };
            /**
             *
             */
            Component.prototype.removeAttr = function (attr) {
                this.element.removeAttribute(attr);
                return this;
            };
            /**
             * [get description]
             * @return {[type]} [description]
             */
            Component.prototype.getElement = function () {
                return this.element;
            };
            /**
             * Append elements
             * @param value append
             * @return this
             */
            Component.prototype.append = function (append) {
                if (Array.isArray(append) || (append instanceof HTMLCollection)) {
                    for (var key in append) {
                        this.checkAppendValue(append[key]);
                    }
                }
                else {
                    this.checkAppendValue(append);
                }
                return this;
            };
            /**
             *
             */
            Component.prototype.data = function (key, value) {
                if (value === void 0) { value = false; }
                if (value) {
                    this.getElement().data(key, value);
                }
                else {
                    this.getElement().data(key);
                }
                return this;
            };
            /**
             *
             */
            Component.prototype.checkAppendValue = function (append) {
                switch (typeof append) {
                    case "string":
                        this.element.appendChild(document.createTextNode(append));
                        break;
                    case "number":
                        this.element.appendChild(document.createTextNode(append.toString()));
                        break;
                    case "object":
                        if (append instanceof Northwind.Html.Component) {
                            this.verifyElement(append.getElement());
                        }
                        else {
                            this.verifyElement(append);
                        }
                        break;
                    default:
                        break;
                }
            };
            /**
             *
             * @param  html [description]
             * @return
             */
            Component.prototype.html = function (html) {
                if (html === void 0) { html = null; }
                if (html != null) {
                    this.removeChildNodes();
                    this.append(html);
                    return this;
                }
                else {
                    return this.element.innerHTML;
                }
            };
            /**
             *
             */
            Component.prototype.verifyElement = function (append, type) {
                if (type === void 0) { type = "append"; }
                if (this.element instanceof HTMLCollection) {
                    for (var key in this.element) {
                        if (typeof this.element[key].nodeType != "undefined") {
                            if (this.element[key].nodeType == 1) {
                                this.element[key].appendChild(append);
                            }
                        }
                    }
                }
                else {
                    this.element.appendChild(append);
                }
            };
            /**
             *
             */
            Component.prototype.removeChildNodes = function () {
                if (this.element instanceof HTMLCollection) {
                    for (var key in this.element) {
                        this.removeChilds(this.element[key], this.element[key].childNodes);
                    }
                }
                else {
                    this.removeChilds(this.element, this.element.childNodes);
                }
            };
            /**
             *
             */
            Component.prototype.removeChilds = function (element, childs) {
                while (element.firstChild) {
                    element.removeChild(element.firstChild);
                }
            };
            /**
             *
             * @param attr
             * @return
             */
            Component.prototype.attr = function (attr, value) {
                if (value === void 0) { value = false; }
                if (typeof attr == "object" && value == false) {
                    for (var key in attr) {
                        this.element.setAttribute(key, attr[key]);
                    }
                }
                else if (typeof attr == "string" && value != false) {
                    this.element.setAttribute(attr, value);
                }
                else if (typeof attr == "string" && value == false) {
                    return this.element.getAttribute(attr);
                }
                return this;
            };
            /**
             * [css description]
             * @param   css [description]
             * @return
             */
            Component.prototype.css = function (css, value) {
                if (value === void 0) { value = null; }
                if (typeof css == "object") {
                    for (var key in css) {
                        this.element.style[key] = css[key];
                    }
                }
                else if (typeof css == "string" && value != null) {
                    this.element.style[css] = value;
                }
                else if (typeof css == "string" && value == null) {
                    return this.element.style[css];
                }
                return this;
            };
            /**
             *
             * @param  {[type]} event [description]
             * @return {[type]}       [description]
             */
            Component.prototype.unbind = function (event) {
                this.element.destroyEvent(event);
                return this;
            };
            /**
             * [getClassName description]
             * @return {[type]} [description]
             */
            Component.prototype.getClassName = function () {
                var funcNameRegex = /function (.{1,})\(/;
                var results = (funcNameRegex).exec(this["constructor"].toString());
                return (results && results.length > 1) ? results[1] : "";
            };
            /**
             * [validateAndSet description]
             * @param  {[type]} config [description]
             * @return {[type]}        [description]
             */
            Component.prototype.validateAndSet = function (config) {
                try {
                    if (typeof config.name === "undefined") {
                        throw "The identify is required";
                    }
                    else if (typeof config.element === "undefined") {
                        throw "The type element is required";
                    }
                    else if (typeof config.event !== "undefined") {
                    }
                }
                catch (e) {
                    console.log(e);
                }
            };
            /**
             * [clone description]
             * @return {[type]} [description]
             */
            Component.prototype.clone = function (newIdentify) {
                if (newIdentify === void 0) { newIdentify = ""; }
                var newElement = this.element.clone();
                return new Northwind.Html.Component(newIdentify, newElement[0]);
            };
            /**
             *
             * @param  {any = null}        val [description]
             * @return {[type]}   [description]
             */
            Component.prototype.val = function (val) {
                if (val === void 0) { val = false; }
                if (val || typeof val == "string") {
                    this.element.value = val;
                    this.attr("value", val);
                    return this;
                }
                else {
                    return this.element.value;
                }
            };
            /**
             * zzzz
             * @param  {any = null}        text [description]
             * @return {[type]}   [description]
             */
            Component.prototype.text = function (text) {
                if (text === void 0) { text = false; }
                if (text) {
                    this.element.innerHtml = text;
                    return this;
                }
                else {
                    return this.element.innerHtml;
                }
            };
            /**
             *
             */
            Component.prototype.empty = function () {
                this.removeChildNodes();
                return this;
            };
            /**
             *
             */
            Component.prototype.getChilds = function () {
                var childNodes = this.element.childNodes;
                var childs = new Array();
                for (var key in childNodes) {
                    if (childNodes[key].nodeType == 1) {
                        var adapter = new Northwind.Tag.TagAdapter(childNodes[key]);
                        var tagObject = adapter.get();
                        tagObject.setDi(this.getDi());
                        childs.push(tagObject);
                    }
                }
                return childs;
            };
            Component.prototype.getParent = function () {
                var parent = this.element.parentElement;
                if (parent.nodeType == 1) {
                    var adapter = new Northwind.Tag.TagAdapter(parent);
                    var tagObject = adapter.get();
                    tagObject.setDi(this.getDi());
                    return tagObject;
                }
                return false;
            };
            /**
             *
             */
            Component.prototype.getAsObject = function () {
                var childs = this.element.childNodes;
                var obj = new Array();
                if (childs instanceof NodeList) {
                    for (var key in childs) {
                        if (typeof childs[key].nodeType != "undefined") {
                            switch (childs[key].nodeType) {
                                case Node.ELEMENT_NODE:
                                    var adapter = new Northwind.Tag.TagAdapter(childs[key]);
                                    var auxElement = adapter.get();
                                    auxElement.setDi(this.getDi());
                                    var finalObj = {};
                                    var auxObject = auxElement.getAsObject();
                                    finalObj[auxElement.getClassName().toLowerCase()] = auxObject;
                                    if (auxObject.length > 0) {
                                        obj.push(finalObj);
                                    }
                                    break;
                                case Node.TEXT_NODE:
                                    obj.push(childs[key].nodeValue);
                                    break;
                            }
                        }
                    }
                }
                return obj;
            };
            /**
             *
             */
            Component.prototype.getAsJson = function () {
                var objects = this.getAsObject();
                return JSON.stringify(objects);
            };
            /**
             *
             */
            Component.prototype.getRandomString = function () {
                var randomStr = Northwind.Helper.MathHelper.getUUID();
                return btoa(randomStr);
            };
            /**
             *
             */
            Component.prototype.remove = function (element) {
                if (element === void 0) { element = false; }
                if (element) {
                    this.getElement().removeChild(element);
                }
                else {
                    this.getElement().parentElement.removeChild(this.getElement());
                }
            };
            return Component;
        }());
        /**
         *
         */
        Component.NO_CONTEXT = 1;
        Html.Component = Component;
    })(Html = Northwind.Html || (Northwind.Html = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         *
         */
        var A = (function (_super) {
            __extends(A, _super);
            /**
             *
             */
            function A() {
                var _this = _super.call(this, "A") || this;
                _this.href("");
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            /**
             * [favIcon description]
             * @return {[type]} [description]
             */
            A.prototype.favIcon = function (favIcon) {
                var icon = new Northwind.Tag.I()
                    .class(favIcon);
                this.append(icon.getElement());
                return this;
            };
            /**
             * [href description]
             * @param  {[type]} href [description]
             * @return {[type]}      [description]
             */
            A.prototype.href = function (href) {
                this.attr("href", href);
                return this;
            };
            return A;
        }(Northwind.Html.Component));
        Tag.A = A;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Abbr = (function (_super) {
            __extends(Abbr, _super);
            /**
             *
             */
            function Abbr() {
                var _this = _super.call(this, "ABBR") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Abbr;
        }(Northwind.Html.Component));
        Tag.Abbr = Abbr;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Address = (function (_super) {
            __extends(Address, _super);
            /**
             *
             */
            function Address() {
                var _this = _super.call(this, "ADDRESS") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Address;
        }(Northwind.Html.Component));
        Tag.Address = Address;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Area = (function (_super) {
            __extends(Area, _super);
            /**
             *
             */
            function Area() {
                var _this = _super.call(this, "AREA") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Area;
        }(Northwind.Html.Component));
        Tag.Area = Area;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Article = (function (_super) {
            __extends(Article, _super);
            /**
             *
             */
            function Article() {
                var _this = _super.call(this, "ARTICLE") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Article;
        }(Northwind.Html.Component));
        Tag.Article = Article;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Aside = (function (_super) {
            __extends(Aside, _super);
            /**
             *
             */
            function Aside() {
                var _this = _super.call(this, "ASIDE") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Aside;
        }(Northwind.Html.Component));
        Tag.Aside = Aside;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Audio = (function (_super) {
            __extends(Audio, _super);
            /**
             *
             */
            function Audio() {
                var _this = _super.call(this, "AUDIO") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Audio;
        }(Northwind.Html.Component));
        Tag.Audio = Audio;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var B = (function (_super) {
            __extends(B, _super);
            /**
             *
             */
            function B() {
                var _this = _super.call(this, "B") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return B;
        }(Northwind.Html.Component));
        Tag.B = B;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Base = (function (_super) {
            __extends(Base, _super);
            /**
             *
             */
            function Base() {
                var _this = _super.call(this, "BASE") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Base;
        }(Northwind.Html.Component));
        Tag.Base = Base;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Bdi = (function (_super) {
            __extends(Bdi, _super);
            /**
             *
             */
            function Bdi() {
                var _this = _super.call(this, "BDI") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Bdi;
        }(Northwind.Html.Component));
        Tag.Bdi = Bdi;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Bdo = (function (_super) {
            __extends(Bdo, _super);
            /**
             *
             */
            function Bdo() {
                var _this = _super.call(this, "BDO") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Bdo;
        }(Northwind.Html.Component));
        Tag.Bdo = Bdo;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Blockquote = (function (_super) {
            __extends(Blockquote, _super);
            /**
             *
             */
            function Blockquote() {
                var _this = _super.call(this, "BLOCKQUOTE") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Blockquote;
        }(Northwind.Html.Component));
        Tag.Blockquote = Blockquote;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Body = (function (_super) {
            __extends(Body, _super);
            function Body() {
                var _this = _super.call(this) || this;
                _this.element = document.body;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Body;
        }(Northwind.Html.Component));
        Tag.Body = Body;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Br = (function (_super) {
            __extends(Br, _super);
            /**
             *
             */
            function Br() {
                var _this = _super.call(this, "BR") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Br;
        }(Northwind.Html.Component));
        Tag.Br = Br;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         *
         */
        var Button = (function (_super) {
            __extends(Button, _super);
            /**
             *
             */
            function Button() {
                var _this = _super.call(this, "BUTTON") || this;
                _this.attr("type", "button");
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            /**
             *
             * @param
             * @return
             */
            Button.prototype.type = function (type) {
                this.attr("type", type);
                return this;
            };
            /**
             *
             * @return
             */
            Button.prototype.favIcon = function (favIcon) {
                var icon = new Northwind.Tag.I()
                    .class(favIcon);
                this.append(icon);
                return this;
            };
            /**
             *
             * @return
             */
            Button.prototype.success = function () {
                this.addClass("btn btn-success");
                return this;
            };
            /**
             *
             * @return
             */
            Button.prototype.notice = function () {
                this.addClass("btn btn-notice");
                return this;
            };
            /**
             *
             * @return
             */
            Button.prototype.default = function () {
                this.addClass("btn btn-default");
                return this;
            };
            /**
             *
             * @return
             */
            Button.prototype.primary = function () {
                this.addClass("btn btn-primary");
                return this;
            };
            /**
             * [warning description]
             * @return {[type]} [description]
             */
            Button.prototype.warning = function () {
                this.addClass("btn btn-warning");
                return this;
            };
            /**
             * [danger description]
             * @return {[type]} [description]
             */
            Button.prototype.danger = function () {
                this.addClass("btn btn-danger");
                return this;
            };
            return Button;
        }(Northwind.Html.Component));
        Tag.Button = Button;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Canvas = (function (_super) {
            __extends(Canvas, _super);
            /**
             *
             */
            function Canvas() {
                var _this = _super.call(this, "CANVAS") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Canvas;
        }(Northwind.Html.Component));
        Tag.Canvas = Canvas;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Caption = (function (_super) {
            __extends(Caption, _super);
            /**
             *
             */
            function Caption() {
                var _this = _super.call(this, "CAPTION") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Caption;
        }(Northwind.Html.Component));
        Tag.Caption = Caption;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Cite = (function (_super) {
            __extends(Cite, _super);
            /**
             *
             */
            function Cite() {
                var _this = _super.call(this, "CITE") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Cite;
        }(Northwind.Html.Component));
        Tag.Cite = Cite;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Code = (function (_super) {
            __extends(Code, _super);
            /**
             *
             */
            function Code() {
                var _this = _super.call(this, "CODE") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Code;
        }(Northwind.Html.Component));
        Tag.Code = Code;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Col = (function (_super) {
            __extends(Col, _super);
            /**
             *
             */
            function Col() {
                var _this = _super.call(this, "COL") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Col;
        }(Northwind.Html.Component));
        Tag.Col = Col;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var ColGroup = (function (_super) {
            __extends(ColGroup, _super);
            /**
             *
             */
            function ColGroup() {
                var _this = _super.call(this, "COLGROUP") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return ColGroup;
        }(Northwind.Html.Component));
        Tag.ColGroup = ColGroup;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Datalist = (function (_super) {
            __extends(Datalist, _super);
            /**
             *
             */
            function Datalist() {
                var _this = _super.call(this, "DETAILS") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Datalist;
        }(Northwind.Html.Component));
        Tag.Datalist = Datalist;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Db = (function (_super) {
            __extends(Db, _super);
            /**
             *
             */
            function Db() {
                var _this = _super.call(this, "DB") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Db;
        }(Northwind.Html.Component));
        Tag.Db = Db;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Del = (function (_super) {
            __extends(Del, _super);
            /**
             *
             */
            function Del() {
                var _this = _super.call(this, "DEL") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Del;
        }(Northwind.Html.Component));
        Tag.Del = Del;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Details = (function (_super) {
            __extends(Details, _super);
            /**
             *
             */
            function Details() {
                var _this = _super.call(this, "DETAILS") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Details;
        }(Northwind.Html.Component));
        Tag.Details = Details;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Dfn = (function (_super) {
            __extends(Dfn, _super);
            /**
             *
             */
            function Dfn() {
                var _this = _super.call(this, "DFN") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Dfn;
        }(Northwind.Html.Component));
        Tag.Dfn = Dfn;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Dialog = (function (_super) {
            __extends(Dialog, _super);
            /**
             *
             */
            function Dialog() {
                var _this = _super.call(this, "DIALOG") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Dialog;
        }(Northwind.Html.Component));
        Tag.Dialog = Dialog;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Div = (function (_super) {
            __extends(Div, _super);
            /**
             *
             */
            function Div() {
                var _this = _super.call(this, "DIV") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Div;
        }(Northwind.Html.Component));
        Tag.Div = Div;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Dl = (function (_super) {
            __extends(Dl, _super);
            /**
             *
             */
            function Dl() {
                var _this = _super.call(this, "DL") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Dl;
        }(Northwind.Html.Component));
        Tag.Dl = Dl;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Dt = (function (_super) {
            __extends(Dt, _super);
            /**
             *
             */
            function Dt() {
                var _this = _super.call(this, "DT") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Dt;
        }(Northwind.Html.Component));
        Tag.Dt = Dt;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Em = (function (_super) {
            __extends(Em, _super);
            /**
             *
             */
            function Em() {
                var _this = _super.call(this, "EM") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Em;
        }(Northwind.Html.Component));
        Tag.Em = Em;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Embed = (function (_super) {
            __extends(Embed, _super);
            /**
             *
             */
            function Embed() {
                var _this = _super.call(this, "EMBED") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Embed;
        }(Northwind.Html.Component));
        Tag.Embed = Embed;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Fieldset = (function (_super) {
            __extends(Fieldset, _super);
            /**
             *
             */
            function Fieldset() {
                var _this = _super.call(this, "FIELDSET") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Fieldset;
        }(Northwind.Html.Component));
        Tag.Fieldset = Fieldset;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Figcaption = (function (_super) {
            __extends(Figcaption, _super);
            /**
             *
             */
            function Figcaption() {
                var _this = _super.call(this, "FIGCAPTION") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Figcaption;
        }(Northwind.Html.Component));
        Tag.Figcaption = Figcaption;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Figure = (function (_super) {
            __extends(Figure, _super);
            /**
             *
             */
            function Figure() {
                var _this = _super.call(this, "FIGURE") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Figure;
        }(Northwind.Html.Component));
        Tag.Figure = Figure;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Footer = (function (_super) {
            __extends(Footer, _super);
            /**
             *
             */
            function Footer() {
                var _this = _super.call(this, "FOOTER") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Footer;
        }(Northwind.Html.Component));
        Tag.Footer = Footer;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
/*
function ValidationDecorator<TFunction extends Function>(target: TFunction): TFunction {
    Object.defineProperty(target.prototype, 'test', {
        value: function() {
            console.log('test call');
            return 'test result';
        }
    });
    return target;
}
*/
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
/*
function ValidationDecorator<TFunction extends Function>(target: TFunction): TFunction {
    Object.defineProperty(target.prototype, 'test', {
        value: function() {
            console.log('test call');
            return 'test result';
        }
    });
    return target;
}
*/
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         *
         * @type
         */
        var Form = (function (_super) {
            __extends(Form, _super);
            /**
             *
             */
            function Form() {
                var _this = _super.call(this, "FORM") || this;
                /**
                 *
                 */
                _this.invalidElements = new Array;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            /**
             * @param {Function} fn
             */
            Form.prototype.submit = function (fn) {
                this.getElement().addEventListener("submit", function (event) {
                    var returnCallback = fn.bind(this)(event);
                    if (returnCallback == false || typeof returnCallback == "undefined") {
                        event.preventDefault();
                    }
                    return true;
                }.bind(this));
            };
            /**
             *
             */
            Form.prototype.getInvalidElements = function () {
                return this.invalidElements;
            };
            /**
             *
             */
            Form.prototype.validate = function (fn) {
                var elements = this.getFormElements();
                this.invalidElements = new Array;
                if (elements.length > 0) {
                    for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
                        var item = elements_1[_i];
                        if (item.val() == "") {
                            this.invalidElements.push(item);
                        }
                    }
                    if (this.invalidElements.length == 0) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                return false;
            };
            /**
             *
             */
            Form.prototype.getFormElements = function () {
                var northwindElements = new Array;
                var elements = this.element.elements;
                for (var _i = 0, elements_2 = elements; _i < elements_2.length; _i++) {
                    var item = elements_2[_i];
                    var aux = new Northwind.Tag.TagAdapter(item);
                    aux.setDi(this.getDi());
                    var element = aux.get();
                    if (element != false) {
                        northwindElements.push(element);
                    }
                }
                return northwindElements;
            };
            /**
             *
             */
            Form.prototype.setAutoComplete = function (data) {
                if (data) {
                    this.attr("autocomplete", "on");
                }
                else {
                    this.attr("autocomplete", "off");
                }
                return this;
            };
            /**
             *
             */
            Form.prototype.getAutoComplete = function () {
                return this.attr("autocomplete");
            };
            return Form;
        }(Northwind.Html.Component));
        Tag.Form = Form;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var H1 = (function (_super) {
            __extends(H1, _super);
            /**
             *
             */
            function H1() {
                var _this = _super.call(this, "H1") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return H1;
        }(Northwind.Html.Component));
        Tag.H1 = H1;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var H2 = (function (_super) {
            __extends(H2, _super);
            /**
             *
             */
            function H2() {
                var _this = _super.call(this, "H2") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return H2;
        }(Northwind.Html.Component));
        Tag.H2 = H2;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var H3 = (function (_super) {
            __extends(H3, _super);
            /**
             *
             */
            function H3() {
                var _this = _super.call(this, "H3") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return H3;
        }(Northwind.Html.Component));
        Tag.H3 = H3;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var H4 = (function (_super) {
            __extends(H4, _super);
            /**
             *
             */
            function H4() {
                var _this = _super.call(this, "H4") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return H4;
        }(Northwind.Html.Component));
        Tag.H4 = H4;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var H5 = (function (_super) {
            __extends(H5, _super);
            /**
             *
             */
            function H5() {
                var _this = _super.call(this, "H5") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return H5;
        }(Northwind.Html.Component));
        Tag.H5 = H5;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var H6 = (function (_super) {
            __extends(H6, _super);
            /**
             *
             */
            function H6() {
                var _this = _super.call(this, "H6") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return H6;
        }(Northwind.Html.Component));
        Tag.H6 = H6;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Head = (function (_super) {
            __extends(Head, _super);
            /**
             *
             */
            function Head() {
                var _this = _super.call(this, "HEAD") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Head;
        }(Northwind.Html.Component));
        Tag.Head = Head;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Header = (function (_super) {
            __extends(Header, _super);
            /**
             *
             */
            function Header() {
                var _this = _super.call(this, "HEADER") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Header;
        }(Northwind.Html.Component));
        Tag.Header = Header;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var I = (function (_super) {
            __extends(I, _super);
            /**
             *
             */
            function I() {
                var _this = _super.call(this, "I") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return I;
        }(Northwind.Html.Component));
        Tag.I = I;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Iframe = (function (_super) {
            __extends(Iframe, _super);
            /**
             *
             */
            function Iframe() {
                var _this = _super.call(this, "IFRAME") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Iframe;
        }(Northwind.Html.Component));
        Tag.Iframe = Iframe;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Img = (function (_super) {
            __extends(Img, _super);
            /**
             *
             */
            function Img() {
                var _this = _super.call(this, "IMG") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            Img.prototype.width = function (width) {
                this.element.style.width = width;
                return this;
            };
            Img.prototype.height = function (height) {
                this.element.style.width = height;
                return this;
            };
            Img.prototype.src = function (src) {
                this.attr("src", src);
                return this;
            };
            return Img;
        }(Northwind.Html.Component));
        Tag.Img = Img;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../../Component.ts"/>
var Northwind;
///<reference path="../../Component.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        var FormTag = (function (_super) {
            __extends(FormTag, _super);
            function FormTag() {
                return _super.apply(this, arguments) || this;
            }
            /**
             * Set form element property readonly
             * @param {Boolean} readOnly
             */
            FormTag.prototype.setReadOnly = function (readOnly) {
                this.getElement().readOnly = readOnly;
                return this;
            };
            /**
             * Get form read only
             */
            FormTag.prototype.getReadOnly = function () {
                return this.getElement().readOnly;
            };
            /**
             * Set disabled
             * @param {Boolean} disabled
             */
            FormTag.prototype.setDisabled = function (disabled) {
                this.getElement().disabled = disabled;
                return this;
            };
            FormTag.prototype.getDisabled = function () {
                return this.getElement().disabled;
            };
            FormTag.prototype.setSize = function (size) {
                this.attr("size", size);
                return this;
            };
            FormTag.prototype.getSize = function () {
                return this.attr("size");
            };
            FormTag.prototype.setMaxLength = function (max) {
                this.attr("maxlength", max);
                return this;
            };
            FormTag.prototype.getMaxLength = function () {
                return this.attr("maxlength");
            };
            FormTag.prototype.setAutoFocus = function (data) {
                this.getElement().autofocus = data;
                return this;
            };
            FormTag.prototype.getAutoFocus = function () {
                return this.getElement().autofocus;
            };
            FormTag.prototype.setMin = function (min) {
                this.attr("min", min);
                return this;
            };
            FormTag.prototype.getMin = function () {
                return parseInt(this.attr("min"));
            };
            FormTag.prototype.setMax = function (max) {
                this.attr("max", max);
                return this;
            };
            FormTag.prototype.getMax = function () {
                return parseInt(this.attr("max"));
            };
            /**
             *
             */
            FormTag.prototype.setAlt = function (alt) {
                this.attr("alt", alt);
                return this;
            };
            /**
             *
             */
            FormTag.prototype.getAlt = function () {
                return this.attr("alt");
            };
            /**
             *
             */
            FormTag.prototype.setPlaceholder = function (placeholder) {
                this.attr("placeholder", placeholder);
                return this;
            };
            /**
             *
             */
            FormTag.prototype.getPlaceholder = function () {
                return this.attr("placeholder");
            };
            /**
             *
             */
            FormTag.prototype.setTitle = function (title) {
                this.attr("title", title);
                return this;
            };
            /**
             *
             */
            FormTag.prototype.getTitle = function () {
                return this.attr("title");
            };
            /**
             *
             */
            FormTag.prototype.setPattern = function (pattern) {
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
            };
            /**
             *
             */
            FormTag.prototype.getPattern = function () {
                return this.attr("pattern");
            };
            /**
             *
             */
            FormTag.prototype.setName = function (name) {
                this.attr("name", name);
                return this;
            };
            /**
             *
             */
            FormTag.prototype.getName = function () {
                return this.attr("name");
            };
            /**
             *
             */
            FormTag.prototype.setStep = function (num) {
                this.attr("step", num);
                return this;
            };
            /**
             *
             */
            FormTag.prototype.getStep = function () {
                return this.attr("step");
            };
            /**
             *
             */
            FormTag.prototype.validate = function (fn) {
                if (fn === void 0) { fn = false; }
                if (this.val() == "" || typeof this.val() == "undefined") {
                    return false;
                }
            };
            return FormTag;
        }(Northwind.Html.Component));
        Tag.FormTag = FormTag;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="./forms/FormTag.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="./forms/FormTag.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         *
         * @type
         */
        var Input = (function (_super) {
            __extends(Input, _super);
            /**
             *
             */
            function Input() {
                var _this = _super.call(this, "INPUT") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            /**
             * Get value, alternative to val() method
             * @param
             * @return any
             */
            Input.prototype.getValue = function () {
                return this.element.value;
            };
            /**
             *
             */
            Input.prototype.setValue = function (value) {
                this.element.value = value;
                return this;
            };
            /**
             * [type description]
             * @param  {[type]} type [description]
             * @return {[type]}      [description]
             */
            Input.prototype.type = function (type) {
                this.attr("type", type);
                return this;
            };
            /**
             *
             */
            Input.prototype.setText = function () {
                this.attr("type", "text");
                return this;
            };
            /**
             *
             */
            Input.prototype.setHidden = function () {
                this.attr("type", "hidden");
                return this;
            };
            /**
             *
             */
            Input.prototype.setNumber = function () {
                this.attr("type", "number");
                return this;
            };
            /**
             *
             */
            Input.prototype.setDate = function () {
                this.attr("type", "number");
                return this;
            };
            /**
             *
             */
            Input.prototype.setFile = function () {
                this.attr("type", "file");
                return this;
            };
            return Input;
        }(Northwind.Tag.FormTag));
        Input.NUMBERS = 0;
        Input.TEXT = 1;
        Input.NO_SPECIAL_CHARACTERS = 2;
        Input.TEXT_NO_SPECIAL_CHARACTERS = 3;
        Input.NUMBERS_NO_SPECIAL_CHARACTERS = 4;
        Tag.Input = Input;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Ins = (function (_super) {
            __extends(Ins, _super);
            /**
             *
             */
            function Ins() {
                var _this = _super.call(this, "INS") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Ins;
        }(Northwind.Html.Component));
        Tag.Ins = Ins;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Kbd = (function (_super) {
            __extends(Kbd, _super);
            /**
             *
             */
            function Kbd() {
                var _this = _super.call(this, "KBD") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Kbd;
        }(Northwind.Html.Component));
        Tag.Kbd = Kbd;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Keygen = (function (_super) {
            __extends(Keygen, _super);
            /**
             *
             */
            function Keygen() {
                var _this = _super.call(this, "KEYGEN") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Keygen;
        }(Northwind.Html.Component));
        Tag.Keygen = Keygen;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Label = (function (_super) {
            __extends(Label, _super);
            /**
             *
             */
            function Label() {
                var _this = _super.call(this, "LABEL") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Label;
        }(Northwind.Html.Component));
        Tag.Label = Label;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Leyend = (function (_super) {
            __extends(Leyend, _super);
            /**
             *
             */
            function Leyend() {
                var _this = _super.call(this, "LEYEND") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Leyend;
        }(Northwind.Html.Component));
        Tag.Leyend = Leyend;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Li = (function (_super) {
            __extends(Li, _super);
            /**
             *
             */
            function Li() {
                var _this = _super.call(this, "LI") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Li;
        }(Northwind.Html.Component));
        Tag.Li = Li;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Link = (function (_super) {
            __extends(Link, _super);
            /**
             *
             */
            function Link() {
                var _this = _super.call(this, "LINK") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Link;
        }(Northwind.Html.Component));
        Tag.Link = Link;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Main = (function (_super) {
            __extends(Main, _super);
            /**
             *
             */
            function Main() {
                var _this = _super.call(this, "MAIN") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Main;
        }(Northwind.Html.Component));
        Tag.Main = Main;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Map = (function (_super) {
            __extends(Map, _super);
            /**
             *
             */
            function Map() {
                var _this = _super.call(this, "MAP") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Map;
        }(Northwind.Html.Component));
        Tag.Map = Map;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Menu = (function (_super) {
            __extends(Menu, _super);
            /**
             *
             */
            function Menu() {
                var _this = _super.call(this, "MENU") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Menu;
        }(Northwind.Html.Component));
        Tag.Menu = Menu;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Menuitem = (function (_super) {
            __extends(Menuitem, _super);
            /**
             *
             */
            function Menuitem() {
                var _this = _super.call(this, "MENUITEM") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Menuitem;
        }(Northwind.Html.Component));
        Tag.Menuitem = Menuitem;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Meta = (function (_super) {
            __extends(Meta, _super);
            /**
             *
             */
            function Meta() {
                var _this = _super.call(this, "META") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Meta;
        }(Northwind.Html.Component));
        Tag.Meta = Meta;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Meter = (function (_super) {
            __extends(Meter, _super);
            /**
             *
             */
            function Meter() {
                var _this = _super.call(this, "METER") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Meter;
        }(Northwind.Html.Component));
        Tag.Meter = Meter;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Nav = (function (_super) {
            __extends(Nav, _super);
            /**
             *
             */
            function Nav() {
                var _this = _super.call(this, "NAV") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Nav;
        }(Northwind.Html.Component));
        Tag.Nav = Nav;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Noscrip = (function (_super) {
            __extends(Noscrip, _super);
            /**
             *
             */
            function Noscrip() {
                var _this = _super.call(this, "NOSCRIP") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Noscrip;
        }(Northwind.Html.Component));
        Tag.Noscrip = Noscrip;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Obj = (function (_super) {
            __extends(Obj, _super);
            /**
             *
             */
            function Obj() {
                var _this = _super.call(this, "OBJ") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Obj;
        }(Northwind.Html.Component));
        Tag.Obj = Obj;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Ol = (function (_super) {
            __extends(Ol, _super);
            /**
             *
             */
            function Ol() {
                var _this = _super.call(this, "OL") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Ol;
        }(Northwind.Html.Component));
        Tag.Ol = Ol;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Optgroup = (function (_super) {
            __extends(Optgroup, _super);
            /**
             *
             */
            function Optgroup() {
                var _this = _super.call(this, "OPTGROUP") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Optgroup;
        }(Northwind.Html.Component));
        Tag.Optgroup = Optgroup;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         *
         * @type
         */
        var Option = (function (_super) {
            __extends(Option, _super);
            /**
             *
             */
            function Option() {
                var _this = _super.call(this, "OPTION") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            Option.prototype.setValue = function (val) {
                this.attr("value", val);
                return this;
            };
            /**
             *
             */
            Option.prototype.getValue = function () {
                return this.attr("value");
            };
            /**
             *
             */
            Option.prototype.setContent = function (content) {
                this.append(content);
                return this;
            };
            /**
             *
             */
            Option.prototype.getContent = function () {
                return this.getElement().text;
            };
            return Option;
        }(Northwind.Html.Component));
        Tag.Option = Option;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Output = (function (_super) {
            __extends(Output, _super);
            /**
             *
             */
            function Output() {
                var _this = _super.call(this, "OUTPUT") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Output;
        }(Northwind.Html.Component));
        Tag.Output = Output;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var P = (function (_super) {
            __extends(P, _super);
            /**
             *
             */
            function P() {
                var _this = _super.call(this, "P") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return P;
        }(Northwind.Html.Component));
        Tag.P = P;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Param = (function (_super) {
            __extends(Param, _super);
            /**
             *
             */
            function Param() {
                var _this = _super.call(this, "PARAM") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Param;
        }(Northwind.Html.Component));
        Tag.Param = Param;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Pre = (function (_super) {
            __extends(Pre, _super);
            /**
             *
             */
            function Pre() {
                var _this = _super.call(this, "PRE") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Pre;
        }(Northwind.Html.Component));
        Tag.Pre = Pre;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Progress = (function (_super) {
            __extends(Progress, _super);
            /**
             *
             */
            function Progress() {
                var _this = _super.call(this, "PROGRESS") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Progress;
        }(Northwind.Html.Component));
        Tag.Progress = Progress;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Q = (function (_super) {
            __extends(Q, _super);
            /**
             *
             */
            function Q() {
                var _this = _super.call(this, "Q") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Q;
        }(Northwind.Html.Component));
        Tag.Q = Q;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Rp = (function (_super) {
            __extends(Rp, _super);
            /**
             *
             */
            function Rp() {
                var _this = _super.call(this, "RP") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Rp;
        }(Northwind.Html.Component));
        Tag.Rp = Rp;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Rt = (function (_super) {
            __extends(Rt, _super);
            /**
             *
             */
            function Rt() {
                var _this = _super.call(this, "RT") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Rt;
        }(Northwind.Html.Component));
        Tag.Rt = Rt;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Ruby = (function (_super) {
            __extends(Ruby, _super);
            /**
             *
             */
            function Ruby() {
                var _this = _super.call(this, "RUBY") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Ruby;
        }(Northwind.Html.Component));
        Tag.Ruby = Ruby;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var S = (function (_super) {
            __extends(S, _super);
            /**
             *
             */
            function S() {
                var _this = _super.call(this, "S") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return S;
        }(Northwind.Html.Component));
        Tag.S = S;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Samp = (function (_super) {
            __extends(Samp, _super);
            /**
             *
             */
            function Samp() {
                var _this = _super.call(this, "SAMP") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Samp;
        }(Northwind.Html.Component));
        Tag.Samp = Samp;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Script = (function (_super) {
            __extends(Script, _super);
            /**
             *
             */
            function Script() {
                var _this = _super.call(this, "SCRIPT") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Script;
        }(Northwind.Html.Component));
        Tag.Script = Script;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Section = (function (_super) {
            __extends(Section, _super);
            /**
             *
             */
            function Section() {
                var _this = _super.call(this, "SECTION") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Section;
        }(Northwind.Html.Component));
        Tag.Section = Section;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
/// <reference path="../../Helper/Uuid.ts" />
var Northwind;
/// <reference path="../../Helper/Uuid.ts" />
(function (Northwind) {
    var Mvc;
    (function (Mvc) {
        var RawModel = (function () {
            function RawModel() {
                this.state = 1;
                this.identify = Northwind.Helper.Uuid.get();
            }
            RawModel.prototype.initialize = function () {
            };
            RawModel.prototype.beforeInsert = function () {
            };
            RawModel.prototype.beforeFind = function () {
            };
            RawModel.prototype.beforeUpdate = function () {
            };
            RawModel.prototype.beforeDelete = function () {
            };
            /**
             * [getClassName description]
             * @return {[type]} [description]
             */
            RawModel.prototype.getClassName = function () {
                var funcNameRegex = /function (.{1,})\(/;
                var results = (funcNameRegex).exec(this["constructor"].toString());
                return (results && results.length > 1) ? results[1] : "";
            };
            /**
             *
             */
            RawModel.prototype.getIdentify = function () {
                return this.identify;
            };
            return RawModel;
        }());
        Mvc.RawModel = RawModel;
    })(Mvc = Northwind.Mvc || (Northwind.Mvc = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
///<reference path="../../../Model/RawModel.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
///<reference path="../../../Model/RawModel.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        var Select = (function (_super) {
            __extends(Select, _super);
            /**
             *
             */
            function Select() {
                var _this = _super.call(this, "SELECT") || this;
                _this.choose = "Choose...";
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            /**
             *
             */
            Select.prototype.getSelected = function () {
                var option = new Northwind.Tag.Option();
                option.setElement(this.getElement().options[this.getElement().selectedIndex]);
                return option;
            };
            /**
             *
             * @param fn
             */
            Select.prototype.iterate = function (fn) {
                var childs = this.getChilds();
                for (var key in childs) {
                    fn(childs[key]);
                }
                return this;
            };
            /**
             *
             */
            Select.prototype.setChoose = function (choose) {
                this.choose = choose;
            };
            /**
             *
             */
            Select.prototype.select = function (value) {
                var childs = this.getElement().childNodes;
                for (var key in childs) {
                    if (childs[key].value == value) {
                        childs[key].setAttribute("selected", "selected");
                    }
                }
            };
            /**
             *
             * @param  content
             * @return
             */
            Select.prototype.build = function (content, fields) {
                if (content instanceof Northwind.Mvc.StaticModel) {
                    content = JSON.parse(content.getData());
                }
                var i = 0;
                for (var key in content) {
                    var option = new Northwind.Tag.Option();
                    var id = content[key][fields[0]];
                    if (id === "") {
                        id = content[key][fields[1]];
                    }
                    option.attr({
                        "value": id
                    });
                    option.append(content[key][fields[1]]);
                    this.append([
                        option
                    ]);
                    i++;
                }
                return this;
            };
            return Select;
        }(Northwind.Tag.FormTag));
        Tag.Select = Select;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Small = (function (_super) {
            __extends(Small, _super);
            /**
             *
             */
            function Small() {
                var _this = _super.call(this, "SMALL") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Small;
        }(Northwind.Html.Component));
        Tag.Small = Small;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Source = (function (_super) {
            __extends(Source, _super);
            /**
             *
             */
            function Source() {
                var _this = _super.call(this, "SOURCE") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Source;
        }(Northwind.Html.Component));
        Tag.Source = Source;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Span = (function (_super) {
            __extends(Span, _super);
            /**
             *
             */
            function Span() {
                var _this = _super.call(this, "SPAN") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Span;
        }(Northwind.Html.Component));
        Tag.Span = Span;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Strong = (function (_super) {
            __extends(Strong, _super);
            /**
             *
             */
            function Strong() {
                var _this = _super.call(this, "STRONG") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Strong;
        }(Northwind.Html.Component));
        Tag.Strong = Strong;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Style = (function (_super) {
            __extends(Style, _super);
            /**
             *
             */
            function Style() {
                var _this = _super.call(this, "STYLE") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Style;
        }(Northwind.Html.Component));
        Tag.Style = Style;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Sub = (function (_super) {
            __extends(Sub, _super);
            /**
             *
             */
            function Sub() {
                var _this = _super.call(this, "SUB") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Sub;
        }(Northwind.Html.Component));
        Tag.Sub = Sub;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [Table description]
         * @type {[type]}
         */
        var Table = (function (_super) {
            __extends(Table, _super);
            /**
             *
             */
            function Table() {
                var _this = _super.call(this, "TABLE") || this;
                _this.header = false;
                _this.thead = new Northwind.Tag.Thead();
                _this.tbody = new Northwind.Tag.Tbody();
                _this.tfoot = new Northwind.Tag.Tfoot();
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            /**
             *
             */
            Table.prototype.getThead = function () {
                return this.thead;
            };
            /**
             *
             */
            Table.prototype.getTbody = function () {
                return this.tbody;
            };
            /**
             *
             */
            Table.prototype.toHead = function (component) {
                this.thead.append(component);
                this.append(this.thead);
                return this;
            };
            /**
             *
             */
            Table.prototype.toHeadTr = function (component) {
                var tr = new Northwind.Tag.Tr();
                tr.append(component);
                this.thead.append(tr);
                this.append(this.thead);
                return this;
            };
            /**
             *
             */
            Table.prototype.toBody = function (component) {
                this.tbody.append(component);
                this.append(this.tbody);
                return this;
            };
            /**
             *
             */
            Table.prototype.toFoot = function (component) {
                this.tfoot.append(component);
                this.append(this.tfoot);
                return this;
            };
            /**
             *
             */
            Table.prototype.toBodyTr = function (component) {
                var tr = new Northwind.Tag.Tr();
                tr.append(component);
                this.tbody.append(tr);
                this.append(this.tbody);
                return this;
            };
            /**
             *
             */
            Table.prototype.toFootTr = function (component) {
                var tr = new Northwind.Tag.Tr();
                tr.append(component);
                this.tfoot.append(tr);
                this.append(this.tfoot);
                return this;
            };
            /**
             *
             *
             */
            Table.prototype.setHeader = function (columns) {
                this.header = true;
                this.tr = new Northwind.Tag.Tr();
                var i = 0;
                for (var key in columns) {
                    var th = new Northwind.Tag.Th();
                    if (typeof columns[key] == "object") {
                        th.append(columns[key]);
                    }
                    else {
                        th.append(Northwind.Helper.StringHelper.capitalize(columns[key]));
                    }
                    this.tr.append(th.getElement());
                    if (typeof this.fnCHeader === "function") {
                        this.fnCHeader(th, i, columns[key], key);
                    }
                    i++;
                }
                this.thead.append(this.tr.getElement());
                this.append(this.thead.getElement());
                return this;
            };
            /**
             * [setCustomize description]
             * @param  {Function} fn      [description]
             * @return {[type]}           [description]
             */
            Table.prototype.setHeaderCustomize = function (fn) {
                this.fnCHeader = fn;
                return this;
            };
            /**
             *
             * @param  {[type]} rows
             * @return {[type]}
             */
            Table.prototype.build = function (content) {
                this.system = ["click", "customize"];
                var html = new Northwind.Html.Component();
                var i = 0;
                for (var key in content) {
                    var trIdentify = Northwind.Helper.StringHelper.sanitizeString(key) + this.id;
                    var tr = new Northwind.Tag.Tr();
                    var header = new Array();
                    var j = 0;
                    for (var row in content[key]) {
                        header[j] = row;
                        var trIdentify2 = Northwind.Helper.StringHelper.sanitizeString(key) + Northwind.Helper.StringHelper.sanitizeString(row) + this.id;
                        var td = new Northwind.Tag.Td();
                        if (!this.validateSystemKeys(row)) {
                            var contentRow = content[key][row];
                            var finalContent = void 0;
                            if (contentRow instanceof Northwind.Html.Component) {
                                finalContent = contentRow.getElement();
                            }
                            else if (typeof contentRow == "object" && contentRow != null) {
                                if (contentRow.hasOwnProperty("content")) {
                                    finalContent = contentRow.content;
                                }
                                if (contentRow.hasOwnProperty("class")) {
                                    td.attr(contentRow.class);
                                }
                                if (contentRow.hasOwnProperty("attr")) {
                                    td.attr(contentRow.attr);
                                }
                                if (contentRow.hasOwnProperty("css")) {
                                    td.attr(contentRow.css);
                                }
                                if (contentRow.hasOwnProperty("addTd")) {
                                    tr.append([
                                        contentRow.addTd
                                    ]);
                                }
                                if (contentRow.hasOwnProperty("event")) {
                                    var functionTd = contentRow.event;
                                    functionTd(td);
                                }
                            }
                            else {
                                finalContent = contentRow;
                            }
                            td.append([
                                finalContent
                            ]);
                            tr.append(td);
                        }
                        if (typeof this.fnCContent === "function") {
                            this.fnCContent(td, j, content[key][row], row);
                            if (this.header === false) {
                                this.fnCHeader = this.fnCContent;
                            }
                        }
                        j++;
                    }
                    this.tbody.append(tr);
                    i++;
                }
                if (this.header === false) {
                    this.setHeader(header);
                }
                this.append(this.tbody);
                return this;
            };
            /**
             * [setCustomize description]
             * @param  {Function} fn      [description]
             * @return {[type]}           [description]
             */
            Table.prototype.setContentCustomize = function (fn) {
                this.fnCContent = fn;
                return this;
            };
            /**
             *
             * @param  {[type]} row [description]
             * @return {[type]}     [description]
             */
            Table.prototype.validateSystemKeys = function (row) {
                if (Northwind.Helper.ArrayHelper.inArray(this.system, row)) {
                    return true;
                }
                return false;
            };
            return Table;
        }(Northwind.Html.Component));
        Tag.Table = Table;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Tbody = (function (_super) {
            __extends(Tbody, _super);
            /**
             *
             */
            function Tbody() {
                var _this = _super.call(this, "TBODY") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Tbody;
        }(Northwind.Html.Component));
        Tag.Tbody = Tbody;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Td = (function (_super) {
            __extends(Td, _super);
            /**
             *
             */
            function Td() {
                var _this = _super.call(this, "TD") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            /**
             *
             * @param  {[type]} num [description]
             * @return {[type]}     [description]
             */
            Td.prototype.colspan = function (cols) {
                this.attr({
                    "colspan": cols
                });
                return this;
            };
            /**
             *
             * @param  {[type]} row [description]
             * @return {[type]}     [description]
             */
            Td.prototype.rowspan = function (rows) {
                this.attr({
                    "rowspan": rows
                });
                return this;
            };
            return Td;
        }(Northwind.Html.Component));
        Tag.Td = Td;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Textarea = (function (_super) {
            __extends(Textarea, _super);
            /**
             *
             */
            function Textarea() {
                var _this = _super.call(this, "TEXTAREA") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Textarea;
        }(Northwind.Html.Component));
        Tag.Textarea = Textarea;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Tfoot = (function (_super) {
            __extends(Tfoot, _super);
            /**
             *
             */
            function Tfoot() {
                var _this = _super.call(this, "TFOOT") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Tfoot;
        }(Northwind.Html.Component));
        Tag.Tfoot = Tfoot;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Th = (function (_super) {
            __extends(Th, _super);
            /**
             *
             */
            function Th() {
                var _this = _super.call(this, "TH") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            /*
             *
             * @param  {[type]} num [description]
             * @return {[type]}     [description]
             */
            Th.prototype.colspan = function (cols) {
                this.attr({
                    "colspan": cols
                });
                return this;
            };
            /**
             *
             * @param  {[type]} row [description]
             * @return {[type]}     [description]
             */
            Th.prototype.rowspan = function (rows) {
                this.attr({
                    "rowspan": rows
                });
                return this;
            };
            return Th;
        }(Northwind.Html.Component));
        Tag.Th = Th;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Thead = (function (_super) {
            __extends(Thead, _super);
            /**
             *
             */
            function Thead() {
                var _this = _super.call(this, "THEAD") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Thead;
        }(Northwind.Html.Component));
        Tag.Thead = Thead;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Time = (function (_super) {
            __extends(Time, _super);
            /**
             *
             */
            function Time() {
                var _this = _super.call(this, "TIME") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Time;
        }(Northwind.Html.Component));
        Tag.Time = Time;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Title = (function (_super) {
            __extends(Title, _super);
            /**
             *
             */
            function Title() {
                var _this = _super.call(this, "TITLE") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Title;
        }(Northwind.Html.Component));
        Tag.Title = Title;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Tr = (function (_super) {
            __extends(Tr, _super);
            /**
             *
             */
            function Tr() {
                var _this = _super.call(this, "TR") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Tr;
        }(Northwind.Html.Component));
        Tag.Tr = Tr;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Track = (function (_super) {
            __extends(Track, _super);
            /**
             *
             */
            function Track() {
                var _this = _super.call(this, "TRACK") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Track;
        }(Northwind.Html.Component));
        Tag.Track = Track;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var U = (function (_super) {
            __extends(U, _super);
            /**
             *
             */
            function U() {
                var _this = _super.call(this, "U") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return U;
        }(Northwind.Html.Component));
        Tag.U = U;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Ul = (function (_super) {
            __extends(Ul, _super);
            /**
             *
             */
            function Ul() {
                var _this = _super.call(this, "UL") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Ul;
        }(Northwind.Html.Component));
        Tag.Ul = Ul;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Var = (function (_super) {
            __extends(Var, _super);
            /**
             *
             */
            function Var() {
                var _this = _super.call(this, "VAR") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Var;
        }(Northwind.Html.Component));
        Tag.Var = Var;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Video = (function (_super) {
            __extends(Video, _super);
            /**
             *
             */
            function Video() {
                var _this = _super.call(this, "VIDEO") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Video;
        }(Northwind.Html.Component));
        Tag.Video = Video;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Wbr = (function (_super) {
            __extends(Wbr, _super);
            /**
             *
             */
            function Wbr() {
                var _this = _super.call(this, "WBR") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Wbr;
        }(Northwind.Html.Component));
        Tag.Wbr = Wbr;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="./Elements/A.ts"/>
///<reference path="./Elements/Abbr.ts"/>
///<reference path="./Elements/Address.ts"/>
///<reference path="./Elements/Area.ts"/>
///<reference path="./Elements/Article.ts"/>
///<reference path="./Elements/Aside.ts"/>
///<reference path="./Elements/Audio.ts"/>
///<reference path="./Elements/B.ts"/>
///<reference path="./Elements/Base.ts"/>
///<reference path="./Elements/Bdi.ts"/>
///<reference path="./Elements/Bdo.ts"/>
///<reference path="./Elements/Blockquote.ts"/>
///<reference path="./Elements/Body.ts"/>
///<reference path="./Elements/Br.ts"/>
///<reference path="./Elements/Button.ts"/>
///<reference path="./Elements/Canvas.ts"/>
///<reference path="./Elements/Caption.ts"/>
///<reference path="./Elements/Cite.ts"/>
///<reference path="./Elements/Code.ts"/>
///<reference path="./Elements/Col.ts"/>
///<reference path="./Elements/ColGroup.ts"/>
///<reference path="./Elements/Datalist.ts"/>
///<reference path="./Elements/Db.ts"/>
///<reference path="./Elements/Del.ts"/>
///<reference path="./Elements/Details.ts"/>
///<reference path="./Elements/Dfn.ts"/>
///<reference path="./Elements/Dialog.ts"/>
///<reference path="./Elements/Div.ts"/>
///<reference path="./Elements/Dl.ts"/>
///<reference path="./Elements/Dt.ts"/>
///<reference path="./Elements/Em.ts"/>
///<reference path="./Elements/Embed.ts"/>
///<reference path="./Elements/Fieldset.ts"/>
///<reference path="./Elements/Figcaption.ts"/>
///<reference path="./Elements/Figure.ts"/>
///<reference path="./Elements/Footer.ts"/>
///<reference path="./Elements/Form.ts"/>
///<reference path="./Elements/H1.ts"/>
///<reference path="./Elements/H2.ts"/>
///<reference path="./Elements/H3.ts"/>
///<reference path="./Elements/H4.ts"/>
///<reference path="./Elements/H5.ts"/>
///<reference path="./Elements/H6.ts"/>
///<reference path="./Elements/Head.ts"/>
///<reference path="./Elements/Header.ts"/>
///<reference path="./Elements/I.ts"/>
///<reference path="./Elements/Iframe.ts"/>
///<reference path="./Elements/Img.ts"/>
///<reference path="./Elements/Input.ts"/>
///<reference path="./Elements/Ins.ts"/>
///<reference path="./Elements/Kbd.ts"/>
///<reference path="./Elements/Keygen.ts"/>
///<reference path="./Elements/Label.ts"/>
///<reference path="./Elements/Leyend.ts"/>
///<reference path="./Elements/Li.ts"/>
///<reference path="./Elements/Link.ts"/>
///<reference path="./Elements/Main.ts"/>
///<reference path="./Elements/Map.ts"/>
///<reference path="./Elements/Menu.ts"/>
///<reference path="./Elements/MenuItem.ts"/>
///<reference path="./Elements/Meta.ts"/>
///<reference path="./Elements/Meter.ts"/>
///<reference path="./Elements/Nav.ts"/>
///<reference path="./Elements/Noscrip.ts"/>
///<reference path="./Elements/Obj.ts"/>
///<reference path="./Elements/Ol.ts"/>
///<reference path="./Elements/Optgroup.ts"/>
///<reference path="./Elements/Option.ts"/>
///<reference path="./Elements/Output.ts"/>
///<reference path="./Elements/P.ts"/>
///<reference path="./Elements/Param.ts"/>
///<reference path="./Elements/Pre.ts"/>
///<reference path="./Elements/Progress.ts"/>
///<reference path="./Elements/Q.ts"/>
///<reference path="./Elements/Rp.ts"/>
///<reference path="./Elements/Rt.ts"/>
///<reference path="./Elements/Ruby.ts"/>
///<reference path="./Elements/S.ts"/>
///<reference path="./Elements/Samp.ts"/>
///<reference path="./Elements/Script.ts"/>
///<reference path="./Elements/Section.ts"/>
///<reference path="./Elements/Select.ts"/>
///<reference path="./Elements/Small.ts"/>
///<reference path="./Elements/Source.ts"/>
///<reference path="./Elements/Span.ts"/>
///<reference path="./Elements/Strong.ts"/>
///<reference path="./Elements/Style.ts"/>
///<reference path="./Elements/Sub.ts"/>
///<reference path="./Elements/Table.ts"/>
///<reference path="./Elements/Tbody.ts"/>
///<reference path="./Elements/Td.ts"/>
///<reference path="./Elements/Textarea.ts"/>
///<reference path="./Elements/Tfoot.ts"/>
///<reference path="./Elements/Th.ts"/>
///<reference path="./Elements/Thead.ts"/>
///<reference path="./Elements/Time.ts"/>
///<reference path="./Elements/Title.ts"/>
///<reference path="./Elements/Tr.ts"/>
///<reference path="./Elements/Track.ts"/>
///<reference path="./Elements/U.ts"/>
///<reference path="./Elements/Ul.ts"/>
///<reference path="./Elements/Var.ts"/>
///<reference path="./Elements/Video.ts"/>
///<reference path="./Elements/Wbr.ts"/>
var Northwind;
///<reference path="./Elements/A.ts"/>
///<reference path="./Elements/Abbr.ts"/>
///<reference path="./Elements/Address.ts"/>
///<reference path="./Elements/Area.ts"/>
///<reference path="./Elements/Article.ts"/>
///<reference path="./Elements/Aside.ts"/>
///<reference path="./Elements/Audio.ts"/>
///<reference path="./Elements/B.ts"/>
///<reference path="./Elements/Base.ts"/>
///<reference path="./Elements/Bdi.ts"/>
///<reference path="./Elements/Bdo.ts"/>
///<reference path="./Elements/Blockquote.ts"/>
///<reference path="./Elements/Body.ts"/>
///<reference path="./Elements/Br.ts"/>
///<reference path="./Elements/Button.ts"/>
///<reference path="./Elements/Canvas.ts"/>
///<reference path="./Elements/Caption.ts"/>
///<reference path="./Elements/Cite.ts"/>
///<reference path="./Elements/Code.ts"/>
///<reference path="./Elements/Col.ts"/>
///<reference path="./Elements/ColGroup.ts"/>
///<reference path="./Elements/Datalist.ts"/>
///<reference path="./Elements/Db.ts"/>
///<reference path="./Elements/Del.ts"/>
///<reference path="./Elements/Details.ts"/>
///<reference path="./Elements/Dfn.ts"/>
///<reference path="./Elements/Dialog.ts"/>
///<reference path="./Elements/Div.ts"/>
///<reference path="./Elements/Dl.ts"/>
///<reference path="./Elements/Dt.ts"/>
///<reference path="./Elements/Em.ts"/>
///<reference path="./Elements/Embed.ts"/>
///<reference path="./Elements/Fieldset.ts"/>
///<reference path="./Elements/Figcaption.ts"/>
///<reference path="./Elements/Figure.ts"/>
///<reference path="./Elements/Footer.ts"/>
///<reference path="./Elements/Form.ts"/>
///<reference path="./Elements/H1.ts"/>
///<reference path="./Elements/H2.ts"/>
///<reference path="./Elements/H3.ts"/>
///<reference path="./Elements/H4.ts"/>
///<reference path="./Elements/H5.ts"/>
///<reference path="./Elements/H6.ts"/>
///<reference path="./Elements/Head.ts"/>
///<reference path="./Elements/Header.ts"/>
///<reference path="./Elements/I.ts"/>
///<reference path="./Elements/Iframe.ts"/>
///<reference path="./Elements/Img.ts"/>
///<reference path="./Elements/Input.ts"/>
///<reference path="./Elements/Ins.ts"/>
///<reference path="./Elements/Kbd.ts"/>
///<reference path="./Elements/Keygen.ts"/>
///<reference path="./Elements/Label.ts"/>
///<reference path="./Elements/Leyend.ts"/>
///<reference path="./Elements/Li.ts"/>
///<reference path="./Elements/Link.ts"/>
///<reference path="./Elements/Main.ts"/>
///<reference path="./Elements/Map.ts"/>
///<reference path="./Elements/Menu.ts"/>
///<reference path="./Elements/MenuItem.ts"/>
///<reference path="./Elements/Meta.ts"/>
///<reference path="./Elements/Meter.ts"/>
///<reference path="./Elements/Nav.ts"/>
///<reference path="./Elements/Noscrip.ts"/>
///<reference path="./Elements/Obj.ts"/>
///<reference path="./Elements/Ol.ts"/>
///<reference path="./Elements/Optgroup.ts"/>
///<reference path="./Elements/Option.ts"/>
///<reference path="./Elements/Output.ts"/>
///<reference path="./Elements/P.ts"/>
///<reference path="./Elements/Param.ts"/>
///<reference path="./Elements/Pre.ts"/>
///<reference path="./Elements/Progress.ts"/>
///<reference path="./Elements/Q.ts"/>
///<reference path="./Elements/Rp.ts"/>
///<reference path="./Elements/Rt.ts"/>
///<reference path="./Elements/Ruby.ts"/>
///<reference path="./Elements/S.ts"/>
///<reference path="./Elements/Samp.ts"/>
///<reference path="./Elements/Script.ts"/>
///<reference path="./Elements/Section.ts"/>
///<reference path="./Elements/Select.ts"/>
///<reference path="./Elements/Small.ts"/>
///<reference path="./Elements/Source.ts"/>
///<reference path="./Elements/Span.ts"/>
///<reference path="./Elements/Strong.ts"/>
///<reference path="./Elements/Style.ts"/>
///<reference path="./Elements/Sub.ts"/>
///<reference path="./Elements/Table.ts"/>
///<reference path="./Elements/Tbody.ts"/>
///<reference path="./Elements/Td.ts"/>
///<reference path="./Elements/Textarea.ts"/>
///<reference path="./Elements/Tfoot.ts"/>
///<reference path="./Elements/Th.ts"/>
///<reference path="./Elements/Thead.ts"/>
///<reference path="./Elements/Time.ts"/>
///<reference path="./Elements/Title.ts"/>
///<reference path="./Elements/Tr.ts"/>
///<reference path="./Elements/Track.ts"/>
///<reference path="./Elements/U.ts"/>
///<reference path="./Elements/Ul.ts"/>
///<reference path="./Elements/Var.ts"/>
///<reference path="./Elements/Video.ts"/>
///<reference path="./Elements/Wbr.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        var TagAdapter = (function () {
            /**
             *
             */
            function TagAdapter(element) {
                this.element = element;
            }
            TagAdapter.prototype.setDi = function (di) {
                this.di = di;
                return this;
            };
            TagAdapter.prototype.getDi = function () {
                return this.di;
            };
            /**
             *
             */
            TagAdapter.prototype.get = function () {
                var instance;
                if (this.element) {
                    if (typeof this.element.nodeName != "undefined") {
                        switch (this.element.nodeName) {
                            case "A":
                                instance = new Northwind.Tag.A();
                                break;
                            case "ABBR":
                                instance = new Northwind.Tag.Abbr();
                                break;
                            case "ADDRESS":
                                instance = new Northwind.Tag.Address();
                                break;
                            case "AREA":
                                instance = new Northwind.Tag.Area();
                                break;
                            case "ARTICLE":
                                instance = new Northwind.Tag.Article();
                                break;
                            case "ASIDE":
                                instance = new Northwind.Tag.Aside();
                                break;
                            case "AUDIO":
                                instance = new Northwind.Tag.Audio();
                                break;
                            case "B":
                                instance = new Northwind.Tag.B();
                                break;
                            case "BASE":
                                instance = new Northwind.Tag.Base();
                                break;
                            case "BDI":
                                instance = new Northwind.Tag.Bdi();
                                break;
                            case "BDO":
                                instance = new Northwind.Tag.Bdo();
                                break;
                            case "BLOCKQUOTE":
                                instance = new Northwind.Tag.Blockquote();
                                break;
                            case "BODY":
                                instance = new Northwind.Tag.Body();
                                break;
                            case "BR":
                                instance = new Northwind.Tag.Br();
                                break;
                            case "BUTTON":
                                instance = new Northwind.Tag.Button();
                                break;
                            case "CANVAS":
                                instance = new Northwind.Tag.Canvas();
                                break;
                            case "CAPTION":
                                instance = new Northwind.Tag.Caption();
                                break;
                            case "CITE":
                                instance = new Northwind.Tag.Cite();
                                break;
                            case "CODE":
                                instance = new Northwind.Tag.Code();
                                break;
                            case "COL":
                                instance = new Northwind.Tag.Col();
                                break;
                            case "COLGROUP":
                                instance = new Northwind.Tag.ColGroup();
                                break;
                            case "DATALIST":
                                instance = new Northwind.Tag.Datalist();
                                break;
                            case "DB":
                                instance = new Northwind.Tag.Db();
                                break;
                            case "DEL":
                                instance = new Northwind.Tag.Del();
                                break;
                            case "DETAILS":
                                instance = new Northwind.Tag.Details();
                                break;
                            case "DFN":
                                instance = new Northwind.Tag.Dfn();
                                break;
                            case "DIALOG":
                                instance = new Northwind.Tag.Dialog();
                                break;
                            case "DIV":
                                instance = new Northwind.Tag.Div();
                                break;
                            case "DL":
                                instance = new Northwind.Tag.Dl();
                                break;
                            case "DT":
                                instance = new Northwind.Tag.Dt();
                                break;
                            case "EM":
                                instance = new Northwind.Tag.Em();
                                break;
                            case "EMBED":
                                instance = new Northwind.Tag.Embed();
                                break;
                            case "FIELDSET":
                                instance = new Northwind.Tag.Fieldset();
                                break;
                            case "FIGCAPTION":
                                instance = new Northwind.Tag.Figcaption();
                                break;
                            case "FIGURE":
                                instance = new Northwind.Tag.Figure();
                                break;
                            case "FOOTER":
                                instance = new Northwind.Tag.Footer();
                                break;
                            case "FORM":
                                instance = new Northwind.Tag.Form();
                                break;
                            case "H1":
                                instance = new Northwind.Tag.H1();
                                break;
                            case "H2":
                                instance = new Northwind.Tag.H2();
                                break;
                            case "H3":
                                instance = new Northwind.Tag.H3();
                                break;
                            case "H4":
                                instance = new Northwind.Tag.H4();
                                break;
                            case "H5":
                                instance = new Northwind.Tag.H5();
                                break;
                            case "H6":
                                instance = new Northwind.Tag.H6();
                                break;
                            case "HEAD":
                                instance = new Northwind.Tag.Head();
                                break;
                            case "HEADER":
                                instance = new Northwind.Tag.Header();
                                break;
                            case "I":
                                instance = new Northwind.Tag.I();
                                break;
                            case "IFRAME":
                                instance = new Northwind.Tag.Iframe();
                                break;
                            case "IMG":
                                instance = new Northwind.Tag.Img();
                                break;
                            case "INPUT":
                                instance = new Northwind.Tag.Input();
                                break;
                            case "INS":
                                instance = new Northwind.Tag.Ins();
                                break;
                            case "KBD":
                                instance = new Northwind.Tag.Kbd();
                                break;
                            case "KEYGEN":
                                instance = new Northwind.Tag.Keygen();
                                break;
                            case "LABEL":
                                instance = new Northwind.Tag.Label();
                                break;
                            case "LEYEND":
                                instance = new Northwind.Tag.Leyend();
                                break;
                            case "LI":
                                instance = new Northwind.Tag.Li();
                                break;
                            case "LINK":
                                instance = new Northwind.Tag.Link();
                                break;
                            case "MAIN":
                                instance = new Northwind.Tag.Main();
                                break;
                            case "MAP":
                                instance = new Northwind.Tag.Map();
                                break;
                            case "MENU":
                                instance = new Northwind.Tag.Menu();
                                break;
                            case "MENUITEM":
                                instance = new Northwind.Tag.Menuitem();
                                break;
                            case "META":
                                instance = new Northwind.Tag.Meta();
                                break;
                            case "META":
                                instance = new Northwind.Tag.Meta();
                                break;
                            case "METER":
                                instance = new Northwind.Tag.Meter();
                                break;
                            case "NAV":
                                instance = new Northwind.Tag.Nav();
                                break;
                            case "NOSCRIP":
                                instance = new Northwind.Tag.Noscrip();
                                break;
                            case "OBJECT":
                                instance = new Northwind.Tag.Obj();
                                break;
                            case "OL":
                                instance = new Northwind.Tag.Ol();
                                break;
                            case "OPTGROUP":
                                instance = new Northwind.Tag.Optgroup();
                                break;
                            case "P":
                                instance = new Northwind.Tag.P();
                                break;
                            case "PARAM":
                                instance = new Northwind.Tag.Param();
                                break;
                            case "PRE":
                                instance = new Northwind.Tag.Pre();
                                break;
                            case "PROGRESS":
                                instance = new Northwind.Tag.Progress();
                                break;
                            case "Q":
                                instance = new Northwind.Tag.Q();
                                break;
                            case "RP":
                                instance = new Northwind.Tag.Rp();
                                break;
                            case "RT":
                                instance = new Northwind.Tag.Rt();
                                break;
                            case "RUBY":
                                instance = new Northwind.Tag.Ruby();
                                break;
                            case "S":
                                instance = new Northwind.Tag.S();
                                break;
                            case "SAMP":
                                instance = new Northwind.Tag.Samp();
                                break;
                            case "SCRIPT":
                                instance = new Northwind.Tag.Script();
                                break;
                            case "SECTION":
                                instance = new Northwind.Tag.Section();
                                break;
                            case "SELECT":
                                instance = new Northwind.Tag.Select();
                                break;
                            case "SMALL":
                                instance = new Northwind.Tag.Small();
                                break;
                            case "SOURCE":
                                instance = new Northwind.Tag.Source();
                                break;
                            case "SPAN":
                                instance = new Northwind.Tag.Span();
                                break;
                            case "STRONG":
                                instance = new Northwind.Tag.Strong();
                                break;
                            case "STYLE":
                                instance = new Northwind.Tag.Style();
                                break;
                            case "SUB":
                                instance = new Northwind.Tag.Sub();
                                break;
                            case "SUMMARY":
                                instance = new Northwind.Tag.Summary();
                                break;
                            case "SUP":
                                instance = new Northwind.Tag.Sup();
                                break;
                            case "TABLE":
                                instance = new Northwind.Tag.Table();
                                break;
                            case "TBODY":
                                instance = new Northwind.Tag.Tbody();
                                break;
                            case "TD":
                                instance = new Northwind.Tag.Td();
                                break;
                            case "TEXTAREA":
                                instance = new Northwind.Tag.Textarea();
                                break;
                            case "TFOOT":
                                instance = new Northwind.Tag.Tfoot();
                                break;
                            case "TH":
                                instance = new Northwind.Tag.Th();
                                break;
                            case "THEAD":
                                instance = new Northwind.Tag.Thead();
                                break;
                            case "TIME":
                                instance = new Northwind.Tag.Time();
                                break;
                            case "TITLE":
                                instance = new Northwind.Tag.Title();
                                break;
                            case "TR":
                                instance = new Northwind.Tag.Tr();
                                break;
                            case "TRACK":
                                instance = new Northwind.Tag.Track();
                                break;
                            case "U":
                                instance = new Northwind.Tag.U();
                                break;
                            case "UL":
                                instance = new Northwind.Tag.Ul();
                                break;
                            case "VAR":
                                instance = new Northwind.Tag.Var();
                                break;
                            case "VIDEO":
                                instance = new Northwind.Tag.Video();
                                break;
                            case "WBR":
                                instance = new Northwind.Tag.Wbr();
                                break;
                            default:
                                instance = new Northwind.Html.Component();
                                instance.create(this.element);
                                break;
                        }
                        instance.setElement(this.element);
                        instance.setDi(this.di);
                        return instance;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
                }
            };
            return TagAdapter;
        }());
        Tag.TagAdapter = TagAdapter;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="./TagAdapter.ts"/>
var Northwind;
///<reference path="./TagAdapter.ts"/>
(function (Northwind) {
    var Html;
    (function (Html) {
        var Dom = (function () {
            /**
             *
             * @param element
             */
            function Dom(element) {
                if (element === void 0) { element = null; }
                if (element != null)
                    this.element = element;
            }
            /**
             *
             * @param id
             */
            Dom.prototype.getById = function (id, context) {
                if (context === void 0) { context = null; }
                var adapter = new Northwind.Tag.TagAdapter(document.getElementById(id));
                adapter.setDi(this.di);
                return adapter.get();
            };
            /**
             *
             */
            Dom.prototype.getByTag = function (name) {
                var elements = document.getElementsByTagName(name);
                var result = new Array();
                for (var key in elements) {
                    if (typeof elements[key].nodeName == "string") {
                        var adapter = new Northwind.Tag.TagAdapter(elements[key]);
                        adapter.setDi(this.di);
                        result.push(adapter.get());
                    }
                }
                if (result.length == 0) {
                    return false;
                }
                if (result.length == 1) {
                    return result[0];
                }
                return result;
            };
            /**
             *
             */
            Dom.prototype.getByClass = function (name, context) {
                if (context === void 0) { context = null; }
                var elements = document.getElementsByClassName(name);
                var result = new Array();
                for (var key in elements) {
                    if (typeof elements[key].nodeName == "string") {
                        var adapter = new Northwind.Tag.TagAdapter(elements[key]);
                        adapter.setDi(this.di);
                        result.push(adapter.get());
                    }
                }
                if (result.length == 0) {
                    return false;
                }
                if (result.length == 1) {
                    return result[0];
                }
                return this;
            };
            /**
             *
             */
            Dom.prototype.getElement = function () {
                return this.element;
            };
            /**
             *
             * @param element
             */
            Dom.prototype.setElement = function (element) {
                this.element = element;
            };
            Dom.prototype.setDi = function (di) {
                this.di = di;
            };
            Dom.prototype.getDi = function () {
                return this.di;
            };
            return Dom;
        }());
        Html.Dom = Dom;
    })(Html = Northwind.Html || (Northwind.Html = {}));
})(Northwind || (Northwind = {}));
///<reference path="./Component.ts"/>
///<reference path="./Elements/A.ts"/>
///<reference path="./Elements/Abbr.ts"/>
///<reference path="./Elements/Address.ts"/>
///<reference path="./Elements/Area.ts"/>
///<reference path="./Elements/Article.ts"/>
///<reference path="./Elements/Aside.ts"/>
///<reference path="./Elements/Audio.ts"/>
///<reference path="./Elements/B.ts"/>
///<reference path="./Elements/Base.ts"/>
///<reference path="./Elements/Bdi.ts"/>
///<reference path="./Elements/Bdo.ts"/>
///<reference path="./Elements/Blockquote.ts"/>
///<reference path="./Elements/Body.ts"/>
///<reference path="./Elements/Br.ts"/>
///<reference path="./Elements/Button.ts"/>
///<reference path="./Elements/Canvas.ts"/>
///<reference path="./Elements/Caption.ts"/>
///<reference path="./Elements/Cite.ts"/>
///<reference path="./Elements/Code.ts"/>
///<reference path="./Elements/Col.ts"/>
///<reference path="./Elements/ColGroup.ts"/>
///<reference path="./Elements/Datalist.ts"/>
///<reference path="./Elements/Db.ts"/>
///<reference path="./Elements/Del.ts"/>
///<reference path="./Elements/Details.ts"/>
///<reference path="./Elements/Dfn.ts"/>
///<reference path="./Elements/Dialog.ts"/>
///<reference path="./Elements/Div.ts"/>
///<reference path="./Elements/Dl.ts"/>
///<reference path="./Elements/Dt.ts"/>
///<reference path="./Elements/Em.ts"/>
///<reference path="./Elements/Embed.ts"/>
///<reference path="./Elements/Fieldset.ts"/>
///<reference path="./Elements/Figcaption.ts"/>
///<reference path="./Elements/Figure.ts"/>
///<reference path="./Elements/Footer.ts"/>
///<reference path="./Elements/Form.ts"/>
///<reference path="./Elements/H1.ts"/>
///<reference path="./Elements/H2.ts"/>
///<reference path="./Elements/H3.ts"/>
///<reference path="./Elements/H4.ts"/>
///<reference path="./Elements/H5.ts"/>
///<reference path="./Elements/H6.ts"/>
///<reference path="./Elements/Head.ts"/>
///<reference path="./Elements/Header.ts"/>
///<reference path="./Elements/I.ts"/>
///<reference path="./Elements/Iframe.ts"/>
///<reference path="./Elements/Img.ts"/>
///<reference path="./Elements/Input.ts"/>
///<reference path="./Elements/Ins.ts"/>
///<reference path="./Elements/Kbd.ts"/>
///<reference path="./Elements/Keygen.ts"/>
///<reference path="./Elements/Label.ts"/>
///<reference path="./Elements/Leyend.ts"/>
///<reference path="./Elements/Li.ts"/>
///<reference path="./Elements/Link.ts"/>
///<reference path="./Elements/Main.ts"/>
///<reference path="./Elements/Map.ts"/>
///<reference path="./Elements/Menu.ts"/>
///<reference path="./Elements/MenuItem.ts"/>
///<reference path="./Elements/Meta.ts"/>
///<reference path="./Elements/Meter.ts"/>
///<reference path="./Elements/Nav.ts"/>
///<reference path="./Elements/Noscrip.ts"/>
///<reference path="./Elements/Obj.ts"/>
///<reference path="./Elements/Ol.ts"/>
///<reference path="./Elements/Optgroup.ts"/>
///<reference path="./Elements/Option.ts"/>
///<reference path="./Elements/Output.ts"/>
///<reference path="./Elements/P.ts"/>
///<reference path="./Elements/Param.ts"/>
///<reference path="./Elements/Pre.ts"/>
///<reference path="./Elements/Progress.ts"/>
///<reference path="./Elements/Q.ts"/>
///<reference path="./Elements/Rp.ts"/>
///<reference path="./Elements/Rt.ts"/>
///<reference path="./Elements/Ruby.ts"/>
///<reference path="./Elements/S.ts"/>
///<reference path="./Elements/Samp.ts"/>
///<reference path="./Elements/Script.ts"/>
///<reference path="./Elements/Section.ts"/>
///<reference path="./Elements/Select.ts"/>
///<reference path="./Elements/Small.ts"/>
///<reference path="./Elements/Source.ts"/>
///<reference path="./Elements/Span.ts"/>
///<reference path="./Elements/Strong.ts"/>
///<reference path="./Elements/Style.ts"/>
///<reference path="./Elements/Sub.ts"/>
///<reference path="./Elements/Table.ts"/>
///<reference path="./Elements/Tbody.ts"/>
///<reference path="./Elements/Td.ts"/>
///<reference path="./Elements/Textarea.ts"/>
///<reference path="./Elements/Tfoot.ts"/>
///<reference path="./Elements/Th.ts"/>
///<reference path="./Elements/Thead.ts"/>
///<reference path="./Elements/Time.ts"/>
///<reference path="./Elements/Title.ts"/>
///<reference path="./Elements/Tr.ts"/>
///<reference path="./Elements/Track.ts"/>
///<reference path="./Elements/U.ts"/>
///<reference path="./Elements/Ul.ts"/>
///<reference path="./Elements/Var.ts"/>
///<reference path="./Elements/Video.ts"/>
///<reference path="./Elements/Wbr.ts"/>
var Northwind;
///<reference path="./Component.ts"/>
///<reference path="./Elements/A.ts"/>
///<reference path="./Elements/Abbr.ts"/>
///<reference path="./Elements/Address.ts"/>
///<reference path="./Elements/Area.ts"/>
///<reference path="./Elements/Article.ts"/>
///<reference path="./Elements/Aside.ts"/>
///<reference path="./Elements/Audio.ts"/>
///<reference path="./Elements/B.ts"/>
///<reference path="./Elements/Base.ts"/>
///<reference path="./Elements/Bdi.ts"/>
///<reference path="./Elements/Bdo.ts"/>
///<reference path="./Elements/Blockquote.ts"/>
///<reference path="./Elements/Body.ts"/>
///<reference path="./Elements/Br.ts"/>
///<reference path="./Elements/Button.ts"/>
///<reference path="./Elements/Canvas.ts"/>
///<reference path="./Elements/Caption.ts"/>
///<reference path="./Elements/Cite.ts"/>
///<reference path="./Elements/Code.ts"/>
///<reference path="./Elements/Col.ts"/>
///<reference path="./Elements/ColGroup.ts"/>
///<reference path="./Elements/Datalist.ts"/>
///<reference path="./Elements/Db.ts"/>
///<reference path="./Elements/Del.ts"/>
///<reference path="./Elements/Details.ts"/>
///<reference path="./Elements/Dfn.ts"/>
///<reference path="./Elements/Dialog.ts"/>
///<reference path="./Elements/Div.ts"/>
///<reference path="./Elements/Dl.ts"/>
///<reference path="./Elements/Dt.ts"/>
///<reference path="./Elements/Em.ts"/>
///<reference path="./Elements/Embed.ts"/>
///<reference path="./Elements/Fieldset.ts"/>
///<reference path="./Elements/Figcaption.ts"/>
///<reference path="./Elements/Figure.ts"/>
///<reference path="./Elements/Footer.ts"/>
///<reference path="./Elements/Form.ts"/>
///<reference path="./Elements/H1.ts"/>
///<reference path="./Elements/H2.ts"/>
///<reference path="./Elements/H3.ts"/>
///<reference path="./Elements/H4.ts"/>
///<reference path="./Elements/H5.ts"/>
///<reference path="./Elements/H6.ts"/>
///<reference path="./Elements/Head.ts"/>
///<reference path="./Elements/Header.ts"/>
///<reference path="./Elements/I.ts"/>
///<reference path="./Elements/Iframe.ts"/>
///<reference path="./Elements/Img.ts"/>
///<reference path="./Elements/Input.ts"/>
///<reference path="./Elements/Ins.ts"/>
///<reference path="./Elements/Kbd.ts"/>
///<reference path="./Elements/Keygen.ts"/>
///<reference path="./Elements/Label.ts"/>
///<reference path="./Elements/Leyend.ts"/>
///<reference path="./Elements/Li.ts"/>
///<reference path="./Elements/Link.ts"/>
///<reference path="./Elements/Main.ts"/>
///<reference path="./Elements/Map.ts"/>
///<reference path="./Elements/Menu.ts"/>
///<reference path="./Elements/MenuItem.ts"/>
///<reference path="./Elements/Meta.ts"/>
///<reference path="./Elements/Meter.ts"/>
///<reference path="./Elements/Nav.ts"/>
///<reference path="./Elements/Noscrip.ts"/>
///<reference path="./Elements/Obj.ts"/>
///<reference path="./Elements/Ol.ts"/>
///<reference path="./Elements/Optgroup.ts"/>
///<reference path="./Elements/Option.ts"/>
///<reference path="./Elements/Output.ts"/>
///<reference path="./Elements/P.ts"/>
///<reference path="./Elements/Param.ts"/>
///<reference path="./Elements/Pre.ts"/>
///<reference path="./Elements/Progress.ts"/>
///<reference path="./Elements/Q.ts"/>
///<reference path="./Elements/Rp.ts"/>
///<reference path="./Elements/Rt.ts"/>
///<reference path="./Elements/Ruby.ts"/>
///<reference path="./Elements/S.ts"/>
///<reference path="./Elements/Samp.ts"/>
///<reference path="./Elements/Script.ts"/>
///<reference path="./Elements/Section.ts"/>
///<reference path="./Elements/Select.ts"/>
///<reference path="./Elements/Small.ts"/>
///<reference path="./Elements/Source.ts"/>
///<reference path="./Elements/Span.ts"/>
///<reference path="./Elements/Strong.ts"/>
///<reference path="./Elements/Style.ts"/>
///<reference path="./Elements/Sub.ts"/>
///<reference path="./Elements/Table.ts"/>
///<reference path="./Elements/Tbody.ts"/>
///<reference path="./Elements/Td.ts"/>
///<reference path="./Elements/Textarea.ts"/>
///<reference path="./Elements/Tfoot.ts"/>
///<reference path="./Elements/Th.ts"/>
///<reference path="./Elements/Thead.ts"/>
///<reference path="./Elements/Time.ts"/>
///<reference path="./Elements/Title.ts"/>
///<reference path="./Elements/Tr.ts"/>
///<reference path="./Elements/Track.ts"/>
///<reference path="./Elements/U.ts"/>
///<reference path="./Elements/Ul.ts"/>
///<reference path="./Elements/Var.ts"/>
///<reference path="./Elements/Video.ts"/>
///<reference path="./Elements/Wbr.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        var FactoryTag = (function () {
            /**
             *
             */
            function FactoryTag(ctx) {
                this.context = ctx;
            }
            FactoryTag.prototype.setDi = function (di) {
                this.di = di;
                return this;
            };
            FactoryTag.prototype.getDi = function () {
                return this.di;
            };
            /**
             *
             */
            FactoryTag.prototype.get = function (tagName) {
                var instance;
                switch (tagName) {
                    case "A":
                        instance = new Northwind.Tag.A();
                        ;
                        break;
                    case "ABBR":
                        instance = new Northwind.Tag.Abbr();
                        ;
                        break;
                    case "ADDRESS":
                        instance = new Northwind.Tag.Address();
                        ;
                        break;
                    case "AREA":
                        instance = new Northwind.Tag.Area();
                        ;
                        break;
                    case "ARTICLE":
                        instance = new Northwind.Tag.Article();
                        ;
                        break;
                    case "ASIDE":
                        instance = new Northwind.Tag.Aside();
                        ;
                        break;
                    case "AUDIO":
                        instance = new Northwind.Tag.Audio();
                        ;
                        break;
                    case "B":
                        instance = new Northwind.Tag.B();
                        ;
                        break;
                    case "BASE":
                        instance = new Northwind.Tag.Base();
                        ;
                        break;
                    case "BDI":
                        instance = new Northwind.Tag.Bdi();
                        ;
                        break;
                    case "BDO":
                        instance = new Northwind.Tag.Bdo();
                        ;
                        break;
                    case "BLOCKQUOTE":
                        instance = new Northwind.Tag.Blockquote();
                        ;
                        break;
                    case "BODY":
                        instance = new Northwind.Tag.Body();
                        ;
                        break;
                    case "BR":
                        instance = new Northwind.Tag.Br();
                        ;
                        break;
                    case "BUTTON":
                        instance = new Northwind.Tag.Button();
                        ;
                        break;
                    case "CANVAS":
                        instance = new Northwind.Tag.Canvas();
                        ;
                        break;
                    case "CAPTION":
                        instance = new Northwind.Tag.Caption();
                        ;
                        break;
                    case "CITE":
                        instance = new Northwind.Tag.Cite();
                        ;
                        break;
                    case "CODE":
                        instance = new Northwind.Tag.Code();
                        ;
                        break;
                    case "COL":
                        instance = new Northwind.Tag.Col();
                        ;
                        break;
                    case "COLGROUP":
                        instance = new Northwind.Tag.ColGroup();
                        ;
                        break;
                    case "DATALIST":
                        instance = new Northwind.Tag.Datalist();
                        ;
                        break;
                    case "DB":
                        instance = new Northwind.Tag.Db();
                        ;
                        break;
                    case "DEL":
                        instance = new Northwind.Tag.Del();
                        ;
                        break;
                    case "DETAILS":
                        instance = new Northwind.Tag.Details();
                        break;
                    case "DFN":
                        instance = new Northwind.Tag.Dfn();
                        ;
                        break;
                    case "DIALOG":
                        instance = new Northwind.Tag.Dialog();
                        ;
                        break;
                    case "DIV":
                        instance = new Northwind.Tag.Div();
                        ;
                        break;
                    case "DL":
                        instance = new Northwind.Tag.Dl();
                        ;
                        break;
                    case "DT":
                        instance = new Northwind.Tag.Dt();
                        ;
                        break;
                    case "EM":
                        instance = new Northwind.Tag.Em();
                        ;
                        break;
                    case "EMBED":
                        instance = new Northwind.Tag.Embed();
                        ;
                        break;
                    case "FIELDSET":
                        instance = new Northwind.Tag.Fieldset();
                        ;
                        break;
                    case "FIGCAPTION":
                        instance = new Northwind.Tag.Figcaption();
                        ;
                        break;
                    case "FIGURE":
                        instance = new Northwind.Tag.Figure();
                        ;
                        break;
                    case "FOOTER":
                        instance = new Northwind.Tag.Footer();
                        ;
                        break;
                    case "FORM":
                        instance = new Northwind.Tag.Form();
                        ;
                        break;
                    case "H1":
                        instance = new Northwind.Tag.H1();
                        ;
                        break;
                    case "H2":
                        instance = new Northwind.Tag.H2();
                        ;
                        break;
                    case "H3":
                        instance = new Northwind.Tag.H3();
                        ;
                        break;
                    case "H4":
                        instance = new Northwind.Tag.H4();
                        ;
                        break;
                    case "H5":
                        instance = new Northwind.Tag.H5();
                        ;
                        break;
                    case "H6":
                        instance = new Northwind.Tag.H6();
                        ;
                        break;
                    case "HEAD":
                        instance = new Northwind.Tag.Head();
                        ;
                        break;
                    case "HEADER":
                        instance = new Northwind.Tag.Header();
                        ;
                        break;
                    case "I":
                        instance = new Northwind.Tag.I();
                        ;
                        break;
                    case "IFRAME":
                        instance = new Northwind.Tag.Iframe();
                        ;
                        break;
                    case "IMG":
                        instance = new Northwind.Tag.Img();
                        ;
                        break;
                    case "INPUT":
                        instance = new Northwind.Tag.Input();
                        ;
                        break;
                    case "INS":
                        instance = new Northwind.Tag.Ins();
                        ;
                        break;
                    case "KBD":
                        instance = new Northwind.Tag.Kbd();
                        ;
                        break;
                    case "KEYGEN":
                        instance = new Northwind.Tag.Keygen();
                        ;
                        break;
                    case "LABEL":
                        instance = new Northwind.Tag.Label();
                        ;
                        break;
                    case "LEYEND":
                        instance = new Northwind.Tag.Leyend();
                        ;
                        break;
                    case "LI":
                        instance = new Northwind.Tag.Li();
                        ;
                        break;
                    case "LINK":
                        instance = new Northwind.Tag.Link();
                        ;
                        break;
                    case "MAIN":
                        instance = new Northwind.Tag.Main();
                        ;
                        break;
                    case "MAP":
                        instance = new Northwind.Tag.Map();
                        ;
                        break;
                    case "MENU":
                        instance = new Northwind.Tag.Menu();
                        ;
                        break;
                    case "MENUITEM":
                        instance = new Northwind.Tag.Menuitem();
                        ;
                        break;
                    case "META":
                        instance = new Northwind.Tag.Meta();
                        ;
                        break;
                    case "META":
                        instance = new Northwind.Tag.Meta();
                        ;
                        break;
                    case "METER":
                        instance = new Northwind.Tag.Meter();
                        ;
                        break;
                    case "NAV":
                        instance = new Northwind.Tag.Nav();
                        ;
                        break;
                    case "NOSCRIP":
                        instance = new Northwind.Tag.Noscrip();
                        ;
                        break;
                    case "OBJECT":
                        instance = new Northwind.Tag.Obj();
                        ;
                        break;
                    case "OL":
                        instance = new Northwind.Tag.Ol();
                        ;
                        break;
                    case "OPTGROUP":
                        instance = new Northwind.Tag.Optgroup();
                        ;
                        break;
                    case "P":
                        instance = new Northwind.Tag.P();
                        ;
                        break;
                    case "PARAM":
                        instance = new Northwind.Tag.Param();
                        ;
                        break;
                    case "PRE":
                        instance = new Northwind.Tag.Pre();
                        ;
                        break;
                    case "PROGRESS":
                        instance = new Northwind.Tag.Progress();
                        ;
                        break;
                    case "Q":
                        instance = new Northwind.Tag.Q();
                        ;
                        break;
                    case "RP":
                        instance = new Northwind.Tag.Rp();
                        ;
                        break;
                    case "RT":
                        instance = new Northwind.Tag.Rt();
                        ;
                        break;
                    case "RUBY":
                        instance = new Northwind.Tag.Ruby();
                        ;
                        break;
                    case "S":
                        instance = new Northwind.Tag.S();
                        ;
                        break;
                    case "SAMP":
                        instance = new Northwind.Tag.Samp();
                        ;
                        break;
                    case "SCRIPT":
                        instance = new Northwind.Tag.Script();
                        ;
                        break;
                    case "SECTION":
                        instance = new Northwind.Tag.Section();
                        ;
                        break;
                    case "SELECT":
                        instance = new Northwind.Tag.Select();
                        ;
                        break;
                    case "SMALL":
                        instance = new Northwind.Tag.Small();
                        ;
                        break;
                    case "SOURCE":
                        instance = new Northwind.Tag.Source();
                        ;
                        break;
                    case "SPAN":
                        instance = new Northwind.Tag.Span();
                        ;
                        break;
                    case "STRONG":
                        instance = new Northwind.Tag.Strong();
                        ;
                        break;
                    case "STYLE":
                        instance = new Northwind.Tag.Style();
                        ;
                        break;
                    case "SUB":
                        instance = new Northwind.Tag.Sub();
                        ;
                        break;
                    case "SUMMARY":
                        instance = new Northwind.Tag.Summary();
                        ;
                        break;
                    case "SUP":
                        instance = new Northwind.Tag.Sup();
                        ;
                        break;
                    case "TABLE":
                        instance = new Northwind.Tag.Table();
                        ;
                        break;
                    case "TBODY":
                        instance = new Northwind.Tag.Tbody();
                        ;
                        break;
                    case "TD":
                        instance = new Northwind.Tag.Td();
                        ;
                        break;
                    case "TEXTAREA":
                        instance = new Northwind.Tag.Textarea();
                        ;
                        break;
                    case "TFOOT":
                        instance = new Northwind.Tag.Tfoot();
                        ;
                        break;
                    case "TH":
                        instance = new Northwind.Tag.Th();
                        ;
                        break;
                    case "THEAD":
                        instance = new Northwind.Tag.Thead();
                        ;
                        break;
                    case "TIME":
                        instance = new Northwind.Tag.Time();
                        ;
                        break;
                    case "TITLE":
                        instance = new Northwind.Tag.Title();
                        ;
                        break;
                    case "TR":
                        instance = new Northwind.Tag.Tr();
                        ;
                        break;
                    case "TRACK":
                        instance = new Northwind.Tag.Track();
                        ;
                        break;
                    case "U":
                        instance = new Northwind.Tag.U();
                        ;
                        break;
                    case "UL":
                        instance = new Northwind.Tag.Ul();
                        ;
                        break;
                    case "VAR":
                        instance = new Northwind.Tag.Var();
                        ;
                        break;
                    case "VIDEO":
                        instance = new Northwind.Tag.Video();
                        ;
                        break;
                    case "WBR":
                        instance = new Northwind.Tag.Wbr();
                        ;
                        break;
                    default:
                        instance = new Northwind.Html.Component();
                        instance.create(tagName);
                        break;
                }
                instance.setDi(this.di);
                return instance;
            };
            return FactoryTag;
        }());
        Tag.FactoryTag = FactoryTag;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
/// <reference path="./Container.ts"/>
/// <reference path="../Network/Ajax.ts" />
/// <reference path="../Mvc/View/Html/Dom.ts"/>
/// <reference path="../Mvc/View/Html/FactoryTag.ts"/>
var Northwind;
/// <reference path="./Container.ts"/>
/// <reference path="../Network/Ajax.ts" />
/// <reference path="../Mvc/View/Html/Dom.ts"/>
/// <reference path="../Mvc/View/Html/FactoryTag.ts"/>
(function (Northwind) {
    var Service;
    (function (Service) {
        var FactoryDefault = (function (_super) {
            __extends(FactoryDefault, _super);
            function FactoryDefault() {
                return _super.call(this) || this;
            }
            FactoryDefault.prototype.getDom = function () {
                return this.di.get("dom");
            };
            FactoryDefault.prototype.getAjax = function () {
                return this.di.get("ajax");
            };
            FactoryDefault.prototype.getEm = function () {
                return this.di.get("em");
            };
            FactoryDefault.prototype.getContainer = function () {
                return this.di.get("container");
            };
            FactoryDefault.prototype.getTag = function (name) {
                var tag = this.get("tag");
                tag.setDi(this.di);
                return tag.get(name);
            };
            FactoryDefault.prototype.getEvent = function () {
                var events = this.di.get("events");
                return events;
            };
            FactoryDefault.prototype.setDi = function (di) {
                this.di = di;
                this.di.set("ajax", new Northwind.Network.Ajax);
                this.di.set("container", new Northwind.Service.Container);
                var em = new Northwind.Persistence.EntityManager;
                em.setDi(this.di);
                this.di.set("em", em);
                var dom = new Northwind.Html.Dom;
                dom.setDi(di);
                this.di.set("dom", dom);
                var tag = new Northwind.Tag.FactoryTag(this);
                tag.setDi(di);
                this.di.set("tag", tag);
                var eventManager = new Northwind.Events;
                eventManager.setDi(di);
                this.di.set("event", eventManager);
                return this;
            };
            FactoryDefault.prototype.getDi = function () {
                return this.di;
            };
            return FactoryDefault;
        }(Northwind.Service.Container));
        Service.FactoryDefault = FactoryDefault;
    })(Service = Northwind.Service || (Northwind.Service = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Service/FactoryDefault.ts" />
var Northwind;
///<reference path="../Service/FactoryDefault.ts" />
(function (Northwind) {
    var Mvc;
    (function (Mvc) {
        //@sealed
        var Controller = (function (_super) {
            __extends(Controller, _super);
            /**
             *
             */
            function Controller() {
                return _super.call(this) || this;
            }
            /**
             *
             */
            Controller.prototype.setGlobals = function (globals) {
                this.globals = globals;
                return this;
            };
            /**
             *
             */
            Controller.prototype.getGlobals = function () {
                return this.globals;
            };
            /**
             *
             */
            Controller.prototype.initialize = function () {
            };
            return Controller;
        }(Northwind.Service.FactoryDefault));
        Mvc.Controller = Controller;
    })(Mvc = Northwind.Mvc || (Northwind.Mvc = {}));
})(Northwind || (Northwind = {}));
///<reference path="./Controller.ts"/>
var Northwind;
///<reference path="./Controller.ts"/>
(function (Northwind) {
    var Mvc;
    (function (Mvc) {
        var Component = (function (_super) {
            __extends(Component, _super);
            function Component() {
                return _super.apply(this, arguments) || this;
            }
            return Component;
        }(Northwind.Mvc.Controller));
        Mvc.Component = Component;
    })(Mvc = Northwind.Mvc || (Northwind.Mvc = {}));
})(Northwind || (Northwind = {}));
/// <reference path="./RawModel.ts"/>
var Northwind;
/// <reference path="./RawModel.ts"/>
(function (Northwind) {
    var Mvc;
    (function (Mvc) {
        var AjaxModel = (function (_super) {
            __extends(AjaxModel, _super);
            function AjaxModel() {
                var _this = _super.call(this) || this;
                _this.insertUrl = null;
                _this.deleteUrl = null;
                _this.updateUrl = null;
                _this.findUrl = null;
                _this.findOneUrl = null;
                _this.countUrl = null;
                _this.method = "POST";
                _this.initialize();
                return _this;
            }
            AjaxModel.prototype.setSource = function (data) {
                this.setInsertUrl(data.insert);
                this.setUpdateUrl(data.update);
                this.setInsertUrl(data.insert);
                this.setCountUrl(data.count);
                this.setFindOneUrl(data.findOne);
                this.setFindUrl(data.find);
            };
            AjaxModel.prototype.setInsertUrl = function (url) {
                this.insertUrl = url;
            };
            AjaxModel.prototype.setFindUrl = function (url) {
                this.findUrl = url;
            };
            AjaxModel.prototype.setFindOneUrl = function (url) {
                this.findOneUrl = url;
            };
            AjaxModel.prototype.setCountUrl = function (url) {
                this.countUrl = url;
            };
            AjaxModel.prototype.setDeleteUrl = function (url) {
                this.deleteUrl = url;
            };
            AjaxModel.prototype.setUpdateUrl = function (url) {
                this.updateUrl = url;
            };
            AjaxModel.prototype.getInsertUrl = function () {
                return this.insertUrl;
            };
            AjaxModel.prototype.getFindUrl = function () {
                return this.findUrl;
            };
            AjaxModel.prototype.getDeleteUrl = function () {
                return this.deleteUrl;
            };
            AjaxModel.prototype.getUpdateUrl = function () {
                return this.updateUrl;
            };
            AjaxModel.prototype.setParams = function (params) {
                this.params = params;
            };
            AjaxModel.prototype.getParams = function () {
                return this.params;
            };
            AjaxModel.prototype.setMethod = function (method) {
                this.method = method;
            };
            AjaxModel.prototype.getMethod = function () {
                return this.method;
            };
            return AjaxModel;
        }(Northwind.Mvc.RawModel));
        Mvc.AjaxModel = AjaxModel;
    })(Mvc = Northwind.Mvc || (Northwind.Mvc = {}));
})(Northwind || (Northwind = {}));
/// <reference path="./RawModel.ts"/>
var Northwind;
/// <reference path="./RawModel.ts"/>
(function (Northwind) {
    var Mvc;
    (function (Mvc) {
        var StaticModel = (function (_super) {
            __extends(StaticModel, _super);
            /**
             *
             */
            function StaticModel(di) {
                var _this = _super.call(this) || this;
                _this.setContainer(new Northwind.Service.Container());
                _this.initialize();
                return _this;
            }
            /**
             *
             */
            StaticModel.prototype.setData = function (data) {
                this.getContainer().setPersistent("Models_Identify_" + this.getClassName(), JSON.stringify(data));
            };
            /**
             *
             */
            StaticModel.prototype.getData = function () {
                var data = this.getContainer().getPersistent("Models_Identify_" + this.getClassName());
                if (typeof data == "string") {
                }
                return data;
            };
            /**
             *
             */
            StaticModel.prototype.getObjectData = function () {
                return JSON.parse(this.getContainer().getPersistent("Models_Identify_" + this.getClassName()));
            };
            /**
             *
             */
            StaticModel.prototype.setDi = function (di) {
                this.di = di;
            };
            /**
             *
             */
            StaticModel.prototype.getDi = function () {
                return this.di;
            };
            /**
             *
             */
            StaticModel.prototype.setIndex = function (index) {
                this.index = index;
            };
            /**
             *
             */
            StaticModel.prototype.getIndex = function () {
                return this.index;
            };
            /**
             *
             */
            StaticModel.prototype.setContainer = function (container) {
                this.container = container;
            };
            /**
             *
             */
            StaticModel.prototype.getContainer = function () {
                return this.container;
            };
            return StaticModel;
        }(Northwind.Mvc.RawModel));
        Mvc.StaticModel = StaticModel;
    })(Mvc = Northwind.Mvc || (Northwind.Mvc = {}));
})(Northwind || (Northwind = {}));
/// <reference path="./StaticModel.ts"/>
var Northwind;
/// <reference path="./StaticModel.ts"/>
(function (Northwind) {
    var Mvc;
    (function (Mvc) {
        var AjaxModelPersistent = (function (_super) {
            __extends(AjaxModelPersistent, _super);
            function AjaxModelPersistent() {
                var _this = _super.apply(this, arguments) || this;
                _this.insertUrl = null;
                _this.deleteUrl = null;
                _this.updateUrl = null;
                _this.findUrl = null;
                _this.method = "POST";
                return _this;
            }
            AjaxModelPersistent.prototype.setSource = function (data) {
                this.setInsertUrl(data.find);
                this.setUpdateUrl(data.update);
                this.setInsertUrl(data.insert);
                this.setFindUrl(data.insert);
            };
            AjaxModelPersistent.prototype.setAjaxInit = function (value) {
                this.getContainer().setPersistent("ajaxInit_" + this.getClassName(), value);
            };
            AjaxModelPersistent.prototype.getAjaxInit = function () {
                return this.getContainer().getPersistent("ajaxInit_" + this.getClassName());
            };
            AjaxModelPersistent.prototype.setInsertUrl = function (url) {
                this.insertUrl = url;
            };
            AjaxModelPersistent.prototype.setFindUrl = function (url) {
                this.findUrl = url;
            };
            AjaxModelPersistent.prototype.setDeleteUrl = function (url) {
                this.deleteUrl = url;
            };
            AjaxModelPersistent.prototype.setUpdateUrl = function (url) {
                this.updateUrl = url;
            };
            AjaxModelPersistent.prototype.getInsertUrl = function () {
                return this.insertUrl;
            };
            AjaxModelPersistent.prototype.getFindUrl = function () {
                return this.findUrl;
            };
            AjaxModelPersistent.prototype.getDeleteUrl = function () {
                return this.deleteUrl;
            };
            AjaxModelPersistent.prototype.getUpdateUrl = function () {
                return this.updateUrl;
            };
            AjaxModelPersistent.prototype.setParams = function (params) {
                this.params = params;
            };
            AjaxModelPersistent.prototype.getParams = function () {
                return this.params;
            };
            AjaxModelPersistent.prototype.setMethod = function (method) {
                this.method = method;
            };
            AjaxModelPersistent.prototype.getMethod = function () {
                return this.method;
            };
            return AjaxModelPersistent;
        }(Northwind.Mvc.StaticModel));
        Mvc.AjaxModelPersistent = AjaxModelPersistent;
    })(Mvc = Northwind.Mvc || (Northwind.Mvc = {}));
})(Northwind || (Northwind = {}));
var Northwind;
(function (Northwind) {
    var Builder;
    (function (Builder) {
        var Transaction = (function () {
            function Transaction() {
            }
            Transaction.prototype.get = function (row) {
            };
            return Transaction;
        }());
        Builder.Transaction = Transaction;
    })(Builder = Northwind.Builder || (Northwind.Builder = {}));
})(Northwind || (Northwind = {}));
///<reference path="Transaction.ts"/>
var Northwind;
///<reference path="Transaction.ts"/>
(function (Northwind) {
    var Builder;
    (function (Builder) {
        var And = (function (_super) {
            __extends(And, _super);
            /**
             *
             * @param condition
             */
            function And(condition) {
                var _this = _super.call(this) || this;
                /**
                 *
                 */
                _this.condition = {};
                if (typeof condition == "object") {
                    _this.condition = condition;
                }
                else {
                    throw "And condition must be an object";
                }
                return _this;
            }
            /**
             *
             */
            And.prototype.get = function (row) {
                var result = new Array();
                var size = Object.keys(this.condition).length;
                for (var key in row) {
                    if (row[key] == this.condition[key]) {
                        result.push(true);
                    }
                }
                if (result.length != size) {
                    return false;
                }
                for (var i = 1; i <= size; i++) {
                    if (result[i] == false) {
                        return false;
                    }
                }
                return true;
            };
            return And;
        }(Northwind.Builder.Transaction));
        Builder.And = And;
    })(Builder = Northwind.Builder || (Northwind.Builder = {}));
})(Northwind || (Northwind = {}));
var Northwind;
(function (Northwind) {
    var Builder;
    (function (Builder) {
        var ComparisonOperators = (function () {
            function ComparisonOperators() {
            }
            return ComparisonOperators;
        }());
        ComparisonOperators.AND = "&&";
        ComparisonOperators.OR = "||";
        ComparisonOperators.EQUAL = "==";
        ComparisonOperators.DIFFERENT = "!=";
        Builder.ComparisonOperators = ComparisonOperators;
    })(Builder = Northwind.Builder || (Northwind.Builder = {}));
})(Northwind || (Northwind = {}));
var Northwind;
(function (Northwind) {
    var Builder;
    (function (Builder) {
        var DataType = (function () {
            function DataType() {
            }
            /**
             *
             */
            DataType.getValueByType = function (value) {
                var tyof = typeof value;
                switch (tyof) {
                    case DataType.STRING_TYPE:
                        value = "\"" + value + "\"";
                        break;
                }
                return value;
            };
            return DataType;
        }());
        DataType.BOOLEAN = 1;
        DataType.INTEGER = 2;
        DataType.STRING = 3;
        DataType.OBJECT = 4;
        DataType.ARRAY = 5;
        DataType.CLASS = 6;
        DataType.BOOLEAN_TYPE = "boolean";
        DataType.INTEGER_TYPE = "number";
        DataType.STRING_TYPE = "string";
        DataType.OBJECT_TYPE = "object";
        Builder.DataType = DataType;
    })(Builder = Northwind.Builder || (Northwind.Builder = {}));
})(Northwind || (Northwind = {}));
///<reference path="Transaction.ts"/>
var Northwind;
///<reference path="Transaction.ts"/>
(function (Northwind) {
    var Builder;
    (function (Builder) {
        var Group = (function (_super) {
            __extends(Group, _super);
            function Group() {
                return _super.call(this) || this;
            }
            Group.prototype.get = function () {
            };
            return Group;
        }(Northwind.Builder.Transaction));
        Builder.Group = Group;
    })(Builder = Northwind.Builder || (Northwind.Builder = {}));
})(Northwind || (Northwind = {}));
///<reference path="DataType.ts" />
///<reference path="Transaction.ts"/>
var Northwind;
///<reference path="DataType.ts" />
///<reference path="Transaction.ts"/>
(function (Northwind) {
    var Builder;
    (function (Builder) {
        var Gt = (function (_super) {
            __extends(Gt, _super);
            /**
             *
             * @param condition
             */
            function Gt(condition) {
                var _this = _super.call(this) || this;
                /**
                 *
                 */
                _this.condition = {};
                if (typeof condition == "object") {
                    _this.condition = condition;
                }
                else {
                    throw "And condition must be an object";
                }
                return _this;
            }
            /**
             *
             */
            Gt.prototype.get = function (row) {
                var result = new Array();
                var size = Object.keys(this.condition).length;
                for (var key in row) {
                    if (row[key] > this.condition[key]) {
                        result.push(true);
                    }
                }
                if (result.length != size) {
                    return false;
                }
                for (var i = 1; i <= size; i++) {
                    if (result[i] == false) {
                        return false;
                    }
                }
                return true;
            };
            return Gt;
        }(Northwind.Builder.Transaction));
        Builder.Gt = Gt;
    })(Builder = Northwind.Builder || (Northwind.Builder = {}));
})(Northwind || (Northwind = {}));
///<reference path="DataType.ts" />
var Northwind;
///<reference path="DataType.ts" />
(function (Northwind) {
    var Builder;
    (function (Builder) {
        var Gte = (function (_super) {
            __extends(Gte, _super);
            /**
             *
             * @param condition
             */
            function Gte(condition) {
                var _this = _super.call(this) || this;
                /**
                 *
                 */
                _this.condition = {};
                if (typeof condition == "object") {
                    _this.condition = condition;
                }
                else {
                    throw "And condition must be an object";
                }
                return _this;
            }
            /**
             *
             */
            Gte.prototype.get = function (row) {
                var result = new Array();
                var size = Object.keys(this.condition).length;
                for (var key in row) {
                    if (row[key] >= this.condition[key]) {
                        result.push(true);
                    }
                }
                if (result.length != size) {
                    return false;
                }
                for (var i = 1; i <= size; i++) {
                    if (result[i] == false) {
                        return false;
                    }
                }
                return true;
            };
            return Gte;
        }(Northwind.Builder.Transaction));
        Builder.Gte = Gte;
    })(Builder = Northwind.Builder || (Northwind.Builder = {}));
})(Northwind || (Northwind = {}));
///<reference path="Transaction.ts"/>
var Northwind;
///<reference path="Transaction.ts"/>
(function (Northwind) {
    var Builder;
    (function (Builder) {
        var In = (function (_super) {
            __extends(In, _super);
            /**
             *
             * @param condition
             */
            function In(condition) {
                var _this = _super.call(this) || this;
                /**
                 *
                 */
                _this.conditions = new Array;
                if (typeof condition == "object") {
                    for (var key in condition) {
                        if (condition[key] instanceof Array) {
                            var row = condition[key];
                            for (var key2 in row) {
                                var value2 = Builder.DataType.getValueByType(row[key2]);
                                _this.conditions.push("row[\"" + key + "\"]" + " == " + value2);
                            }
                        }
                        else {
                            throw "Not in value should be array";
                        }
                    }
                }
                else {
                    throw "Not condition must be an object";
                }
                return _this;
            }
            In.prototype.get = function () {
                return "(" + this.conditions.join(" || ") + ")";
            };
            return In;
        }(Northwind.Builder.Transaction));
        Builder.In = In;
    })(Builder = Northwind.Builder || (Northwind.Builder = {}));
})(Northwind || (Northwind = {}));
///<reference path="Transaction.ts"/>
var Northwind;
///<reference path="Transaction.ts"/>
(function (Northwind) {
    var Builder;
    (function (Builder) {
        var Like = (function (_super) {
            __extends(Like, _super);
            /**
             *
             * @param condition
             */
            function Like(condition) {
                var _this = _super.call(this) || this;
                /**
                 *
                 */
                _this.condition = {};
                if (typeof condition == "object") {
                    _this.condition = condition;
                    return _this;
                }
                throw "And condition must be an object";
                return _this;
            }
            /**
             *
             */
            Like.prototype.get = function (row) {
                var result = new Array();
                var size = Object.keys(this.condition).length;
                for (var key in this.condition) {
                    if (this.condition[key] != "" && typeof row[key] == "string") {
                        //console.log("->", row[key], this.condition[key], this.condition[key].replace(/[^A-Za-z0-9\s]/g, ""));
                        var regexp = new RegExp(this.condition[key], "i");
                        if (regexp.test(row[key].replace(/([^a-z_0-9\s]+)/gi, ''))) {
                            return true;
                        }
                        return false;
                    }
                }
                return false;
            };
            return Like;
        }(Northwind.Builder.Transaction));
        Builder.Like = Like;
    })(Builder = Northwind.Builder || (Northwind.Builder = {}));
})(Northwind || (Northwind = {}));
///<reference path="DataType.ts" />
var Northwind;
///<reference path="DataType.ts" />
(function (Northwind) {
    var Builder;
    (function (Builder) {
        var Lt = (function (_super) {
            __extends(Lt, _super);
            /**
             *
             * @param condition
             */
            function Lt(condition) {
                var _this = _super.call(this) || this;
                /**
                 *
                 */
                _this.condition = {};
                if (typeof condition == "object") {
                    _this.condition = condition;
                }
                else {
                    throw "And condition must be an object";
                }
                return _this;
            }
            /**
             *
             */
            Lt.prototype.get = function (row) {
                var result = new Array();
                var size = Object.keys(this.condition).length;
                for (var key in row) {
                    if (row[key] < this.condition[key]) {
                        result.push(true);
                    }
                }
                if (result.length != size) {
                    return false;
                }
                for (var i = 1; i <= size; i++) {
                    if (result[i] == false) {
                        return false;
                    }
                }
                return true;
            };
            return Lt;
        }(Northwind.Builder.Transaction));
        Builder.Lt = Lt;
    })(Builder = Northwind.Builder || (Northwind.Builder = {}));
})(Northwind || (Northwind = {}));
///<reference path="DataType.ts" />
var Northwind;
///<reference path="DataType.ts" />
(function (Northwind) {
    var Builder;
    (function (Builder) {
        var Lte = (function (_super) {
            __extends(Lte, _super);
            /**
             *
             * @param condition
             */
            function Lte(condition) {
                var _this = _super.call(this) || this;
                /**
                 *
                 */
                _this.condition = {};
                if (typeof condition == "object") {
                    _this.condition = condition;
                }
                else {
                    throw "And condition must be an object";
                }
                return _this;
            }
            /**
             *
             */
            Lte.prototype.get = function (row) {
                var result = new Array();
                var size = Object.keys(this.condition).length;
                for (var key in row) {
                    if (row[key] <= this.condition[key]) {
                        result.push(true);
                    }
                }
                if (result.length != size) {
                    return false;
                }
                for (var i = 1; i <= size; i++) {
                    if (result[i] == false) {
                        return false;
                    }
                }
                return true;
            };
            return Lte;
        }(Northwind.Builder.Transaction));
        Builder.Lte = Lte;
    })(Builder = Northwind.Builder || (Northwind.Builder = {}));
})(Northwind || (Northwind = {}));
///<reference path="Transaction.ts"/>
var Northwind;
///<reference path="Transaction.ts"/>
(function (Northwind) {
    var Builder;
    (function (Builder) {
        var Not = (function (_super) {
            __extends(Not, _super);
            /**
             *
             * @param condition
             */
            function Not(condition) {
                var _this = _super.call(this) || this;
                /**
                 *
                 */
                _this.condition = {};
                if (typeof condition == "object") {
                    _this.condition = condition;
                }
                else {
                    throw "And condition must be an object";
                }
                return _this;
            }
            /**
             *
             */
            Not.prototype.get = function (row) {
                var result = new Array();
                var size = Object.keys(this.condition).length;
                for (var key in row) {
                    if (row[key] == this.condition[key]) {
                        result.push(true);
                    }
                }
                for (var i = 0; i < size; i++) {
                    if (result[i] == true) {
                        return false;
                    }
                }
                return true;
            };
            return Not;
        }(Northwind.Builder.Transaction));
        Builder.Not = Not;
    })(Builder = Northwind.Builder || (Northwind.Builder = {}));
})(Northwind || (Northwind = {}));
///<reference path="DataType.ts" />
var Northwind;
///<reference path="DataType.ts" />
(function (Northwind) {
    var Builder;
    (function (Builder) {
        var NotIn = (function (_super) {
            __extends(NotIn, _super);
            /**
             *
             * @param condition
             */
            function NotIn(condition) {
                var _this = _super.call(this) || this;
                /**
                 *
                 */
                _this.conditions = new Array;
                if (typeof condition == "object") {
                    for (var key in condition) {
                        if (condition[key] instanceof Array) {
                            var row = condition[key];
                            for (var key2 in row) {
                                var value2 = Builder.DataType.getValueByType(row[key2]);
                                _this.conditions.push("row[\"" + key + "\"]" + " != " + value2);
                            }
                        }
                        else {
                            throw "Not in value should be array";
                        }
                    }
                }
                else {
                    throw "Not condition must be an object";
                }
                return _this;
            }
            NotIn.prototype.get = function () {
                return "(" + this.conditions.join(" && ") + ")";
            };
            return NotIn;
        }(Northwind.Builder.Transaction));
        Builder.NotIn = NotIn;
    })(Builder = Northwind.Builder || (Northwind.Builder = {}));
})(Northwind || (Northwind = {}));
var Northwind;
(function (Northwind) {
    var Builder;
    (function (Builder) {
        var Operators = (function () {
            function Operators() {
            }
            return Operators;
        }());
        Operators.OR = "$or";
        Operators.AND = "$and";
        Operators.SORT = "$sort";
        Operators.IS_NOT = "$isNot";
        Operators.LIMIT = "$limit";
        Operators.COLUMNS = "$columns";
        Operators.CONDITIONAL = "$conditions";
        Builder.Operators = Operators;
    })(Builder = Northwind.Builder || (Northwind.Builder = {}));
})(Northwind || (Northwind = {}));
///<reference path="DataType.ts" />
var Northwind;
///<reference path="DataType.ts" />
(function (Northwind) {
    var Builder;
    (function (Builder) {
        var Or = (function (_super) {
            __extends(Or, _super);
            /**
             *
             * @param condition
             */
            function Or(condition) {
                var _this = _super.call(this) || this;
                /**
                 *
                 */
                _this.condition = {};
                if (typeof condition == "object") {
                    _this.condition = condition;
                }
                else {
                    throw "And condition must be an object";
                }
                return _this;
            }
            /**
             *
             */
            Or.prototype.get = function (row) {
                var result = new Array();
                var size = Object.keys(this.condition).length;
                if (this.condition instanceof Builder.Transaction) {
                    result.push(this.condition.get(row));
                }
                for (var key in row) {
                    if (this.condition[key] instanceof Builder.Transaction) {
                        result.push(this.condition[key].get(row));
                    }
                    else {
                        if (row[key] == this.condition[key]) {
                            result.push(true);
                        }
                    }
                }
                for (var i = 0; i < size; i++) {
                    if (result[i] == true) {
                        return true;
                    }
                }
                return false;
            };
            return Or;
        }(Northwind.Builder.Transaction));
        Builder.Or = Or;
    })(Builder = Northwind.Builder || (Northwind.Builder = {}));
})(Northwind || (Northwind = {}));
var Northwind;
(function (Northwind) {
    var Builder;
    (function (Builder) {
        var Sort = (function () {
            function Sort() {
            }
            Sort.sortByField = function (data, field) {
                var arr = [];
                for (var prop in data) {
                    if (data.hasOwnProperty(prop)) {
                        var obj = {};
                        obj[prop] = data[prop];
                        obj.tempSortName = data[prop][field].toLowerCase();
                        arr.push(obj);
                    }
                }
                arr.sort(function (a, b) {
                    var at = a.tempSortName, bt = b.tempSortName;
                    return at > bt ? 1 : (at < bt ? -1 : 0);
                });
                var result = [];
                for (var i = 0, l = arr.length; i < l; i++) {
                    var obj = arr[i];
                    delete obj.tempSortName;
                    for (var prop in obj) {
                        if (obj.hasOwnProperty(prop)) {
                            var id = prop;
                        }
                    }
                    var item = obj[id];
                    result.push(item);
                }
                return result;
            };
            return Sort;
        }());
        Sort.ASC = 1;
        Sort.DESC = -1;
        Builder.Sort = Sort;
    })(Builder = Northwind.Builder || (Northwind.Builder = {}));
})(Northwind || (Northwind = {}));
var Northwind;
(function (Northwind) {
    var Mvc;
    (function (Mvc) {
        var Deny = (function () {
            function Deny() {
            }
            Deny.getDeny = function () {
                return [
                    "state",
                    "source",
                    "insertUrl",
                    "deleteUrl",
                    "updateUrl",
                    "findUrl",
                    "params",
                    "internalId",
                    "method"
                ];
            };
            return Deny;
        }());
        Mvc.Deny = Deny;
    })(Mvc = Northwind.Mvc || (Northwind.Mvc = {}));
})(Northwind || (Northwind = {}));
/// <reference path="./Model/Builder/DataType.ts" />
/// <reference path="./Model/Builder/ComparisonOperators.ts" />
/// <reference path="./Model/Builder/Operators.ts" />
/// <reference path="./Model/Builder/Gt.ts" />
/// <reference path="./Model/Builder/Gte.ts" />
/// <reference path="./Model/Builder/Lt.ts" />
/// <reference path="./Model/Builder/Lte.ts" />
/// <reference path="./Model/Builder/And.ts" />
/// <reference path="./Model/Builder/NotIn.ts" />
/// <reference path="./Model/Builder/Not.ts" />
/// <reference path="./Model/Builder/In.ts" />
/// <reference path="./Model/Builder/Sort.ts" />
var Northwind;
/// <reference path="./Model/Builder/DataType.ts" />
/// <reference path="./Model/Builder/ComparisonOperators.ts" />
/// <reference path="./Model/Builder/Operators.ts" />
/// <reference path="./Model/Builder/Gt.ts" />
/// <reference path="./Model/Builder/Gte.ts" />
/// <reference path="./Model/Builder/Lt.ts" />
/// <reference path="./Model/Builder/Lte.ts" />
/// <reference path="./Model/Builder/And.ts" />
/// <reference path="./Model/Builder/NotIn.ts" />
/// <reference path="./Model/Builder/Not.ts" />
/// <reference path="./Model/Builder/In.ts" />
/// <reference path="./Model/Builder/Sort.ts" />
(function (Northwind) {
    var Mvc;
    (function (Mvc) {
        var Query = (function () {
            /**
             *
             * @param data
             */
            function Query(data) {
                if (data === void 0) { data = false; }
                this.lim = null;
                this.sort = new Array;
                this.data = false;
                this.cols = new Array;
                this.conds = null;
                this.sortConds = false;
                this.transactions = new Array;
                this.negativeConds = null;
                this.negativeTransactions = new Array();
                this.data = data;
            }
            /**
             *
             */
            Query.prototype.columns = function (cols) {
                if (typeof cols == "object") {
                    this.cols = cols;
                }
                else {
                    throw "Column param must be an object";
                }
                return this;
            };
            /**
             *
             */
            Query.prototype.getColumns = function () {
                return Object.keys(this.data[0]);
            };
            /**
             *
             * @param row
             */
            Query.prototype.resolveColumns = function (row) {
                var newRow = {};
                if (Object.keys(this.cols).length > 0) {
                    for (var key in this.cols) {
                        newRow[this.cols[key]] = row[this.cols[key]];
                    }
                }
                else {
                    newRow = Object.keys(row);
                }
                return newRow;
            };
            /**
             *
             * @param condClass
             */
            Query.prototype.where = function (conditions) {
                if (conditions instanceof Northwind.Builder.Transaction) {
                    if (conditions instanceof Northwind.Builder.Not || conditions instanceof Northwind.Builder.NotIn) {
                        this.negativeTransactions.push(conditions);
                        this.negativeConds++;
                    }
                    else {
                        this.transactions.push(conditions);
                        this.conds++;
                    }
                }
                return this;
            };
            Query.prototype.limit = function (limit) {
                if (typeof limit == "number") {
                    this.lim = limit;
                }
                else {
                    throw "limit must be number";
                }
                return this;
            };
            Query.prototype.addOperator = function (length, operator) {
                var cond = "";
                if (length > 0) {
                    cond = operator + " ";
                }
                return cond;
            };
            /**
             *
             * @param conditions
             */
            Query.prototype.orderBy = function (sortContent) {
                this.sort = sortContent;
                this.sortConds = true;
            };
            /**
             *
             */
            Query.prototype.resolveSort = function (results) {
                switch (typeof this.sort) {
                    case Northwind.Builder.DataType.STRING_TYPE:
                        results = Northwind.Builder.Sort.sortByField(results, this.sort);
                        break;
                    case Northwind.Builder.DataType.OBJECT_TYPE:
                        if (this.sort instanceof Array) {
                            for (var sortKey in this.sort) {
                                var sortValue = this.sort[sortKey];
                                results = Northwind.Builder.Sort.sortByField(results, sortValue);
                            }
                        }
                        else {
                            for (var sortKey in this.sort) {
                                var sortType = this.sort[sortKey];
                                results = Northwind.Builder.Sort.sortByField(results, sortKey);
                                if (this.sort[sortKey] == Northwind.Builder.Sort.DESC) {
                                    results = results.reverse();
                                }
                            }
                        }
                        break;
                }
                return results;
            };
            /**
             *
             * @param row
             */
            Query.prototype.miniChecksum = function (row) {
                var str = JSON.stringify(row);
                var hash = 0;
                var char = 0;
                if (str.length == 0)
                    return hash;
                for (var i = 0; i < str.length; i++) {
                    char = str.charCodeAt(i);
                    hash = ((hash << 5) - hash) + char;
                    hash = hash & hash; // Convert to 32bit integer
                }
                return hash;
            };
            /**
             *
             * @param result
             * @param row
             */
            Query.prototype.ifExistOnResult = function (result, row) {
                for (var key in result) {
                    if (this.miniChecksum(result[key]) == this.miniChecksum(row)) {
                        return false;
                    }
                }
                return true;
            };
            /**
             *
             */
            Query.prototype.get = function () {
                var results = new Array;
                var limit = 1;
                for (var key in this.data) {
                    var row = this.data[key];
                    if (this.cols != null && this.cols.length > 0) {
                        row = this.resolveColumns(row);
                    }
                    if (this.conds > 0) {
                        for (var key in this.transactions) {
                            var result = this.transactions[key].get(row);
                            if (result) {
                                if (this.ifExistOnResult(results, row)) {
                                    results.push(row);
                                }
                            }
                        }
                    }
                    else {
                        results.push(row);
                    }
                    if (this.lim != null) {
                        if (limit == this.lim) {
                            break;
                        }
                    }
                    limit++;
                }
                var newResults = new Array();
                for (var key in results) {
                    var row = results[key];
                    if (this.negativeConds > 0) {
                        for (var key in this.negativeTransactions) {
                            var result = this.negativeTransactions[key].get(row);
                            if (result) {
                                if (this.ifExistOnResult(newResults, row)) {
                                    newResults.push(row);
                                }
                            }
                        }
                    }
                    else {
                        newResults.push(row);
                    }
                }
                if (this.sortConds) {
                    newResults = this.resolveSort(newResults);
                }
                return newResults;
            };
            return Query;
        }());
        Mvc.Query = Query;
    })(Mvc = Northwind.Mvc || (Northwind.Mvc = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [Input description]
         * @type {[type]}
         */
        var Hidden = (function (_super) {
            __extends(Hidden, _super);
            function Hidden() {
                var _this = _super.call(this) || this;
                _this.setHidden();
                return _this;
            }
            return Hidden;
        }(Northwind.Tag.Input));
        Tag.Hidden = Hidden;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Hr = (function (_super) {
            __extends(Hr, _super);
            /**
             *
             */
            function Hr() {
                var _this = _super.call(this, "HR") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Hr;
        }(Northwind.Html.Component));
        Tag.Hr = Hr;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Summary = (function (_super) {
            __extends(Summary, _super);
            /**
             *
             */
            function Summary() {
                var _this = _super.call(this, "SUMMARY") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Summary;
        }(Northwind.Html.Component));
        Tag.Summary = Summary;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
var Northwind;
///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>
(function (Northwind) {
    var Tag;
    (function (Tag) {
        /**
         * [ViewElement description]
         * @type {[type]}
         */
        var Sup = (function (_super) {
            __extends(Sup, _super);
            /**
             *
             */
            function Sup() {
                var _this = _super.call(this, "SUP") || this;
                _this.setArgs(_this.getArguments(arguments));
                _this.initialize();
                return _this;
            }
            return Sup;
        }(Northwind.Html.Component));
        Tag.Sup = Sup;
    })(Tag = Northwind.Tag || (Northwind.Tag = {}));
})(Northwind || (Northwind = {}));
var Northwind;
(function (Northwind) {
    var Network;
    (function (Network) {
        var MethodType = (function () {
            function MethodType() {
            }
            return MethodType;
        }());
        MethodType.POST = "POST";
        MethodType.GET = "GET";
        MethodType.PUT = "PUT";
        MethodType.DELETE = "DELETE";
        Network.MethodType = MethodType;
    })(Network = Northwind.Network || (Northwind.Network = {}));
})(Northwind || (Northwind = {}));
///<reference path="./Environment/Scope.ts"/>
///<reference path="./Environment/Config.ts"/>
///<reference path="./Helper/ArrayHelper.ts"/>
///<reference path="./Service/Container.ts"/>
var Northwind;
///<reference path="./Environment/Scope.ts"/>
///<reference path="./Environment/Config.ts"/>
///<reference path="./Helper/ArrayHelper.ts"/>
///<reference path="./Service/Container.ts"/>
(function (Northwind) {
    var Application = (function () {
        /**
         *
         */
        function Application() {
            /**
             *
             */
            this.config = {};
            /**
             *
             */
            this.try = 0;
            /**
             *
             */
            this.env = Northwind.Environment.Scope.LOCAL;
            /**
             *
             */
            this.catchErrors = function () { };
            /**
             *
             */
            this.domManager = new Northwind.Html.Dom;
            /**
             *
             */
            this.restricted = new Array;
            /**
             *
             */
            this.globals = new Array;
            this.restricted = [
                "constructor",
                "initialize",
                "getById",
                "getByTag",
                "getByClass",
                "getDi",
                "hasKey",
                "setPersistent",
                "getPersistent",
                "get",
                "set",
                "setDi",
                "getUrl",
                "setUrl",
                "getAjax",
                "setAjax",
                "getDom",
                "setDom",
                "setEm",
                "getEm",
                "setEntityManager",
                "getEntityManager",
                "setContainer",
                "getContainer",
                "setTag",
                "getTag",
                "setEvent",
                "getEvent",
                "setGlobals",
                "getGlobals"
            ];
            window.onbeforeunload = function () {
                sessionStorage.clear();
            };
        }
        /**
         *
         */
        Application.prototype.setScope = function (env) {
            this.env = env;
        };
        /**
         *
         */
        Application.prototype.setConfig = function (config) {
            this.config = config.getConfig(this.env);
        };
        /**
         *
         */
        Application.prototype.getConfig = function () {
            return this.config;
        };
        /**
         *
         */
        Application.prototype.setGlobals = function (globals) {
            this.globals = globals;
            return this;
        };
        /**
         *
         */
        Application.prototype.getGlobals = function () {
            return this.globals;
        };
        /**
         *
         */
        Application.prototype.resolveConfig = function (di) {
            this.addCharset(di);
            var positionArray = new Array();
            var configData = this.config;
            for (var key in configData) {
                switch (key) {
                    case "urls":
                        this.resolveUrl(di, configData[key]);
                        break;
                    case "services":
                        this.resolveServices(di, configData[key]);
                        break;
                }
            }
            //controllers executed in the final section
            if (configData.hasOwnProperty("controllers")) {
                this.resolveControllers(di, configData["controllers"]);
            }
            else {
                throw "Config must have controllers item attached";
            }
        };
        Application.prototype.addCharset = function (di) {
            this.domManager.setDi(di);
            var header = this.domManager.getByTag("head");
            header.append(new Northwind.Tag.Meta().attr({
                "charset": "utf-8"
            }));
        };
        /**
         *
         */
        Application.prototype.resolveUrl = function (di, urls) {
            var url = new Northwind.Url.Url();
            if (Array.isArray(urls)) {
                for (var key in urls) {
                    if (typeof urls[key] == "string") {
                        url.set(key, urls[key]);
                    }
                    else {
                        throw "Url must be string : " + urls[key];
                    }
                }
            }
            else if (typeof url == "object") {
                for (var keyUrlFor in urls) {
                    url.set(keyUrlFor, urls[keyUrlFor]);
                }
            }
            else {
                throw "Url data unrecognized";
            }
            di.set("url", url);
        };
        /**
         *
         */
        Application.prototype.resolveControllers = function (di, controllers) {
            if (controllers.length == 0) {
                throw "You must load your controllers";
            }
            if (Array.isArray(controllers)) {
                var i = 1;
                for (var key in controllers) {
                    if (typeof controllers[key] != "undefined") {
                        var temp = new controllers[key];
                        if (temp instanceof Northwind.Mvc.Controller) {
                            temp.setDi(di);
                            temp.setGlobals(this.getGlobals());
                            temp.initialize();
                            this.resolvePropertiesController(temp, di);
                        }
                        else {
                            throw "Controller #" + i + " must be extend from View.Controller class";
                        }
                        i++;
                    }
                    else {
                        throw "Config => Controller => 'name' must be initialized with View.Controller class";
                    }
                }
            }
            else {
                throw "Config => controllers must be array";
            }
        };
        /**
         *
         */
        Application.prototype.resolvePropertiesController = function (controller, di) {
            for (var key in controller) {
                switch (typeof controller[key]) {
                    case "function":
                        if (!Northwind.Helper.ArrayHelper.inArray(this.restricted, key)) {
                            this.domManager.setDi(controller.getDi());
                            var component = this.domManager.getById(key);
                            component.setDi(controller.getDi());
                            if (component) {
                                controller[key](component);
                            }
                        }
                        break;
                }
            }
        };
        /**
         *
         */
        Application.prototype.resolveServices = function (di, service) {
            new service().initialize(di);
        };
        /**
         *
         */
        Application.prototype.catch = function (fn) {
            this.catchErrors = fn;
            return this;
        };
        /**
         *
         */
        Application.prototype.start = function () {
            try {
                var di = new Northwind.Service.Container;
                this.resolveConfig(di);
            }
            catch (e) {
                this.catchErrors(e);
            }
        };
        return Application;
    }());
    Northwind.Application = Application;
})(Northwind || (Northwind = {}));
var Northwind;
(function (Northwind) {
    var Persistence;
    (function (Persistence) {
        var ComparisonOperators = (function () {
            function ComparisonOperators() {
            }
            return ComparisonOperators;
        }());
        ComparisonOperators.AND = "&&";
        ComparisonOperators.OR = "||";
        ComparisonOperators.EQUAL = "==";
        ComparisonOperators.DIFFERENT = "!=";
        Persistence.ComparisonOperators = ComparisonOperators;
    })(Persistence = Northwind.Persistence || (Northwind.Persistence = {}));
})(Northwind || (Northwind = {}));
var Northwind;
(function (Northwind) {
    var Persistence;
    (function (Persistence) {
        var DatamapperOperators = (function () {
            function DatamapperOperators() {
            }
            return DatamapperOperators;
        }());
        DatamapperOperators.OR = "$or";
        DatamapperOperators.AND = "$and";
        DatamapperOperators.SORT = "$sort";
        DatamapperOperators.IS_NOT = "$isNot";
        DatamapperOperators.LIMIT = "$limit";
        DatamapperOperators.COLUMNS = "$columns";
        DatamapperOperators.CONDITIONAL = "$conditions";
        Persistence.DatamapperOperators = DatamapperOperators;
    })(Persistence = Northwind.Persistence || (Northwind.Persistence = {}));
})(Northwind || (Northwind = {}));
var Northwind;
(function (Northwind) {
    var Persistence;
    (function (Persistence) {
        var DataType = (function () {
            function DataType() {
            }
            /**
             *
             */
            DataType.getValueByType = function (value) {
                var tyof = typeof value;
                switch (tyof) {
                    case DataType.STRING_TYPE:
                        value = "\"" + value + "\"";
                        break;
                }
                return value;
            };
            return DataType;
        }());
        DataType.BOOLEAN = 1;
        DataType.INTEGER = 2;
        DataType.STRING = 3;
        DataType.OBJECT = 4;
        DataType.ARRAY = 5;
        DataType.CLASS = 6;
        DataType.BOOLEAN_TYPE = "boolean";
        DataType.INTEGER_TYPE = "number";
        DataType.STRING_TYPE = "string";
        DataType.OBJECT_TYPE = "object";
        Persistence.DataType = DataType;
    })(Persistence = Northwind.Persistence || (Northwind.Persistence = {}));
})(Northwind || (Northwind = {}));
/// <reference path="../Mvc/Model/RawModel.ts" />
/// <reference path="../Mvc/Model/Deny.ts" />
var Northwind;
/// <reference path="../Mvc/Model/RawModel.ts" />
/// <reference path="../Mvc/Model/Deny.ts" />
(function (Northwind) {
    var Reflection;
    (function (Reflection_1) {
        var Reflection = (function () {
            function Reflection() {
                this.methods = new Array();
                this.attributes = new Array();
                this.deny = {};
                this.deny = {
                    "insertUrl": true,
                    "deleteUrl": true,
                    "updateUrl": true,
                    "findUrl": true
                };
            }
            Reflection.prototype.getName = function (obj) {
                var funcNameRegex = /function (.{1,})\(/;
                var results = (funcNameRegex).exec(obj["constructor"].toString());
                return (results && results.length > 1) ? results[1] : "";
            };
            Reflection.prototype.read = function (obj) {
                if (typeof obj !== 'object') {
                    console.log('Not an object');
                    return;
                }
                var output = '';
                for (var i in obj) {
                    var propName = i;
                    var propValue = obj[i];
                    var type = (typeof propValue);
                    switch (type) {
                        case 'function':
                            output += ' [method] ' + propName + '\n\n';
                            this.methods.push();
                            break;
                        case 'object':
                            output += '\t[object] ' + propName + ' ' + this.read(propValue) + '\n\n';
                            break;
                        default:
                            output += ' [property] ' + propName + ' ' + propValue + '\n\n';
                            this.attributes.push({
                                propName: propValue
                            });
                            break;
                    }
                }
                return output;
            };
            Reflection.prototype.getAtttributeAsObjects = function (obj) {
                if (typeof obj !== 'object') {
                    console.log('Not an object');
                    return;
                }
                var output = '';
                var dataAttributes = {};
                for (var i in obj) {
                    var propName = i;
                    var propValue = obj[i];
                    var type = (typeof propValue);
                    switch (type) {
                        case 'function':
                            break;
                        case 'object':
                            if (propValue instanceof Northwind.Mvc.RawModel) {
                                dataAttributes[propName] = this.getAtttributeAsObjects(propValue);
                            }
                            else {
                                if (propValue != null) {
                                    if (Object.keys(propValue).length > 0) {
                                        if (this.checkDataObject(propName)) {
                                            dataAttributes[propName] = propValue;
                                        }
                                    }
                                }
                            }
                            break;
                        default:
                            var deny = Northwind.Mvc.Deny.getDeny();
                            if (deny.indexOf(propName) == -1) {
                                dataAttributes[propName] = propValue;
                            }
                            break;
                    }
                }
                return dataAttributes;
            };
            Reflection.prototype.checkDataObject = function (key) {
                if (this.deny[key] != true) {
                    return true;
                }
                else {
                    return false;
                }
            };
            /**
             *
             */
            Reflection.prototype.getMethods = function () {
                return this.methods;
            };
            /**
             *
             */
            Reflection.prototype.getAttributes = function () {
                return this.attributes;
            };
            return Reflection;
        }());
        Reflection_1.Reflection = Reflection;
    })(Reflection = Northwind.Reflection || (Northwind.Reflection = {}));
})(Northwind || (Northwind = {}));
var Northwind;
(function (Northwind) {
    var Persistence;
    (function (Persistence) {
        var UnitOfWork = (function () {
            function UnitOfWork() {
            }
            return UnitOfWork;
        }());
        UnitOfWork.NEW = 1;
        UnitOfWork.CREATED = 2;
        UnitOfWork.DELETED = 3;
        Persistence.UnitOfWork = UnitOfWork;
    })(Persistence = Northwind.Persistence || (Northwind.Persistence = {}));
})(Northwind || (Northwind = {}));
/// <reference path="../Reflection/Reflection.ts" />
/// <reference path="../Mvc/Model/RawModel.ts" />
/// <reference path="./UnitOfWork.ts" />
var Northwind;
/// <reference path="../Reflection/Reflection.ts" />
/// <reference path="../Mvc/Model/RawModel.ts" />
/// <reference path="./UnitOfWork.ts" />
(function (Northwind) {
    var Persistence;
    (function (Persistence) {
        var Hydrator = (function () {
            function Hydrator() {
            }
            Hydrator.prototype.hydrate = function (model, data) {
                var newModel = new model();
                newModel.state = Northwind.Persistence.UnitOfWork.CREATED;
                for (var key in data) {
                    switch (typeof newModel[key]) {
                        case "function":
                            var auxPropNested = new newModel[key];
                            if (auxPropNested instanceof Northwind.Mvc.RawModel) {
                                newModel[key] = this.hydrate(newModel[key], data[key]);
                            }
                            else {
                                newModel[key] = data[key];
                            }
                            break;
                        default:
                            var dataArray = new Array();
                            if (Array.isArray(newModel[key])) {
                                switch (typeof newModel[key][0]) {
                                    case "function":
                                        if (typeof data[key].length != "undefined") {
                                            if (data[key].length > 0) {
                                                var auxSubModel = new newModel[key][0];
                                                var arrayData = new Array();
                                                if (auxSubModel instanceof Northwind.Mvc.RawModel) {
                                                    for (var subModelKey in data[key]) {
                                                        arrayData.push(this.hydrate(newModel[key][0], data[key][subModelKey]));
                                                    }
                                                    newModel[key] = arrayData;
                                                }
                                            }
                                        }
                                        break;
                                    default:
                                        newModel[key] = data[key];
                                        break;
                                }
                            }
                            else {
                                newModel[key] = data[key];
                            }
                            break;
                    }
                    if (Array.isArray(newModel[key])) {
                        if (typeof newModel[key][0] == "function") {
                            newModel[key] = new Array();
                        }
                    }
                }
                return newModel;
            };
            return Hydrator;
        }());
        Persistence.Hydrator = Hydrator;
    })(Persistence = Northwind.Persistence || (Northwind.Persistence = {}));
})(Northwind || (Northwind = {}));
/// <reference path="./DatamapperOperators.ts" />
/// <reference path="./ComparisonOperators.ts" />
var Northwind;
/// <reference path="./DatamapperOperators.ts" />
/// <reference path="./ComparisonOperators.ts" />
(function (Northwind) {
    var Persistence;
    (function (Persistence) {
        var Filter = (function () {
            function Filter() {
                this.first = "";
                this.final = [];
                this.init = false;
                this.sort = new Array();
                this.limit = null;
                this.columns = {};
            }
            Filter.prototype.buildCondition = function (params) {
                var index = 1;
                var length = Object.keys(params).length;
                for (var key in params) {
                    switch (key) {
                        case Persistence.DatamapperOperators.CONDITIONAL:
                            var conditional = params[key];
                            for (var keyConditional in conditional) {
                                switch (keyConditional) {
                                    case Persistence.DatamapperOperators.AND:
                                        var iAnd = 1;
                                        var andContent = conditional[keyConditional];
                                        var andLength = Object.keys(andContent).length;
                                        for (var keyAnd in andContent) {
                                            this.getExpression(keyAnd, andContent[keyAnd], Persistence.ComparisonOperators.AND, iAnd, andLength);
                                            iAnd++;
                                        }
                                        break;
                                    case Persistence.DatamapperOperators.OR:
                                        var iOr = 1;
                                        var orContent = conditional[keyConditional];
                                        var orLength = Object.keys(orContent).length;
                                        for (var keyOr in orContent) {
                                            this.getExpression(keyOr, orContent[keyOr], Persistence.ComparisonOperators.OR, iOr, orLength);
                                            iOr++;
                                        }
                                        break;
                                    case Persistence.DatamapperOperators.IS_NOT:
                                        var iIsNot = 1;
                                        var isNotContent = conditional[keyConditional];
                                        var isNotLength = Object.keys(isNotContent).length;
                                        for (var keyIsNot in isNotContent) {
                                            this.getExpression(keyIsNot, isNotContent[keyIsNot], Persistence.ComparisonOperators.AND, iIsNot, isNotLength, Persistence.ComparisonOperators.DIFFERENT);
                                            iIsNot++;
                                        }
                                        break;
                                    default:
                                        break;
                                }
                            }
                            break;
                        case Persistence.DatamapperOperators.SORT:
                            this.getSort(params[key]);
                            break;
                        case Persistence.DatamapperOperators.LIMIT:
                            this.getLimit(params[key]);
                            break;
                        case Persistence.DatamapperOperators.COLUMNS:
                            this.columns = params[key];
                            if (typeof params[key] != "object") {
                                throw Northwind.Errors.Message.getCodeMessage(Northwind.Errors.MessageCode.NOT_VALID_OBJECT, "$columns option");
                            }
                            break;
                        default:
                            this.getExpression(key, params[key], Persistence.ComparisonOperators.AND, index, length);
                            index++;
                            break;
                    }
                }
            };
            Filter.prototype.getSort = function (sortContent) {
                switch (typeof sortContent) {
                    case Northwind.Persistence.DataType.STRING_TYPE:
                        this.sort.push("data = Sort.sortByField('" + sortContent + "');");
                        break;
                    case Northwind.Persistence.DataType.OBJECT_TYPE:
                        if (Array.isArray(sortContent)) {
                            for (var sortKey in sortContent) {
                                var sortValue = sortContent[sortKey];
                                this.sort.push("data = Sort.sortByField(data, '" + sortValue + "')");
                            }
                        }
                        else {
                            for (var sortKey in sortContent) {
                                var sortType = sortContent[sortKey];
                                this.sort.push("data = Sort.sortByField(data, '" + sortKey + "');");
                                if (sortContent[sortKey] == Persistence.Sort.DESC) {
                                    this.sort.push("data = data.reverse();");
                                }
                            }
                        }
                        break;
                }
            };
            Filter.prototype.getLimit = function (limit) {
                if (typeof limit == "string") {
                    limit = parseInt(limit);
                }
                this.limit = "data = data.slice(0, " + limit + ") ";
            };
            Filter.prototype.getExpression = function (key, content, operator, index, length, comparison) {
                if (comparison === void 0) { comparison = "=="; }
                var condition = "";
                var finalOperator = "";
                if (this.init) {
                    finalOperator = operator;
                }
                if (Array.isArray(content)) {
                    var newVal = content;
                    for (var j = 0; j < newVal.length; j++) {
                        var operatorStr = "";
                        if (j < (newVal.length - 1)) {
                            operatorStr = operator;
                        }
                        var valueByType = Northwind.Persistence.DataType.getValueByType(newVal[j]);
                        condition += "row[\"" + key + "\"] " + comparison + " " + newVal[j] + " " + operatorStr + " ";
                    }
                }
                else {
                    var operatorStr = "";
                    var valueByType = Persistence.DataType.getValueByType(content);
                    condition += "row[\"" + key + "\"] " + comparison + " " + valueByType + " " + operatorStr + " ";
                }
                this.first += finalOperator + " ( " + condition + " ) ";
                this.init = true;
            };
            /**
             *
             */
            Filter.prototype.getColumns = function (row) {
                var newRow = {};
                if (Object.keys(this.columns).length > 0) {
                    for (var key in this.columns) {
                        newRow[this.columns[key]] = row[this.columns[key]];
                    }
                }
                else {
                    newRow = row;
                }
                return newRow;
            };
            /**
             *
             */
            Filter.prototype.getMultipleRowValues = function (rsp, conds) {
                if (conds === void 0) { conds = true; }
                var response = JSON.parse(rsp);
                if (typeof response == "string") {
                    response = JSON.parse(response);
                }
                if (this.first == "") {
                    this.first = "true";
                }
                var data = new Array();
                if (Array.isArray(response)) {
                    var conditions = this.first;
                    var evalValue = "if (" + conditions + ") { data.push(this.getColumns(row)); }";
                    for (var key in response) {
                        var row = response[key];
                        if (conds) {
                            eval(evalValue);
                        }
                        else {
                            data.push(this.getColumns(row));
                        }
                    }
                    if (this.sort.length > 0) {
                        var i = 0;
                        for (var key in this.sort) {
                            eval(this.sort[key]);
                            i++;
                        }
                    }
                    if (this.limit != null) {
                        eval(this.limit);
                    }
                }
                else {
                    if (typeof response == "object") {
                        data.push(this.getColumns(response));
                    }
                    else {
                        console.log("Response is not an object");
                    }
                }
                return data;
            };
            Filter.prototype.getOneRowValue = function (data) {
            };
            return Filter;
        }());
        Persistence.Filter = Filter;
    })(Persistence = Northwind.Persistence || (Northwind.Persistence = {}));
})(Northwind || (Northwind = {}));
/// <reference path="../Reflection/Reflection.ts" />
/// <reference path="../Service/Container.ts" />
/// <reference path="../Mvc/Model/StaticModel.ts" />
/// <reference path="../Mvc/Model/AjaxModel.ts" />
/// <reference path="../Network/Ajax.ts" />
/// <reference path="./UnitOfWork.ts" />
/// <reference path="./Hydrator.ts" />
/// <reference path="./Filter.ts" />
var Northwind;
/// <reference path="../Reflection/Reflection.ts" />
/// <reference path="../Service/Container.ts" />
/// <reference path="../Mvc/Model/StaticModel.ts" />
/// <reference path="../Mvc/Model/AjaxModel.ts" />
/// <reference path="../Network/Ajax.ts" />
/// <reference path="./UnitOfWork.ts" />
/// <reference path="./Hydrator.ts" />
/// <reference path="./Filter.ts" />
(function (Northwind) {
    var Persistence;
    (function (Persistence) {
        var EntityManager = (function () {
            /**
             * Entity manager is a class
             */
            function EntityManager() {
                this.container = null;
                this.ajax = null;
                this.hydrator = null;
                this.uow = new Northwind.Persistence.UnitOfWork;
            }
            /**
             *
             */
            EntityManager.prototype.getContainer = function () {
                if (this.container == null) {
                    this.container = this.getDi().get("container");
                }
                return this.container;
            };
            /**
             *
             * @param model
             * @param params
             */
            EntityManager.prototype.find = function (model, params) {
                if (params === void 0) { params = {}; }
                this.setWhenIsModel(model, params, "find");
                return this;
            };
            /**
             *
             * @param model
             * @param params
             */
            EntityManager.prototype.findOne = function (model, params) {
                if (params === void 0) { params = {}; }
                this.setWhenIsModel(model, params, "findOne");
                return this;
            };
            /**
             *
             * @param model
             * @param params
             */
            EntityManager.prototype.count = function (model, params) {
                if (params === void 0) { params = {}; }
                this.setWhenIsModel(model, params, "count");
                return this;
            };
            /**
             *
             */
            EntityManager.prototype.setWhenIsModel = function (model, params, type) {
                var objModel = new model();
                this.getContainer()
                    .set("transactionModel", model);
                this.getContainer()
                    .set("transactionObjModel", objModel);
                this.getContainer()
                    .set("transactionParams", params);
                this.getContainer()
                    .set("transactionType", type);
                if (objModel instanceof Northwind.Mvc.RawModel) {
                    var callAjax = false;
                    if (objModel instanceof Northwind.Mvc.AjaxModelPersistent) {
                        if (objModel.getAjaxInit() === null) {
                            this.callAjax(objModel, type, params);
                        }
                    }
                    else if (objModel instanceof Northwind.Mvc.AjaxModel) {
                        this.callAjax(objModel, type, params);
                    }
                }
                else {
                    throw "Model must be instance of RawModel";
                }
            };
            EntityManager.prototype.callAjax = function (objModel, type, params) {
                this.ajax = new Northwind.Network.Ajax();
                this.ajax.setDi(this.getDi());
                var url = null;
                switch (type) {
                    case "find":
                        url = objModel.getFindUrl();
                        break;
                    case "findOne":
                        url = objModel.getFindOneUrl();
                        break;
                    case "insert":
                        url = objModel.getInsertUrl();
                        break;
                    case "update":
                        url = objModel.getUpdateUrl();
                        break;
                    case "delete":
                        url = objModel.getDeleteUrl();
                        break;
                    case "count":
                        url = objModel.getCountUrl();
                        break;
                }
                if (url == null) {
                    url = this.getDi().get("url").get("baseUrl") +
                        this.lcfirst(objModel.getClassName()) +
                        this.ucfirst(type);
                }
                this.ajax.setUrl(url);
                this.ajax.setParams(params);
                this.ajax.setMethod(objModel.getMethod());
            };
            /**
             *
             */
            EntityManager.prototype.ucfirst = function (str) {
                return str.charAt(0).toUpperCase() + str.slice(1);
            };
            /**
             *
             */
            EntityManager.prototype.lcfirst = function (str) {
                return str.charAt(0).toLowerCase() + str.slice(1);
            };
            /**
             *
             */
            EntityManager.prototype.save = function (model) {
                this.getContainer()
                    .set("transactionModel", model);
                this.getContainer()
                    .set("transactionObjectModel", model);
                this.getContainer()
                    .set("transactionType", "save");
                if (model instanceof Northwind.Mvc.AjaxModel) {
                    this.ajax = new Northwind.Network.Ajax();
                    this.ajax.setDi(this.getDi());
                    var modelName = model.getClassName();
                    switch (model.state) {
                        case Northwind.Persistence.UnitOfWork.NEW:
                            var url = model.getInsertUrl();
                            if (url == null) {
                                url = this.getDi().get("url").get("baseUrl") +
                                    modelName +
                                    "Insert";
                            }
                            this.ajax.setUrl(url);
                            break;
                        case Northwind.Persistence.UnitOfWork.CREATED:
                            var url = model.getUpdateUrl();
                            if (url == null) {
                                url = this.getDi().get("url").get("baseUrl") +
                                    this.lcfirst(modelName) +
                                    "Update";
                            }
                            this.ajax.setUrl(url);
                            break;
                    }
                    var reflection = new Northwind.Reflection.Reflection();
                    var attrsAsString = JSON.stringify(reflection.getAtttributeAsObjects(model));
                    var objParams = {};
                    objParams[modelName] = attrsAsString;
                    this.ajax.setParams(objParams);
                    this.ajax.setMethod(model.getMethod());
                }
                else if (model instanceof Northwind.Mvc.StaticModel) {
                    switch (model.state) {
                        case Northwind.Persistence.UnitOfWork.NEW:
                            var tempData = model.getData();
                            break;
                        case Northwind.Persistence.UnitOfWork.CREATED:
                            break;
                    }
                }
                return this;
            };
            /**
             *
             */
            EntityManager.prototype.delete = function (model) {
                this.getContainer()
                    .set("transactionModel", model);
                this.getContainer()
                    .set("transactionObjectModel", model);
                this.getContainer()
                    .set("transactionType", "delete");
                if (model instanceof Northwind.Mvc.AjaxModel) {
                    this.ajax = new Northwind.Network.Ajax();
                    this.ajax.setDi(this.getDi());
                    var modelName = model.getClassName();
                    var url = model.getDeleteUrl();
                    if (url == null) {
                        url = this.getDi().get("url").get("baseUrl") +
                            this.lcfirst(modelName) +
                            "Delete";
                    }
                    this.ajax.setUrl(url);
                    var reflection = new Northwind.Reflection.Reflection();
                    var attrsAsString = JSON.stringify(reflection.getAtttributeAsObjects(model));
                    var objParams = {};
                    objParams[modelName] = attrsAsString;
                    this.ajax.setParams(objParams);
                    this.ajax.setMethod(model.getMethod());
                }
                else if (model instanceof Northwind.Mvc.StaticModel) {
                    switch (model.state) {
                        case Persistence.UnitOfWork.NEW:
                            var tempData = model.getData();
                            break;
                        case Persistence.UnitOfWork.CREATED:
                            break;
                    }
                }
                return this;
            };
            /**
             *
             */
            EntityManager.prototype.response = function (fn) {
                var model = this.getContainer()
                    .get("transactionModel");
                var objModel = this.getContainer()
                    .get("transactionObjModel");
                var type = this.getContainer()
                    .get("transactionType");
                if (type == "save" || type == "delete") {
                    this.ajax.response(function (response) {
                        return fn(this.setResponse(response, objModel, type, model));
                    }.bind(this));
                    this.ajax.send();
                }
                else {
                    if (type == "find" || type == "findOne" || type == "count") {
                        var params = this.getContainer()
                            .get("transactionParams");
                    }
                    this.checkModel(fn, type, model, objModel, params);
                }
                return this;
            };
            /**
             *
             */
            EntityManager.prototype.checkModel = function (fn, type, model, objModel, params) {
                if (objModel instanceof Northwind.Mvc.AjaxModelPersistent) {
                    var data = objModel.getData();
                    if (objModel.getAjaxInit() == null) {
                        this.setResponseAjax(fn, type, model, objModel, params);
                    }
                    else {
                        this.setResponseStatic(fn, objModel, type, model, params);
                    }
                }
                else {
                    if (objModel instanceof Northwind.Mvc.AjaxModel) {
                        this.setResponseAjax(fn, type, model, objModel, params);
                    }
                    else {
                        if (objModel instanceof Northwind.Mvc.StaticModel) {
                            this.setResponseStatic(fn, objModel, type, model, params);
                        }
                    }
                }
            };
            /**
             *
             */
            EntityManager.prototype.setResponseAjax = function (fn, type, model, objModel, params) {
                this.ajax.response(function (response) {
                    return fn(this.setResponse(response, objModel, type, model, params));
                }.bind(this));
                this.ajax.send();
            };
            /**
             *
             */
            EntityManager.prototype.setResponseStatic = function (fn, objModel, type, model, params) {
                fn(this.setResponse(objModel.getData(), objModel, type, model, params));
            };
            /**
             *
             */
            EntityManager.prototype.setResponse = function (data, objModel, type, model, params) {
                var resultSet = new Array();
                switch (type) {
                    case "count":
                    case "findOne":
                        resultSet = this.getResultSet(data, params, model, objModel);
                        if (resultSet != false) {
                            resultSet = resultSet[0];
                        }
                        break;
                    case "find":
                        resultSet = this.getResultSet(data, params, model, objModel);
                        break;
                    case "delete":
                    case "save":
                        resultSet = data;
                        break;
                }
                return resultSet;
            };
            /**
             *
             */
            EntityManager.prototype.getResultSet = function (response, params, model, objModel) {
                var resultSet = new Array();
                var hydrator = new Persistence.Hydrator;
                var filters = new Persistence.Filter;
                filters.buildCondition(params);
                var data = new Array();
                if (objModel instanceof Northwind.Mvc.AjaxModelPersistent) {
                    if (objModel.getAjaxInit() == null) {
                        objModel.setAjaxInit(true);
                        objModel.setData(response);
                    }
                    data = filters.getMultipleRowValues(response, false);
                }
                else if (objModel instanceof Northwind.Mvc.AjaxModel) {
                    data = filters.getMultipleRowValues(response, false);
                }
                else {
                    data = filters.getMultipleRowValues(response);
                }
                var i = 0;
                for (var key in data) {
                    var newModel = hydrator.hydrate(model, data[key]);
                    if (newModel instanceof Northwind.Mvc.StaticModel) {
                        newModel.setIndex(i);
                    }
                    resultSet.push(newModel);
                    i++;
                }
                if (resultSet.length == 0) {
                    resultSet = false;
                }
                return resultSet;
            };
            /**
             *
             */
            EntityManager.prototype.flush = function () {
                return false;
            };
            /**
             *
             */
            EntityManager.prototype.reset = function () {
                return false;
            };
            /**
             *
             */
            EntityManager.prototype.group = function () {
                return {};
            };
            /**
             *
             */
            EntityManager.prototype.distinct = function () {
                return {};
            };
            /**
             *
             */
            EntityManager.prototype.purge = function () {
                return false;
            };
            /**
             *
             */
            EntityManager.prototype.forget = function () {
                return false;
            };
            EntityManager.prototype.checksum = function (obj) {
                var keys = Object.keys(obj).sort();
                var output = [], prop;
                for (var i = 0; i < keys.length; i++) {
                    prop = keys[i];
                    output.push(prop);
                    output.push(obj[prop]);
                }
                return JSON.stringify(output);
            };
            EntityManager.prototype.setDi = function (di) {
                this.di = di;
            };
            EntityManager.prototype.getDi = function () {
                return this.di;
            };
            return EntityManager;
        }());
        Persistence.EntityManager = EntityManager;
    })(Persistence = Northwind.Persistence || (Northwind.Persistence = {}));
})(Northwind || (Northwind = {}));
var Northwind;
(function (Northwind) {
    var Persistence;
    (function (Persistence) {
        var Sort = (function () {
            function Sort() {
            }
            Sort.sortByField = function (data, field) {
                var arr = [];
                for (var prop in data) {
                    if (data.hasOwnProperty(prop)) {
                        var obj = {};
                        obj[prop] = data[prop];
                        obj.tempSortName = data[prop][field].toLowerCase();
                        arr.push(obj);
                    }
                }
                arr.sort(function (a, b) {
                    var at = a.tempSortName, bt = b.tempSortName;
                    return at > bt ? 1 : (at < bt ? -1 : 0);
                });
                var result = [];
                for (var i = 0, l = arr.length; i < l; i++) {
                    var obj = arr[i];
                    delete obj.tempSortName;
                    for (var prop in obj) {
                        if (obj.hasOwnProperty(prop)) {
                            var id = prop;
                        }
                    }
                    var item = obj[id];
                    result.push(item);
                }
                return result;
            };
            return Sort;
        }());
        Sort.ASC = 1;
        Sort.DESC = -1;
        Persistence.Sort = Sort;
    })(Persistence = Northwind.Persistence || (Northwind.Persistence = {}));
})(Northwind || (Northwind = {}));
var Northwind;
(function (Northwind) {
    var Reflection;
    (function (Reflection) {
        var Checksum = (function () {
            /**
             *
             */
            function Checksum(obj) {
                /**
                 *
                 */
                this.toObj = {};
                this.toObj = obj;
            }
            Checksum.prototype.utf8ToBase64 = function (str) {
                return window.btoa(encodeURIComponent(str));
            };
            /**
             *
             */
            Checksum.prototype.getChecksum = function () {
                return this.toObj;
            };
            return Checksum;
        }());
        Reflection.Checksum = Checksum;
    })(Reflection = Northwind.Reflection || (Northwind.Reflection = {}));
})(Northwind || (Northwind = {}));
/// <reference path="../Service/Container.ts" />
var Northwind;
/// <reference path="../Service/Container.ts" />
(function (Northwind) {
    var Url;
    (function (Url_1) {
        var Url = (function (_super) {
            __extends(Url, _super);
            function Url() {
                return _super.apply(this, arguments) || this;
            }
            Url.prototype.getQuery = function (url) {
                if (url === void 0) { url = false; }
                if (url == false) {
                    url = document.URL;
                }
                var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
                var obj = {};
                if (queryString) {
                    queryString = queryString.split('#')[0];
                    var arr = queryString.split('&');
                    for (var i = 0; i < arr.length; i++) {
                        var a = arr[i].split('=');
                        var paramNum = undefined;
                        var paramName = a[0].replace(/\[\d*\]/, function (v) {
                            paramNum = v.slice(1, -1);
                            return '';
                        });
                        var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];
                        if (obj[paramName]) {
                            if (typeof obj[paramName] === 'string') {
                                obj[paramName] = [obj[paramName]];
                            }
                            if (typeof paramNum === 'undefined') {
                                obj[paramName].push(paramValue);
                            }
                            else {
                                obj[paramName][paramNum] = paramValue;
                            }
                        }
                        else {
                            obj[paramName] = paramValue;
                        }
                    }
                }
                return obj;
            };
            return Url;
        }(Northwind.Service.Container));
        Url_1.Url = Url;
    })(Url = Northwind.Url || (Northwind.Url = {}));
})(Northwind || (Northwind = {}));
