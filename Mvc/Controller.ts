
///<reference path="../Service/FactoryDefault.ts" />

/*
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
*/

namespace Northwind.Mvc
{
    //@sealed
    export class Controller extends Service.FactoryDefault
    {
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
    }
}
