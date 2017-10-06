/// <reference path="../Errors/Message.ts"/>

namespace Northwind.Helper
{
    export class Validator
    {
        public static validStructArray(data : any[])
        {
            var message = Northwind.Errors.Message;
            try {
                if (Array.isArray(data)) {
                    var firstPosition = data[0];
                    if (typeof firstPosition == "object") {
                        return true;
                    } else {
                        throw message.NOT_VALID_ARRAY_OBJECT;
                    }
                } else {
                    throw message.NOT_VALID_ARRAY;
                }
            } catch (e) {

            }
        }
    }
}
