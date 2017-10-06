namespace Northwind.Service
{
    export class Injectable implements Northwind.Service.InjectionAwareInterface
    {
        di;

        public constructor()
        {
            
        }

        public inject()
        {
            for (var key in this.getDi()) {
                this[key] = this.getDi()[key];
            }
        }

        /**
         *
         */
        public getDi() : Northwind.Service.Container
        {
            return this.di;
        }

        /**
         *
         */
        public setDi(di : Northwind.Service.Container)
        {
            this.di = di;
        }
    }
}