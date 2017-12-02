namespace Northwind.Service
{
    export class DependencyInjector
    {
        private static di = new Service.Container;

        public static getInstance()
        {
            return new Northwind.Service.Container;
        }

        public static get()
        {
            return DependencyInjector.di;
        }
    }
}