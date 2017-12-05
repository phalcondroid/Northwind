/// <reference path="../Mvc/View/Html/Factory/FactoryTag.ts" />

namespace Northwind.Service
{
    export class Allocator
    {
        public constructor()
        {
            Northwind.Service.DependencyInjector.get().set(
                "ajax",
                new Northwind.Network.Ajax
            );
            Northwind.Service.DependencyInjector.get().set(
                "container",
                new Northwind.Service.Container
            );

            let em = new Northwind.Persistence.EntityManager;
            Northwind.Service.DependencyInjector.get().set(
                "em",
                em
            );

            let dom = new Northwind.Html.Dom
            Northwind.Service.DependencyInjector.get().set(
                "dom",
                dom
            );

            let tag = new Northwind.Tag.FactoryTag(this);
            Northwind.Service.DependencyInjector.get().set(
                "tag",
                tag
            );

            let eventManager = new Northwind.Events;
            Northwind.Service.DependencyInjector.get().set(
                "event",
                eventManager
            );
        }
    }
}