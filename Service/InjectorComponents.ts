namespace Northwind.Service
{
    export class InjectorComponents
    {
    	public tag;
    	public ajax;
    	public dom;
        public di; 
        public event;
        public container;
        public em;

        public setDi(di : Service.Container)
        {
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

        public getDi()
        {
        	return this.di;
        }

        public setDom(dom)
        {
        	this.dom = dom;
        }

        public getDom()
        {
        	return this.dom;
        }

        public setTag(tag)
        {
        	this.tag = tag;
        }

        public getTag()
        {
        	return this.tag;
        }

        public setEvent(event)
        {
        	this.event = event;
        }

        public getEvent()
        {
        	return this.event;
        }

        public setEm(em)
        {
        	this.em = em;
        }
        
        public getEm()
        {
        	return this.em;
        }
        
        public setContainer(container)
        {
        	this.container = container;
        }

        public getContainer()
        {
        	return this.container;
        }

        public setAjax(ajax)
        {
        	this.ajax = ajax;
        }

        public getAjax()
        {
        	return this.ajax;
        }
    }
}
