///<reference path="Transaction.ts"/>

namespace Northwind.Builder
{
    export class Not extends Northwind.Builder.Transaction
    {
        /**
         * 
         */
        private condition: Object = {};

        /**
         * 
         * @param condition 
         */
        public constructor(condition : any)
        {
            super();
            if (typeof condition == "object") {
                this.condition = condition;
            } else {
                throw "And condition must be an object";
            }
        }

        /**
         * 
         */
        public get(row)
        {
            var result = new Array();
            var size   = Object.keys(this.condition).length;
            for (var key in row) {
                if (row[key] == this.condition[key]) {
                    result.push(true);
                }
            }
            for (var i = 0; i < size; i++) {
                if (result[i] == true) {
                    return false;
                }
            }
            return true;
        }
    }
}