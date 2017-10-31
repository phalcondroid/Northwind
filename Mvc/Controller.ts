
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
        private globals;

        public constructor()
        {
            super();
        }

        /**
         *
         */
        public setGlobals(globals)
        {
            this.globals = globals;
            return this;
        }

        /**
         *
         */
        public getGlobals()
        {
            return this.globals;
        }

        /**
         *
         */
        public initialize()
        {

        }
    }
}
