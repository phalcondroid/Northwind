namespace Northwind.Service
{
    export class InjectorComponents
    {
    	public tagElement;
    	public ajaxNative;
    	public domNative;
        public diNative; 
        public eventNative;
        public containerNative;
        public emNative;

        public setDi(di : Service.Container)
        {
            this.diNative = di;
            if (typeof di != "undefined") {
                if (di.hasKey("ajax")) {
                    this.ajaxNative = di.get("ajax");
                }
                if (di.hasKey("em")) {
                    this.emNative = di.get("em");
                }
                if (di.hasKey("dom")) {
                    this.domNative = di.get("dom");
                }
                if (di.hasKey("tag")) {
                    this.tagElement = di.get("tag");
                }
                if (di.hasKey("event")) {
                    this.eventNative = di.get("event");
                }
                if (di.hasKey("container")) {
                    this.containerNative = di.get("container");
                }
                this.diNative = di;
            }
        }

        public getDi()
        {
        	return this.diNative;
        }

        public setDom(dom)
        {
        	this.domNative = dom;
        }

        public getDom()
        {
        	return this.domNative;
        }

        public setTag(tag)
        {
        	this.tagElement = tag;
        }

        public getTag()
        {
        	return this.tagElement;
        }

        public setEvent(event)
        {
        	this.eventNative = event;
        }

        public getEvent()
        {
        	return this.eventNative;
        }

        public setEm(em)
        {
        	this.emNative = em;
        }
        
        public getEm()
        {
        	return this.emNative;
        }
        
        public setContainer(container)
        {
        	this.containerNative = container;
        }

        public getContainer()
        {
        	return this.containerNative;
        }

        public setAjax(ajax)
        {
        	this.ajaxNative = ajax;
        }

        public getAjax()
        {
        	return this.ajaxNative;
        }
    }
}
