
/// <reference path="./Container.ts"/>
/// <reference path="../Network/Ajax.ts" />
/// <reference path="../Mvc/View/Html/Dom.ts"/>
/// <reference path="../Mvc/View/Html/FactoryTag.ts"/>

namespace Northwind.Service
{
    export class FactoryDefault extends Northwind.Service.Container
    {
        public di;

        public constructor()
        {
            super();
        }

        public getDom()
        {
            return this.di.get(
                "dom"
            );
        }

        public getAjax()
        {
            return this.di.get(
                "ajax"
            );
        }

        public getEm()
        {
            return this.di.get(
                "em"
            );
        }

        public getContainer()
        {
            return this.di.get(
                "container"
            );
        }

        public getTag(name : string)
        {
            let tag = this.di.get("tag");
            tag.setDi(this.di);
            return tag.get(name);
        }

        public getEvent()
        {
            let events = this.di.get(
                "event"
            );
            return events;
        }

        public setDi(di)
        {
            this.di = di;
            this.di.set("ajax",       new Northwind.Network.Ajax);
            this.di.set("container",  new Northwind.Service.Container);

            let em = new Northwind.Persistence.EntityManager;
            em.setDi(this.di);
            this.di.set("em", em);

            let dom = new Northwind.Html.Dom;
            dom.setDi(di);
            this.di.set("dom", dom);

            let tag = new Northwind.Tag.FactoryTag(this);
            tag.setDi(di);
            this.di.set("tag", tag);

            let eventManager = new Northwind.Events;
            eventManager.setDi(di);
            this.di.set("event", eventManager);

            return this;
        }

        public getDi()
        {
            return this.di;
        }
    }
}
