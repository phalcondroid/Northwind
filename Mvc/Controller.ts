///<reference path="./View/Html/TagAdapter.ts"/>
///<reference path="../Service/Injectable.ts"/>

/*
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
*/

namespace Northwind.Mvc
{
    //@sealed
    export class Controller extends Northwind.Service.Injectable
    {
        
        /**
         *
         */
        public initialize()
        {
        }
    }
}
