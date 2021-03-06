
namespace Northwind.Network
{
    export class Ajax
    {
        private httpRequest : any;
        private context     : Object = {};
        private method      : string = "POST";
        private parameters  : string = "";
        private error       : any;
        private url         : string;
        private container   : any[] = [];
        public  responseFn  : Function = function() {};
        public  bfSendFn    : Function = function () {}.bind(this);

        /**
         *
         */
        public constructor()
        {
            this.httpRequest = new XMLHttpRequest();
        }

        /**
         *
         */
        public setContext(ctx : Object)
        {
            this.context = ctx;
        }

        /**
         *
         */
        public getContext()
        {
            return this.context;
        }

        /**
         *
         */
        public setUrl(url)
        {
            this.url = url;
            return this;
        }

        /**
         *
         */
        public getUrl()
        {
            return this.url;
        }

        /**
         *
         */
        public set(key, value)
        {
            this.container[key] = value;
        }

        /**
         *
         */
        public get(key)
        {
            return this.container[key];
        }

        /**
         *
         */
        public setParams(params, value : any = false)
        {
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
            } else if (value) {
                this.parameters = params + "=" + encodeURIComponent(value);
            }

            return this;
        }

        /**
         *
         */
        public POST()
        {
            this.setMethod("POST");
            return this;
        }

        /**
         *
         */
        public PUT()
        {
            this.setMethod("PUT");
            return this;
        }

        /**
         *
         */
        public DELETE()
        {
            this.setMethod("DELETE");
            return this;
        }

        /**
         *
         */
        public GET()
        {
            this.setMethod("GET");
            return this;
        }

        /**
         *
         */
        public setMethod(method : string)
        {
            this.method = method;
            return this;
        }

        public addContext()
        {
            this.httpRequest.context = this.getContext();
            this.httpRequest.getContext = function () {
                return this.context;
            };
        }

        /**
         *
         */
        public response(responseFunction : Function)
        {
            this.responseFn = responseFunction;
            try {
                this.bfSendFn();
                this.addContext();
                this.httpRequest.onreadystatechange = function () {
                    if (this.httpRequest.readyState === this.httpRequest.DONE) {
                        if (this.httpRequest.status === 200) {
                            if (typeof this.httpRequest.response != "undefined") {
                                if (typeof this.responseFn != "undefined") {
                                    this.responseFn(
                                        this.httpRequest.response
                                    );
                                }
                            }
                        } else {
                            this.error = "ajax status" + this.httpRequest.status + " " + this.httpRequest.statusText;
                        }
                    }
                }.bind(this);
            } catch (e) {
                console.log("Network.AJax.Exception", e);
            }
            return this;
        }

        /**
         *
         */
        public beforeSend(fn : Function)
        {
            this.bfSendFn = fn;
        }

        /**
         *
         */
        private setHeaders()
        {
            this.httpRequest.setRequestHeader(
                'Content-Type',
                'application/x-www-form-urlencoded'
            );
        }

        /**
         *
         */
        public getError(errorFunction)
        {
            errorFunction(this.error);
        }

        public clear()
        {
            this.method     = "GET";
            this.parameters = "";
            this.error      = null;
            this.url        = "";
            this.bfSendFn   = function () {};
            this.responseFn = function () {};
            this.container  = [];
        }

        /**
         *
         */
        public send(fn : any = false)
        {

            if (typeof fn == "function") {
                this.response(fn.bind(this));
            }

            this.httpRequest.open(
                this.method,
                this.url
            );
            this.setHeaders();
            this.httpRequest.send(
                this.parameters
            );
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
         */
        public getTag(tag : any)
        {
            return Northwind.Service.DependencyInjector.get().get("tag").tag(
                tag
            );
        }

        /**
         * 
         * @param tag 
         */
        public getEvent(tag : any = false)
        {
            let events = Northwind.Service.DependencyInjector.get().get(
                "event"
            );
        	return events.tag(tag);
        }

        public getDi()
        {
            return Northwind.Service.DependencyInjector.get();
        }
    }
}
