
/// <reference path="./Container.ts"/>
/// <reference path="../Network/Ajax.ts" />
/// <reference path="../Mvc/View/Html/Dom.ts"/>
/// <reference path="../Mvc/View/Html/FactoryTag.ts"/>

namespace Northwind.Service
{
    export class FactoryDefault extends Northwind.Service.Container
    {
        private di;

        public constructor()
        {
            super();
            this.set("ajax",       new Northwind.Network.Ajax);
            this.set("container",  new Northwind.Service.Container);
            this.set("dom", new Northwind.Html.Dom);

            let em = new Northwind.Persistence.EntityManager;
            em.setDi(this);

            this.set("em", em);

            let dom = new Northwind.Html.Dom;
            this.set("dom", dom);

            let tag = new Northwind.Tag.FactoryTag(this);
            this.set("tag", tag);

            let eventManager = new Northwind.Events;
            this.set("events", eventManager);
        }

        public getDom()
        {
            return this.get("dom");
        }

        public getAjax()
        {
            return this.get("ajax");
        }

        public getEntityManager()
        {
            return this.get("em");
        }

        public getContainer()
        {
            return this.get("container");
        }

        public getTag(name : string)
        {
            let tag = this.get("tag");
            return tag.get(name);
        }

        public getEvent()
        {
            let events = this.get("events");
            return events;
        }

        public setDi(di)
        {
            this.di = di;
            return this;
        }

        public getDi()
        {
            return this;
        }
    }
}
