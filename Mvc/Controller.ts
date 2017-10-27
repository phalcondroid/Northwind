
///<reference path="../Service/Container.ts"/>

/*
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
*/

namespace Northwind.Mvc
{
    //@sealed
    export class Controller extends Service.Container
    {
        private di;
        public constructor()
        {
            super();
        }

        /**
         *
         */
        public initialize()
        {

        }

        public setDi(di)
        {
            this.di = di;
        }

        public getDi()
        {
            return this.di;
        }
    }
}
