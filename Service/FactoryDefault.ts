/// <reference path="../Network/Ajax.ts" />
/// <reference path="../Mvc/View/Html/Dom.ts"/>
/// <reference path="../Persistence/Hydrator.ts" />
/// <reference path="../Persistence/EntityManager.ts" />

namespace Northwind.Service
{
    export class FactoryDefault extends Northwind.Service.Container
    {
        public constructor()
        {
            super();
            this.set("ajax",       new Northwind.Network.Ajax);
            this.set("container",  new Northwind.Service.Container);
            this.set("domManager", new Northwind.Html.Dom);

            var em = new Northwind.Persistence.EntityManager;
            em.setDi(this);

            this.set("em", em);
        }
    }
}
