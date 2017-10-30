declare namespace Northwind.Environment {
    class Config {
        private config;
        /**
         * Set general config and environment
         *
         * @param Object config
         * @param Number env = Scope.Local
         */
        setConfig(config: Object, env?: number): void;
        /**
         * Get config was assigned
         *
         * @param Number env = Garlic.Environment.Scope.Local
         * @return Object
         */
        getConfig(env?: number): Object;
    }
}
declare namespace Northwind.Environment {
    class Scope {
        static LOCAL: number;
        static DEV: number;
        static TEST: number;
        static QA: number;
        static STAGING: number;
        static PRODUCTION: number;
    }
}
declare namespace Northwind.Errors {
    class Message {
        static NOT_VALID_ARRAY: string;
        static NOT_VALID_ARRAY_OBJECT: string;
        static NOT_VALID_OBJECT: string;
        static getCodeMessage(code: number, custom: string): string;
    }
}
declare namespace Northwind.Errors {
    class MessageCode {
        static NOT_VALID_ARRAY: number;
        static NOT_VALID_ARRAY_OBJECT: number;
        static NOT_VALID_OBJECT: number;
    }
}
declare namespace Northwind.Events {
    interface ManagerInterface {
        /**
         * Attach a listener to the events manager
         *
         * @param string eventType
         * @param object|callable handler
         */
        attach: {
            (component: Northwind.Html.Component, event: string, fn: Function);
            (component: Northwind.Html.Component, event: string, other: number, fn: Function);
        };
        /**
         * Detach the listener from the events manager
         *
         * @param string eventType
         * @param object handler
         */
        detach(event: any, handler: any): any;
        /**
         *
         */
        detachComponent(component: Northwind.Html.Component): any;
        /**
         * Removes all events from the EventsManager
         */
        detachAll(): any;
        /**
         * Fires an event in the events manager causing the active listeners
         */
        trigger(controller: any, event: any, callback: any): any;
    }
}
declare namespace Northwind {
    class Events {
        private di;
        private events;
        private params;
        private others;
        private element;
        private static AFTER;
        private static BEFORE;
        private static ONCREATE;
        private static ONDELETE;
        private static ONCHANGE;
        private nativeEvents;
        contructor(): void;
        /**
         *
         */
        attach(component: Northwind.Html.Component, event: string, fn: any): this;
        /**
         *
         */
        add(otherEvent: number): this;
        /**
         *
         */
        detachComponent(component: Northwind.Html.Component): this;
        /**
         *
         */
        detach(component: any, event: any, params?: boolean): this;
        /**
         *
         */
        trigger(controller: any, event: any, callback: any, params?: {}): this;
        /**
         *
         */
        detachAll(): this;
        /**
         *
         */
        tag(component: any): this;
        /**
         *
         * @param  {Function} fn [description]
         * @return {[type]}      [description]
         */
        click(fn: any): this;
        /**
         *
         */
        doubleClick(fn: any): this;
        /**
         *
         * @return {[type]} [description]
         */
        change(fn: any): this;
        /**
         * [change description]
         * @return {[type]} [description]
         */
        keypress(fn: any): this;
        /**
         * [change description]
         * @return {[type]} [description]
         */
        keydown(fn: any): this;
        /**
         * [change description]
         * @return {[type]} [description]
         */
        keyup(fn: any): this;
        paste(fn: any): this;
        /**
         * [change description]
         * @return {[type]} [description]
         */
        blur(fn: any): this;
        /**
         * [change description]
         * @return {[type]} [description]
         */
        focus(fn: any): this;
        setDi(di: any): this;
        getDi(): any;
    }
}
declare namespace Northwind.Events {
    interface EventsAwareInterface {
        /**
         * Sets the events manager
         */
        setEventsManager(eventsManager: any): any;
        /**
         * Returns the internal event manager
         */
        getEventsManager(): Northwind.Events.ManagerInterface;
    }
}
declare namespace Northwind.Helper {
    class ArrayHelper {
        constructor();
        static inArray(container: any[], element: any): boolean;
    }
}
declare namespace Northwind.Helper {
    class MathHelper {
        constructor();
        static getRandom(init: any, last: any): number;
        static getUUID(): string;
        static getS4(): string;
    }
}
declare namespace Northwind.Helper {
    class StringHelper {
        constructor();
        /**
         * [sanitizeString description]
         * @param  {string} str [description]
         * @return {[type]}     [description]
         */
        static sanitizeString(str: string): string;
        /**
         * [capitalize description]
         * @param  {[type]} str [description]
         * @return {[type]}     [description]
         */
        static capitalize(str: any): any;
    }
}
declare namespace Northwind.Helper {
    class Uuid {
        constructor();
        static get(): string;
    }
}
declare namespace Northwind.Helper {
    class Validator {
        static validStructArray(data: any[]): boolean;
    }
}
declare namespace Northwind.Loader {
    interface DiConstructorInjection {
        initialize(di: Northwind.Service.Container): any;
    }
}
declare namespace Northwind.Mvc {
    class Application {
    }
}
declare namespace Northwind.Service {
    class Container {
        private service;
        set(serviceName: any, content: any): void;
        get(serviceName: any): any;
        hasKey(serviceName: any): boolean;
        setPersistent(serviceName: any, content: any): void;
        getPersistent(serviceName: any): any;
    }
}
declare namespace Northwind.Network {
    class Ajax implements Service.InjectionAwareInterface {
        di: Service.Container;
        private httpRequest;
        private context;
        private method;
        private parameters;
        private error;
        private url;
        private container;
        responseFn: Function;
        bfSendFn: Function;
        /**
         *
         */
        constructor();
        /**
         *
         */
        setContext(ctx: Object): void;
        /**
         *
         */
        getContext(): Object;
        /**
         *
         */
        setUrl(url: any): this;
        /**
         *
         */
        getUrl(): string;
        /**
         *
         */
        set(key: any, value: any): void;
        /**
         *
         */
        get(key: any): any;
        /**
         *
         */
        setParams(params: any, value?: any): this;
        /**
         *
         */
        POST(): this;
        /**
         *
         */
        PUT(): this;
        /**
         *
         */
        DELETE(): this;
        /**
         *
         */
        GET(): this;
        /**
         *
         */
        setMethod(method: string): this;
        addContext(): void;
        /**
         *
         */
        response(responseFunction: Function): this;
        /**
         *
         */
        beforeSend(fn: Function): void;
        /**
         *
         */
        private setHeaders();
        /**
         *
         */
        getError(errorFunction: any): void;
        clear(): void;
        /**
         *
         */
        send(fn?: any): void;
        /**
         *
         */
        setDi(di: Service.Container): void;
        /**
         *
         */
        getDi(): Service.Container;
    }
}
declare namespace Northwind.Service {
    class InjectorComponents {
        tag: any;
        ajax: any;
        dom: any;
        di: any;
        event: any;
        container: any;
        em: any;
        setDi(di: Service.Container): void;
        getDi(): any;
        setDom(dom: any): void;
        getDom(): any;
        setTag(tag: any): void;
        getTag(): any;
        setEvent(event: any): void;
        getEvent(): any;
        setEm(em: any): void;
        getEm(): any;
        setContainer(container: any): void;
        getContainer(): any;
        setAjax(ajax: any): void;
        getAjax(): any;
    }
}
declare namespace Northwind.Html {
    /**
     *
     * @type
     */
    class Component extends Service.InjectorComponents {
        static NO_CONTEXT: number;
        /**
         * Node javascript element
         */
        element: any;
        /**
         * Controller
         */
        context: any;
        /**
         *
         */
        id: any;
        /**
         *
         */
        args: any;
        /**
         *
         */
        private deny;
        /**
         *
         * @type
         */
        private url;
        /**
         * @type
         */
        private className;
        /**
         *
         * @param
         * @return
         */
        constructor(name?: any, newClone?: boolean);
        /**
         *
         */
        initialize(): void;
        /**
         *
         */
        getArguments(args: any): false | any[];
        /**
         *
         */
        setArgs(args: any): this;
        /**
         *
         */
        getArgs(): any;
        /**
         *
         */
        setElement(element: any): this;
        /**
         *
         */
        show(): this;
        /**
         *
         */
        hide(): this;
        /**
         *
         */
        create(tag: string): this;
        /**
         * Create html component like jquery object
         *
         * @param  {string} element [description]
         * @param  {string} name    [description]
         * @return ViewElement
         */
        init(element: string, name: string): HTMLElement;
        /**
         *
         * @return
         */
        getType(): any;
        /**
         *
         * @param  {string} class [description]
         * @return {[type]}       [description]
         */
        class(attrClass: string): this;
        /**
         *
         */
        addClass(attrClass: string): this;
        /**
         * Set inner html throught
         */
        setInnerHtml(html: any): any;
        /**
         *
         */
        getAttribute(attr: any): any;
        /**
         *
         * @return {[type]} [description]
         */
        addChild(element: any): this;
        destroyEvent(event: any): void;
        /**
         *
         */
        removeAttr(attr: any): this;
        /**
         * [get description]
         * @return {[type]} [description]
         */
        getElement(): any;
        /**
         * Append elements
         * @param value append
         * @return this
         */
        append(append: any): this;
        /**
         *
         */
        data(key: any, value?: boolean): this;
        /**
         *
         */
        private checkAppendValue(append);
        /**
         *
         * @param  html [description]
         * @return
         */
        html(html?: any): any;
        /**
         *
         */
        verifyElement(append: any, type?: string): void;
        /**
         *
         */
        private removeChildNodes();
        /**
         *
         */
        private removeChilds(element, childs);
        /**
         *
         * @param attr
         * @return
         */
        attr(attr: any, value?: any): any;
        /**
         * [css description]
         * @param   css [description]
         * @return
         */
        css(css: any, value?: any): any;
        /**
         *
         * @param  {[type]} event [description]
         * @return {[type]}       [description]
         */
        unbind(event: any): this;
        /**
         * [getClassName description]
         * @return {[type]} [description]
         */
        getClassName(): string;
        /**
         * [validateAndSet description]
         * @param  {[type]} config [description]
         * @return {[type]}        [description]
         */
        validateAndSet(config: any): void;
        /**
         * [clone description]
         * @return {[type]} [description]
         */
        clone(newIdentify?: string): Component;
        /**
         *
         * @param  {any = null}        val [description]
         * @return {[type]}   [description]
         */
        val(val?: any): any;
        /**
         * zzzz
         * @param  {any = null}        text [description]
         * @return {[type]}   [description]
         */
        text(text?: any): any;
        /**
         *
         */
        empty(): this;
        /**
         *
         */
        getChilds(): any[];
        getParent(): any;
        /**
         *
         */
        getAsObject(): any[];
        /**
         *
         */
        getAsJson(): string;
        /**
         *
         */
        getRandomString(): string;
        /**
         *
         */
        remove(element?: boolean): void;
    }
}
declare namespace Northwind.Tag {
    /**
     *
     */
    class A extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
        /**
         * [favIcon description]
         * @return {[type]} [description]
         */
        favIcon(favIcon: any): this;
        /**
         * [href description]
         * @param  {[type]} href [description]
         * @return {[type]}      [description]
         */
        href(href: any): this;
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Abbr extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Address extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Area extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Article extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Aside extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Audio extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class B extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Base extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Bdi extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Bdo extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Blockquote extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Body extends Northwind.Html.Component {
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Br extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     *
     */
    class Button extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
        /**
         *
         * @param
         * @return
         */
        type(type: any): this;
        /**
         *
         * @return
         */
        favIcon(favIcon: any): this;
        /**
         *
         * @return
         */
        success(): this;
        /**
         *
         * @return
         */
        notice(): this;
        /**
         *
         * @return
         */
        default(): this;
        /**
         *
         * @return
         */
        primary(): this;
        /**
         * [warning description]
         * @return {[type]} [description]
         */
        warning(): this;
        /**
         * [danger description]
         * @return {[type]} [description]
         */
        danger(): this;
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Canvas extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Caption extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Cite extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Code extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Col extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class ColGroup extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Datalist extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Db extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Del extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Details extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Dfn extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Dialog extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Div extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Dl extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Dt extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Em extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Embed extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Fieldset extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Figcaption extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Figure extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Footer extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Form extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class H1 extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class H2 extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class H3 extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class H4 extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class H5 extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class H6 extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Head extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Header extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class I extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Iframe extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Img extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
        width(width: any): this;
        height(height: any): this;
        src(src: any): this;
    }
}
declare namespace Northwind.Tag {
    /**
     * [Input description]
     * @type {[type]}
     */
    class Input extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
        /**
         *
         */
        getValue(): any;
        /**
         *
         */
        setValue(value: any): this;
        /**
         * [type description]
         * @param  {[type]} type [description]
         * @return {[type]}      [description]
         */
        type(type: any): this;
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Ins extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Kbd extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Keygen extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Label extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Leyend extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Li extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Link extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Main extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Map extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Menu extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Menuitem extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Meta extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Meter extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Nav extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Noscrip extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Obj extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Ol extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Optgroup extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     *
     * @type
     */
    class Option extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
        setValue(val: any): this;
        /**
         *
         */
        getValue(): any;
        /**
         *
         */
        setContent(content: any): this;
        /**
         *
         */
        getContent(): any;
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Output extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class P extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Param extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Pre extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Progress extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Q extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Rp extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Rt extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Ruby extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class S extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Samp extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Script extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Section extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Mvc {
    class RawModel {
        state: number;
        identify: string;
        initialize(): void;
        beforeInsert(): void;
        beforeFind(): void;
        beforeUpdate(): void;
        beforeDelete(): void;
        /**
         * [getClassName description]
         * @return {[type]} [description]
         */
        getClassName(): string;
        /**
         *
         */
        getIdentify(): string;
    }
}
declare namespace Northwind.Tag {
    class Select extends Northwind.Html.Component {
        private choose;
        /**
         *
         */
        constructor();
        /**
         *
         */
        getSelected(): Option;
        /**
         *
         * @param fn
         */
        iterate(fn: any): this;
        /**
         *
         */
        setChoose(choose: any): void;
        /**
         *
         */
        select(value: any): void;
        /**
         *
         * @param  content
         * @return
         */
        build(content: any, fields: any): this;
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Small extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Source extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Span extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Strong extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Style extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Sub extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [Table description]
     * @type {[type]}
     */
    class Table extends Northwind.Html.Component {
        private tblElements;
        private thead;
        private tbody;
        private tfoot;
        private tr;
        private th;
        private td;
        private system;
        private header;
        private fnCHeader;
        private fnCContent;
        /**
         *
         */
        constructor();
        /**
         *
         */
        getThead(): any;
        /**
         *
         */
        getTbody(): any;
        /**
         *
         */
        toHead(component: any): this;
        /**
         *
         */
        toHeadTr(component: any): this;
        /**
         *
         */
        toBody(component: any): this;
        /**
         *
         */
        toFoot(component: any): this;
        /**
         *
         */
        toBodyTr(component: any): this;
        /**
         *
         */
        toFootTr(component: any): this;
        /**
         *
         *
         */
        setHeader(columns: any): this;
        /**
         * [setCustomize description]
         * @param  {Function} fn      [description]
         * @return {[type]}           [description]
         */
        setHeaderCustomize(fn: any): this;
        /**
         *
         * @param  {[type]} rows
         * @return {[type]}
         */
        build(content: any): this;
        /**
         * [setCustomize description]
         * @param  {Function} fn      [description]
         * @return {[type]}           [description]
         */
        setContentCustomize(fn: any): this;
        /**
         *
         * @param  {[type]} row [description]
         * @return {[type]}     [description]
         */
        private validateSystemKeys(row);
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Tbody extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Td extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
        /**
         *
         * @param  {[type]} num [description]
         * @return {[type]}     [description]
         */
        colspan(cols: any): this;
        /**
         *
         * @param  {[type]} row [description]
         * @return {[type]}     [description]
         */
        rowspan(rows: any): this;
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Textarea extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Tfoot extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Th extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
        colspan(cols: any): this;
        /**
         *
         * @param  {[type]} row [description]
         * @return {[type]}     [description]
         */
        rowspan(rows: any): this;
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Thead extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Time extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Title extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Tr extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Track extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class U extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Ul extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Var extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Video extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Wbr extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    class TagAdapter {
        /**
         *
         */
        private element;
        /**
         *
         */
        di: any;
        /**
         *
         */
        constructor(element: any);
        setDi(di: any): this;
        getDi(): any;
        /**
         *
         */
        get(): any;
    }
}
declare namespace Northwind.Html {
    class Dom {
        private di;
        /**
         *
         */
        private element;
        /**
         *
         * @param element
         */
        constructor(element?: any);
        /**
         *
         * @param id
         */
        getById(id: string, context?: any): any;
        /**
         *
         */
        getByTag(name: string): any;
        /**
         *
         */
        getByClass(name: string, context?: any): any;
        /**
         *
         */
        getElement(): any;
        /**
         *
         * @param element
         */
        setElement(element: any): void;
        setDi(di: any): void;
        getDi(): any;
    }
}
declare namespace Northwind.Tag {
    class FactoryTag {
        di: any;
        /**
         *
         */
        private context;
        /**
         *
         */
        constructor(ctx: any);
        setDi(di: any): this;
        getDi(): any;
        /**
         *
         */
        get(tagName: any): Html.Component;
    }
}
declare namespace Northwind.Service {
    class FactoryDefault extends Northwind.Service.Container {
        di: any;
        constructor();
        getDom(): any;
        getAjax(): any;
        getEm(): any;
        getContainer(): any;
        getTag(name: string): any;
        getEvent(): any;
        setDi(di: any): this;
        getDi(): any;
    }
}
declare namespace Northwind.Mvc {
    class Controller extends Service.FactoryDefault {
        constructor();
        /**
         *
         */
        initialize(): void;
    }
}
declare namespace Northwind.Mvc {
    class AjaxModel extends Northwind.Mvc.RawModel implements Northwind.Mvc.ModelInterface {
        source: string;
        insertUrl: string;
        deleteUrl: string;
        updateUrl: string;
        findUrl: string;
        findOneUrl: string;
        countUrl: string;
        params: Object;
        internalId: string;
        method: string;
        constructor();
        setSource(data: any): void;
        setInsertUrl(url: string): void;
        setFindUrl(url: string): void;
        setFindOneUrl(url: string): void;
        setCountUrl(url: string): void;
        setDeleteUrl(url: string): void;
        setUpdateUrl(url: string): void;
        getInsertUrl(): string;
        getFindUrl(): string;
        getDeleteUrl(): string;
        getUpdateUrl(): string;
        setParams(params: Object): void;
        getParams(): Object;
        setMethod(method: string): void;
        getMethod(): string;
    }
}
declare namespace Northwind.Mvc {
    class StaticModel extends Northwind.Mvc.RawModel implements Service.InjectionAwareInterface {
        private index;
        private container;
        di: Service.Container;
        /**
         *
         */
        constructor(di: Service.Container);
        /**
         *
         */
        setData(data: any): void;
        /**
         *
         */
        getData(): any;
        /**
         *
         */
        getObjectData(): any;
        /**
         *
         */
        setDi(di: Service.Container): void;
        /**
         *
         */
        getDi(): Service.Container;
        /**
         *
         */
        setIndex(index: any): void;
        /**
         *
         */
        getIndex(): number;
        /**
         *
         */
        setContainer(container: any): void;
        /**
         *
         */
        getContainer(): Service.Container;
    }
}
declare namespace Northwind.Mvc {
    class AjaxModelPersistent extends Northwind.Mvc.StaticModel implements Northwind.Mvc.ModelInterface {
        source: string;
        insertUrl: string;
        deleteUrl: string;
        updateUrl: string;
        findUrl: string;
        params: Object;
        internalId: string;
        method: string;
        setSource(data: any): void;
        setAjaxInit(value: boolean): void;
        getAjaxInit(): boolean;
        setInsertUrl(url: string): void;
        setFindUrl(url: string): void;
        setDeleteUrl(url: string): void;
        setUpdateUrl(url: string): void;
        getInsertUrl(): string;
        getFindUrl(): string;
        getDeleteUrl(): string;
        getUpdateUrl(): string;
        setParams(params: Object): void;
        getParams(): Object;
        setMethod(method: string): void;
        getMethod(): string;
    }
}
declare namespace Northwind.Builder {
    class Transaction {
        constructor();
        get(row: any): void;
    }
}
declare namespace Northwind.Builder {
    class And extends Northwind.Builder.Transaction {
        /**
         *
         */
        private condition;
        /**
         *
         * @param condition
         */
        constructor(condition: any);
        /**
         *
         */
        get(row: any): boolean;
    }
}
declare namespace Northwind.Builder {
    class ComparisonOperators {
        static AND: string;
        static OR: string;
        static EQUAL: string;
        static DIFFERENT: string;
    }
}
declare namespace Northwind.Builder {
    class DataType {
        static BOOLEAN: number;
        static INTEGER: number;
        static STRING: number;
        static OBJECT: number;
        static ARRAY: number;
        static CLASS: number;
        static BOOLEAN_TYPE: string;
        static INTEGER_TYPE: string;
        static STRING_TYPE: string;
        static OBJECT_TYPE: string;
        /**
         *
         */
        static getValueByType(value: any): any;
    }
}
declare namespace Northwind.Builder {
    class Group extends Northwind.Builder.Transaction {
        constructor();
        get(): void;
    }
}
declare namespace Northwind.Builder {
    class Gt extends Northwind.Builder.Transaction {
        /**
         *
         */
        private condition;
        /**
         *
         * @param condition
         */
        constructor(condition: any);
        /**
         *
         */
        get(row: any): boolean;
    }
}
declare namespace Northwind.Builder {
    class Gte extends Northwind.Builder.Transaction {
        /**
         *
         */
        private condition;
        /**
         *
         * @param condition
         */
        constructor(condition: any);
        /**
         *
         */
        get(row: any): boolean;
    }
}
declare namespace Northwind.Builder {
    class In extends Northwind.Builder.Transaction {
        /**
         *
         */
        private conditions;
        /**
         *
         * @param condition
         */
        constructor(condition: Object);
        get(): string;
    }
}
declare namespace Northwind.Builder {
    class Like extends Northwind.Builder.Transaction {
        /**
         *
         */
        private condition;
        /**
         *
         * @param condition
         */
        constructor(condition: any);
        /**
         *
         */
        get(row: any): boolean;
    }
}
declare namespace Northwind.Builder {
    class Lt extends Northwind.Builder.Transaction {
        /**
         *
         */
        private condition;
        /**
         *
         * @param condition
         */
        constructor(condition: any);
        /**
         *
         */
        get(row: any): boolean;
    }
}
declare namespace Northwind.Builder {
    class Lte extends Northwind.Builder.Transaction {
        /**
         *
         */
        private condition;
        /**
         *
         * @param condition
         */
        constructor(condition: any);
        /**
         *
         */
        get(row: any): boolean;
    }
}
declare namespace Northwind.Builder {
    class Not extends Northwind.Builder.Transaction {
        /**
         *
         */
        private condition;
        /**
         *
         * @param condition
         */
        constructor(condition: any);
        /**
         *
         */
        get(row: any): boolean;
    }
}
declare namespace Northwind.Builder {
    class NotIn extends Northwind.Builder.Transaction {
        /**
         *
         */
        private conditions;
        /**
         *
         * @param condition
         */
        constructor(condition: Object);
        get(): string;
    }
}
declare namespace Northwind.Builder {
    class Operators {
        static OR: string;
        static AND: string;
        static SORT: string;
        static IS_NOT: string;
        static LIMIT: string;
        static COLUMNS: string;
        static CONDITIONAL: string;
    }
}
declare namespace Northwind.Builder {
    class Or extends Northwind.Builder.Transaction {
        /**
         *
         */
        private condition;
        /**
         *
         * @param condition
         */
        constructor(condition: any);
        /**
         *
         */
        get(row: any): boolean;
    }
}
declare namespace Northwind.Builder {
    class Sort {
        static ASC: number;
        static DESC: number;
        static sortByField(data: any, field: any): any[];
    }
}
declare namespace Northwind.Mvc {
    class Deny {
        static getDeny(): string[];
    }
}
declare namespace Northwind.Mvc {
    interface ModelInterface {
        insertUrl: string;
        deleteUrl: string;
        updateUrl: string;
        findUrl: string;
        state: number;
        internalId: string;
        setSource(source: Object): void;
        setFindUrl(url: string): void;
        setInsertUrl(url: string): void;
        setUpdateUrl(url: string): void;
        setDeleteUrl(url: string): void;
        getFindUrl(): string;
        getInsertUrl(): string;
        getUpdateUrl(): string;
        getDeleteUrl(): string;
    }
}
declare namespace Northwind.Mvc {
    class Query {
        private lim;
        private sort;
        private data;
        private cols;
        private conds;
        private sortConds;
        private transactions;
        private negativeConds;
        private negativeTransactions;
        /**
         *
         * @param data
         */
        constructor(data?: any);
        /**
         *
         */
        columns(cols: any): this;
        /**
         *
         */
        getColumns(): string[];
        /**
         *
         * @param row
         */
        private resolveColumns(row);
        /**
         *
         * @param condClass
         */
        where(conditions: any): this;
        limit(limit: any): this;
        private addOperator(length, operator);
        /**
         *
         * @param conditions
         */
        orderBy(sortContent: Object): void;
        /**
         *
         */
        private resolveSort(results);
        /**
         *
         * @param row
         */
        private miniChecksum(row);
        /**
         *
         * @param result
         * @param row
         */
        private ifExistOnResult(result, row);
        /**
         *
         */
        get(): any[];
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Hr extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Summary extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Tag {
    /**
     * [ViewElement description]
     * @type {[type]}
     */
    class Sup extends Northwind.Html.Component {
        /**
         *
         */
        constructor();
    }
}
declare namespace Northwind.Interfaces {
    interface ITagSignature {
        new (context: any, params?: Object): any;
    }
}
declare namespace Northwind.Network {
    class MethodType {
        static POST: string;
        static GET: string;
        static PUT: string;
        static DELETE: string;
    }
}
declare namespace Northwind {
    class Application {
        /**
         *
         */
        private config;
        /**
         *
         */
        private try;
        /**
         *
         */
        private env;
        /**
         *
         */
        private catchErrors;
        /**
         *
         */
        private domManager;
        private restricted;
        /**
         *
         */
        constructor();
        /**
         *
         */
        setScope(env: number): void;
        /**
         *
         */
        setConfig(config: Northwind.Environment.Config): void;
        /**
         *
         */
        getConfig(): Object;
        /**
         *
         */
        private resolveConfig(di);
        /**
         *
         */
        private resolveUrl(di, urls);
        /**
         *
         */
        private resolveControllers(di, controllers);
        /**
         *
         */
        private resolvePropertiesController(controller, di);
        /**
         *
         */
        private resolveServices(di, service);
        /**
         *
         */
        catch(fn: any): this;
        /**
         *
         */
        start(): void;
    }
}
declare namespace Lexer {
}
declare namespace Tokenizer {
}
declare namespace Northwind.Persistence {
    class ComparisonOperators {
        static AND: string;
        static OR: string;
        static EQUAL: string;
        static DIFFERENT: string;
    }
}
declare namespace Northwind.Persistence {
    class DatamapperOperators {
        static OR: string;
        static AND: string;
        static SORT: string;
        static IS_NOT: string;
        static LIMIT: string;
        static COLUMNS: string;
        static CONDITIONAL: string;
    }
}
declare namespace Northwind.Persistence {
    class DataType {
        static BOOLEAN: number;
        static INTEGER: number;
        static STRING: number;
        static OBJECT: number;
        static ARRAY: number;
        static CLASS: number;
        static BOOLEAN_TYPE: string;
        static INTEGER_TYPE: string;
        static STRING_TYPE: string;
        static OBJECT_TYPE: string;
        /**
         *
         */
        static getValueByType(value: any): any;
    }
}
declare namespace Northwind.Reflection {
    class Reflection {
        private classToReflect;
        private methods;
        private attributes;
        private deny;
        constructor();
        getName(obj: any): string;
        read(obj: any): string;
        getAtttributeAsObjects(obj: any): {};
        checkDataObject(key: any): boolean;
        /**
         *
         */
        getMethods(): any[];
        /**
         *
         */
        getAttributes(): any[];
    }
}
declare namespace Northwind.Persistence {
    class UnitOfWork {
        static NEW: number;
        static CREATED: number;
        static DELETED: number;
        private detached;
        private updated;
        private deleted;
        constructor();
    }
}
declare namespace Northwind.Persistence {
    class Hydrator {
        private reflector;
        constructor();
        hydrate(model: any, data: any): any;
    }
}
declare namespace Northwind.Persistence {
    class Filter {
        private params;
        private first;
        private final;
        private init;
        private sort;
        private limit;
        private columns;
        constructor();
        buildCondition(params: any): void;
        getSort(sortContent: any): void;
        getLimit(limit: any): void;
        getExpression(key: any, content: any, operator: any, index: any, length: any, comparison?: string): void;
        /**
         *
         */
        getColumns(row: any): Object;
        /**
         *
         */
        getMultipleRowValues(rsp: any, conds?: boolean): any[];
        getOneRowValue(data: any): void;
    }
}
declare namespace Northwind.Persistence {
    class EntityManager implements EntityManagerInterface {
        di: Northwind.Service.Container;
        uow: Northwind.Persistence.UnitOfWork;
        private container;
        private ajax;
        private hydrator;
        private source;
        private model;
        private fnResponse;
        private resultSet;
        /**
         * Entity manager is a class
         */
        constructor();
        /**
         *
         */
        private getContainer();
        /**
         *
         * @param model
         * @param params
         */
        find(model: any, params?: Object): this;
        /**
         *
         * @param model
         * @param params
         */
        findOne(model: any, params?: Object): this;
        /**
         *
         * @param model
         * @param params
         */
        count(model: any, params?: Object): this;
        /**
         *
         */
        setWhenIsModel(model: any, params: any, type: any): void;
        private callAjax(objModel, type, params);
        /**
         *
         */
        save(model: any): this;
        /**
         *
         */
        delete(model: any): this;
        /**
         *
         */
        response(fn: Function): this;
        /**
         *
         */
        checkModel(fn: any, type: any, model: any, objModel: any, params: any): void;
        /**
         *
         */
        private setResponseAjax(fn, type, model, objModel, params);
        /**
         *
         */
        setResponseStatic(fn: any, objModel: any, type: any, model: any, params: any): void;
        /**
         *
         */
        private setResponse(data, objModel, type, model, params);
        /**
         *
         */
        private getResultSet(response, params, model, objModel);
        /**
         *
         */
        flush(): boolean;
        /**
         *
         */
        reset(): boolean;
        /**
         *
         */
        group(): {};
        /**
         *
         */
        distinct(): {};
        /**
         *
         */
        purge(): boolean;
        /**
         *
         */
        forget(): boolean;
        checksum(obj: any): string;
        setDi(di: Service.Container): void;
        getDi(): Service.Container;
    }
    interface EntityManagerInterface extends Northwind.Service.InjectionAwareInterface {
        uow: Object;
        find(conext: any, model: Northwind.Mvc.RawModel, params: Object): any;
        findOne(context: any, model: Northwind.Mvc.RawModel, params: Object): any;
        count(context: any, model: Northwind.Mvc.RawModel, params: Object): any;
        save(context: any, model: Northwind.Mvc.RawModel): any;
        delete(context: any, model: Northwind.Mvc.RawModel): any;
        flush(): any;
        reset(): any;
    }
}
declare namespace Northwind.Persistence {
    class Sort {
        static ASC: number;
        static DESC: number;
        static sortByField(data: any, field: any): any[];
    }
}
declare namespace Northwind.Reflection {
    class Checksum {
        /**
         *
         */
        private toObj;
        /**
         *
         */
        constructor(obj: Object);
        private utf8ToBase64(str);
        /**
         *
         */
        getChecksum(): Object;
    }
}
declare namespace Northwind.Service {
    interface InjectionAwareInterface {
        di: Service.Container;
        setDi(di: Service.Container): any;
        getDi(): Service.Container;
    }
}
declare namespace Northwind.Url {
    class Url extends Service.Container {
        getQuery(url?: any): {};
    }
}
