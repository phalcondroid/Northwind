///<reference path="./Container.ts" />

namespace Northwind.Service
{
    export class Di
    {
        private static di = new Service.Container;

        public static getInstance()
        {
            return new Northwind.Service.Container;
        }

        public static get()
        {
            return Di.di;
        }
    }
}